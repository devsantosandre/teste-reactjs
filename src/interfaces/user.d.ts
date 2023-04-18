export interface UserData {
  cns: string;
  contato: {
    celular: string;
    email: string;
    email_verificado: boolean;
    pessoa: string;
    telefone: string;
  },
  cpf: string;
  created_at: string;
  data_nascimento: string;
  data_obito: string;
  deficiente: boolean;
  endereco: [];
  estado_civil: string;
  identificacao_social: string;
  motivo_obito: string;
  nacionalidade: string;
  naturalidade: string;
  nome: string;
  nome_mae: string;
  nome_pai: string;
  nome_social: string;
  orgao_expedidor: string;
  raca_cor: string;
  responsavel: string;
  rg: string;
  rg_uf: string;
  sexo: string;
  tipo_deficiente: string;
  uf_naturalidade: string;
  updated_at: string;
}

export interface UserDataSecondary {
  dataNascimento: string;
  email: string;
  email_verified: boolean
  family_name: string;
  given_name: string;
  name: string;
  nomeMae: string;
  preferred_username?: string;
  sub: string;
  username?: string;
  cpf?: string;
}
