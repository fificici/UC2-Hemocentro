let cadastrados = []

function menu() {
    console.log(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair`)
}

const readlineSync = require('readline-sync');

function cadastro() {
    let cadPergunta1 = readlineSync.question('Insira seu nome: ')
    let cadPergunta2 = readlineSync.question('Insira sua idade: ')
    let cadPergunta3 = readlineSync.question('Insira seu peso: ')
    let cadPergunta4 = readlineSync.question('Insira seu tipo sanguíneo (A+, A-, B+, B-, AB+, AB-, O+, O-): ')
    let cadPergunta5 = readlineSync.question('Insira a data da sua última doação no modelo dd/mm/aaaa: ')

    let objUsuario = {
        Nome: cadPergunta1.toUpperCase(),
        Idade: parseInt(cadPergunta2),
        Peso: parseFloat(cadPergunta3),
        Tipo: cadPergunta4.toUpperCase(),
        Data: cadPergunta5
    }

    cadastrados.push(objUsuario)
}

function listagem() {
    console.log('----------------------------')
    console.log('LISTAGEM DE DOADORES:')
    console.log('----------------------------')
    console.log('NOME                  | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')

    for (let i = 0; i < cadastrados.length; i++) {
        const usuario = cadastrados[i]
        console.log(`${usuario.Nome.padEnd(20)}| ${String(usuario.Idade).padStart(5)} | ${String(usuario.Peso.toFixed(2)).padStart(5)} | ${usuario.Tipo.padEnd(15)} | ${usuario.Data}`)
    }
}

function buscarPorTipoSanguineo() {
    let tipoSanguineo = readlineSync.question('Digite o tipo sanguíneo para buscar (A+, A-, B+, B-, AB+, AB-, O+, O-): ').toUpperCase()
    let doadoresEncontrados = cadastrados.filter(doador => doador.Tipo === tipoSanguineo)

    if (doadoresEncontrados.length === 0) {
        console.log('Nenhum doador encontrado para o tipo sanguíneo informado.')
    } else {
        console.log('----------------------------')
        console.log(`DOADORES DO TIPO ${tipoSanguineo}:`)
        console.log('----------------------------')
        console.log('NOME                  | IDADE | PESO  | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO')
        doadoresEncontrados.forEach(usuario => {
            console.log(`${usuario.Nome.padEnd(20)}| ${String(usuario.Idade).padStart(5)} | ${String(usuario.Peso.toFixed(2)).padStart(5)} | ${usuario.Tipo.padEnd(15)} | ${usuario.Data}`)
        })
    }
}

function escolha(opcao) {
    switch (opcao) {
        case '1':
            console.log("Cadastro de Doador");
            cadastro()
            break;

        case '2':
            console.log("Lista de Doadores");
            listagem()
            break;

        case '3':
            console.log("Buscar Doador por Tipo Sanguíneo");
            buscarPorTipoSanguineo()
            break;

        case '4':
            console.log("Encerrando o programa...");
            return true;

        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
    return false;
}

function main() {
    let encerrar = false;

    while (!encerrar) {
        menu();
        let opcao = readlineSync.question("Escolha uma opção: ");
        encerrar = escolha(opcao);
    }
}

main()
