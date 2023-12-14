export class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaSecreta: string = "secret123passwordQWE";

    private constructor() {}

    static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    acessoSecretBase(senha: string): void {
        if (senha === this.senhaSecreta) {
            console.log("ALLOWED ACCESS! Welcome 007 agent.");
        } else {
            console.log("ACESS DENIED! You gonna die!");
        }
    }
}