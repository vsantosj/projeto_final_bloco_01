// src/Menu.ts
import readlineSync from 'readline-sync';



export class Menu {
    public showMenu(): number {
        console.clear();
        console.log("E-COMMERCE PRODUTOS DE INFORMÁTICA");
        console.log("===============================");
        console.log("1 - Listar Produtos");
        console.log("2 - Buscar Produto por Nome");
        console.log("3 - Adicionar Produto ao Carrinho");
        console.log("4 - Visualizar Carrinho");
        console.log("5 - Finalizar Compra");
        console.log("0 - Sair");
        console.log("===============================");

        const option = readlineSync.questionInt("Escolha uma opção: ");
        return option;
    }
}



