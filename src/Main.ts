import { Menu } from "./Menu";


let option: number;
const menu:Menu = new Menu();

do {
    option = menu.showMenu();

    switch (option) {
        case 1:
            console.log("\n====Lista de produtos====");
            break;
        case 2:
            console.log("\n====Produto por nome====");
            break;
        case 3:
            console.log("\n====Produto adicionado ao carrinho====");
            break;
        case 4:
            console.log("\n====Produtos no carrinho====");
            break;
        case 5:
            console.log("\nFinalizando compra...");
            break;
        case 0:
            console.log("\nEncerrando programa...");
            break;
        default:
            console.log("\nOpção inválida!");
    }

    if (option !== 0) {
        console.log("\nPressione ENTER para continuar...");
        require("readline-sync").question();
    }

} while (option !== 0);

