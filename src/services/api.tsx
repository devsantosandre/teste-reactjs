import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const apisso = axios.create({
  baseURL: process.env.REACT_APP_API_SSO,
});

const ssoSecondary = axios.create({
  baseURL: process.env.REACT_APP_SSO_MTI,
});

const apisiseci = axios.create({
  baseURL: process.env.REACT_APP_API_SISECI,
});

apisiseci.defaults.headers.common.Authorization = process.env.REACT_APP_API_SISECI_KEY;
apisso.defaults.headers.common.Authorization = process.env.REACT_APP_API_SSO_KEY;


export { apisso, apisiseci, ssoSecondary };
