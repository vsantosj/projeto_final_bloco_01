// src/Menu.ts
import readlineSync from 'readline-sync';



export class Menu {
    public showMenu(): number {
        console.clear();
        console.log("E-COMMERCE PRODUTOS DE INFORMÁTICA");
        console.log("===============================");
        console.log("1 - Adicionar Produto");
        console.log("2 - Listar todos os Produtos");
        console.log("3 - Buscar Produto por Id");
        console.log("4 - Atualizar Produto");
        console.log("5 - Deletar Produto");
        console.log("0 - Sair");
        console.log("===============================");

        const option = readlineSync.questionInt("Escolha uma opção: ");
        return option;
    }
}



