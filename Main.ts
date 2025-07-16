import readlineSync from "readline-sync";
import { ProductController } from "./src/controller/ProductController";
import { Desktop } from "./src/models/Desktop";
import { Menu } from "./src/models/Menu";
import { Monitor } from "./src/models/Monitor";




let products: ProductController = new ProductController();
let ram, brand, processor: string;

let screenSize, type, option: number;

const productType = ["Desktop", "Monitor"];

const menu: Menu = new Menu();

do {

    option = menu.showMenu();

    switch (option) {
        case 1:
            console.log("\n==== Adicionar Produto ====");

            const name = readlineSync.question("Nome do produto: ");
            const price = readlineSync.questionFloat("Preço: R$ ");

            console.log("\n Digite o tipo de produto");
            type = readlineSync.keyInSelect(productType, "", { cancel: false }) + 1;
            switch (type) {
                case 1:
                    console.log("\n=== Criar Desktop ===");
                    processor = readlineSync.question("Processador: ");
                    ram = readlineSync.question("Memória RAM: ");
                    brand = readlineSync.question("Marca: ");

                    const desktop = new Desktop(
                        products.generateId(),
                        name,
                        price,
                        processor,
                        ram,
                        brand);
                    console.log("Produto Desktop criado com sucesso!");

                    break;
                case 2:
                    console.log("\n=== Criar Monitor ===");
                    screenSize = readlineSync.questionInt("Tamanho da Tela: ");

                    const monitor = new Monitor(
                        products.generateId(),
                        name,
                        price,
                        screenSize
                    );
                    console.log("Produto Monitor criado com sucesso!");
                    break;

            }
        case 2:
            console.log("\n==== Lista de Todos os Produtos ====");

            products.listAllProducts();
            
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





