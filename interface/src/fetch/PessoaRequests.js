class PessoaRequests {

    constructor() {
        this.serverUrl = 'http://localhost:3333';
        this.routeListarPessoas = '/pessoas';
    }

    async listarPessoas() {
        const token = localStorage.getItem('token'); //recupera o token do localstorage
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarPessoas}`, 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}` //passa o token no cabeçalho da requisição
                }
            });

            if(!response.ok) {
                throw new Error('Não foi possível listar as pessoas.');
            }

            return response.json();
        } catch (error) {
            console.error(`Erro ao fazer consulta à API: ${error}`);
            return null;
        }
    }

}

export default new PessoaRequests();