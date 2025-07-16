
import { Desktop } from "./src/models/Desktop";
import { Menu } from "./src/models/Menu";
import { Monitor } from "./src/models/Monitor";
import { Product } from "./src/models/Product";



let option: number;
const menu: Menu = new Menu();

const desktop = new Desktop(
    1,
    "Notebook Dell Inspiron",
    4500.00,
    "Intel Core i5",
    "8GB",
    "Dell"

);

const monitor = new Monitor(2, "monitor Dell", 2000, 20);

const listProduct: Product[] = [];

listProduct.push(desktop);

listProduct.push(monitor);



do {

    option = menu.showMenu();

    switch (option) {
        case 1:
            console.log("\n==== Adicionar Produto ====");
            desktop.showProductDetails();
            break;
        case 2:
            console.log("\n==== Lista de Todos os Produtos ====");
            listProduct.forEach(produto => {
                produto.showProductDetails();
                console.log("\n");
            });
            break;
        case 3:
            console.log("\n==== Buscar Produto por ID ====");
            break;
        case 4:
            console.log("\n==== Atualizar Produto ====");
            break;
        case 5:
            console.log("\n==== Deletar Produto ====");
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

