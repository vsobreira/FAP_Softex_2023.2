import { SistemaSeguranca } from "./singletonSecuritySystem";

const sistemaSeguranca = SistemaSeguranca.getInstance();

// tentativa falha
sistemaSeguranca.acessoSecretBase("SenhaMuitoMuitoSecreta");

// tentativa correta
sistemaSeguranca.acessoSecretBase("secret123passwordQWE");