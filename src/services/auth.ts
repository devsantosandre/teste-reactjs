import { AxiosResponse } from "axios";
import { apisiseci, apisso } from "./api";
import { UserData, UserDataSecondary } from "../interfaces/user";

export const saveTokens = (tokenSSO: string, tokenSISECI: string): void => {
  localStorage.setItem("gov_access_token_sso", tokenSSO);
  localStorage.setItem("gov_access_token_siseci", tokenSISECI);
};

export const clearStorage = (): void => {
  localStorage.clear();
};


export const getPathToRedirectLogin = (): string => {
  if (process.env.REACT_APP_SSO_LOGIN_PROVIDER === "primary") {

    return `${process.env.REACT_APP_SSO}/sso/cidadao?client_id=${process.env.REACT_APP_CLIENT_ID}`;
  }

  return `${process.env.REACT_APP_SSO_SECUNDARY}/auth?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
};

export const loginRedirectPrivider = (pathname: string): void => {
  clearStorage();
  localStorage.setItem("pathname_redirect_gov", pathname);
  (window as any).open(getPathToRedirectLogin(), "_self");
};

export const logout = async () => {
  if (process.env.REACT_APP_SSO_LOGIN_PROVIDER === "primary") {
    clearStorage();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    (window as any).open(
      `${process.env.REACT_APP_SSO}/sso/sair?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${window.location.href}`,
      "_self"
    );
  } else {
    clearStorage();
    (window as any).open(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${process.env.REACT_APP_SSO_SECUNDARY}/logout?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&redirect_uri=${window.location.href}`,
      "_self"
    );
  }
};

export const getDataUserSso = (token: string): Promise<AxiosResponse> =>
  apisso.get("/cidadaos/pro/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getDataUserSecondary = (
  token: string,
  access_token_secondary: string
): Promise<AxiosResponse> =>
  apisiseci.get("/profile/externo/", {
    headers: {
      Authorization: `Token ${token}`,
      "Authorization-Externo": access_token_secondary,
    },
  });

export const validateUserSSO = (code: string): Promise<AxiosResponse> =>
  apisso.post(
    "/validar_cidadao/",
    {
      code,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export const loginSigp = (
  code: string,
  redirect_uri?: string
): Promise<AxiosResponse> => {
  if (process.env.REACT_APP_SSO_LOGIN_PROVIDER === "primary") {
    return apisiseci.post("/login-sigp/", {
      code,
      redirect_uri: redirect_uri || process.env.REACT_APP_REDIRECT_URI,
      client_id: process.env.REACT_APP_CLIENT_ID
    });
  }
  return apisiseci.post(
    "/login/externo/",
    {
      code,
      redirect_uri: redirect_uri || process.env.REACT_APP_REDIRECT_URI,
    },
    {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: process.env.REACT_APP_API_SISECI_KEY,
      },
    }
  );
};

const secondaryDataUserAdapter = (data: UserDataSecondary): UserData => {
  const dataF = {
    nome: data.name || '',
    data_nascimento: data.dataNascimento || '',
    nome_mae: data.nomeMae || '',
    cpf: data.preferred_username || data.username || data.cpf || '',
    contato: {
      email: data.email || '',
    },
  };
  return dataF as UserData;
};

export const getUserData = async (token: string, access_token_secondary: string) => {
  if (process.env.REACT_APP_SSO_LOGIN_PROVIDER === "primary") {
    const { data } = await getDataUserSso(token);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data[0];
  }

  const { data } = await getDataUserSecondary(access_token_secondary, token);
  return secondaryDataUserAdapter(data);
};

export const sendCodeForSISECI = async (code: string, history: any) => {
  
  const pathname = localStorage.getItem("pathname_redirect_gov");
  try {
    const { data } = await loginSigp(
      code,
      `${window.location.origin}${window.location.pathname}`
    );

    if (data.key && data.access_token) {
      saveTokens(data.access_token, data.key);
      const spathname = pathname === "/" ? "/home" : pathname;
      
      history.push(spathname || "/", {
        message: data.message ? data.message : "",
      });
    }
  } catch (err) {
    clearStorage();
    history.push(pathname || "/", {
      message: "Erro ao processar o login",
    });
  }
};
