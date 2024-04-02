const readlineSync = require('readline-sync');

// Função que calcula o saldo de vitórias do personagem
function saldo_vitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função que calcula o nível do personagem
function calcular_nivel(vitorias) {
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendario";
    } else {
        nivel = "Imortal";
    }
    return nivel;
}

function main() {
    let resposta;
    do {
        console.clear();
        console.log("---------  ** REALM OF LEGENDS ** ---------\n");

        let nome_personagem = readlineSync.question("Digite o nome do seu personagem abaixo: ");
        console.log("\n");
        let classe_personagem = readlineSync.question("Digite a classe do seu personagem abaixo: ");
        console.log("\n");

        let vitorias = parseInt(readlineSync.question("Quantidade de vitorias: "));
        console.log("\n");
        let derrotas = parseInt(readlineSync.question("Quantidade de derrotas: "));
        console.log("\n");

        // Chama a função para calcular o nível do personagem
        let nivel = calcular_nivel(vitorias);

        // Chama a função para calcular o saldo de vitórias do personagem
        let saldoVitorias = saldo_vitorias(vitorias, derrotas);

        // Exibindo o saldo de vitórias e o nível do personagem
        console.clear();
        console.log("---------  ** REALM OF LEGENDS ** ---------\n");
        console.log("  NOME: " + nome_personagem + "\n");
        console.log("  CLASSE: " + classe_personagem + "\n");
        console.log("  SALDO DE VITORIAS: " + saldoVitorias + "\n");
        console.log("  NIVEL: " + nivel + "\n");
        console.log("--------------------------------------------\n");

        resposta = readlineSync.question("Gostaria de continuar? (S/N): ");
        console.log("\n");

    } while (resposta === 'S' || resposta === 's');
}

main();