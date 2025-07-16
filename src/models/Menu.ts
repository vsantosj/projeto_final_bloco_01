import readlinesync = require("readline-sync");
import { ProductController } from "../controller/ProductController";
import { Desktop } from "./Desktop";
import { Monitor } from "./Monitor";
import { Product } from "../models/Product";

export class Menu {
    private products: ProductController;
    private productType = ["Desktop", "Monitor"];

    constructor() {
        this.products = new ProductController();
    }

    public start(): void {
        let option: number;
        let name: string;
        let price: number;
        let type: number;
        let processor: string;
        let ram: string;
        let brand: string;
        let screenSize: number;
        let id: number;
        let product: Product | null;

        do {
            console.clear();
            console.log("\n========= MENU E-COMMERCE =========");
            console.log("1 - Adicionar Produto");
            console.log("2 - Listar Todos os Produtos");
            console.log("3 - Buscar Produto por ID");
            console.log("4 - Atualizar Produto");
            console.log("5 - Deletar Produto");
            console.log("0 - Sair");
            console.log("===================================");
            option = readlinesync.questionInt("Escolha uma opção: ");

            switch (option) {
                case 1:
                    try {
                        console.log("\n==== Adicionar Produto ====");
                        name = readlinesync.question("Nome do produto: ");
                        price = readlinesync.questionFloat("Preço: R$ ");

                        console.log("\nTipo do Produto:");
                        type = readlinesync.keyInSelect(this.productType, "", { cancel: false }) + 1;

                        if (type === 1) {
                            processor = readlinesync.question("Processador: ");
                            ram = readlinesync.question("Memória RAM: ");
                            brand = readlinesync.question("Marca: ");

                            const desktop = new Desktop(
                                this.products.generateId(),
                                name,
                                price,
                                processor,
                                ram,
                                brand
                            );
                            this.products.createProduct(desktop);
                            console.log("Produto Desktop criado com sucesso!");
                        }

                        if (type === 2) {
                            screenSize = readlinesync.questionInt("Tamanho da tela (polegadas): ");
                            const monitor = new Monitor(
                                this.products.generateId(),
                                name,
                                price,
                                screenSize
                            );
                            this.products.createProduct(monitor);
                            console.log("Produto Monitor criado com sucesso!");
                        }
                    } catch (error) {
                        console.log("Erro ao adicionar produto:", error);
                    }
                    break;

                case 2:
                    try {
                        console.log("\n==== Lista de Produtos ====");
                        this.products.listAllProducts();
                    } catch (error) {
                        console.log("Erro ao listar produtos:", error);
                    }
                    break;

                case 3:
                    try {
                        console.log("\n==== Buscar Produto por ID ====");
                        id = readlinesync.questionInt("Digite o ID do produto: ");
                        product = this.products.findByProduct(id);

                        if (product !== null) {
                            console.log("\nProduto encontrado:");
                            product.showProductDetails();
                        } else {
                            console.log(`\nProduto com ID ${id} não foi encontrado!`);
                        }
                    } catch (error) {
                        console.log("Erro ao buscar produto:", error);
                    }
                    break;

                case 4:
                    try {
                        console.log("\n\n==== Atualizar Produto ====\n");

                        console.log("Digite o ID do produto:");
                        id = readlinesync.questionInt("");

                        product = this.products.findByProduct(id);

                        if (product !== null) {
                            console.log("\nDigite os novos dados do produto:");

                            console.log("Nome:");
                            name = readlinesync.question("");

                            console.log("Preço (R$):");
                            price = readlinesync.questionFloat("");

                            type = this.productType.indexOf(product.type) + 1;

                            switch (type) {
                                case 1:
                                    console.log("Processador:");
                                    processor = readlinesync.question("");

                                    console.log("Memória RAM:");
                                    ram = readlinesync.question("");

                                    console.log("Marca:");
                                    brand = readlinesync.question("");

                                    const updatedDesktop = new Desktop(
                                        id, name, price, processor, ram, brand
                                    );

                                    this.products.updateProduct(updatedDesktop);
                                    break;

                                case 2:
                                    console.log("Tamanho da tela (polegadas):");
                                    screenSize = readlinesync.questionInt("");

                                    const updatedMonitor = new Monitor(
                                        id, name, price, screenSize
                                    );

                                    this.products.updateProduct(updatedMonitor);
                                    break;

                                default:
                                    console.log("Tipo de produto inválido. Atualização cancelada.");
                            }
                        } else {
                            console.log(`\nProduto com ID ${id} não foi encontrado!`);
                        }
                    } catch (error) {
                        console.log("Erro ao atualizar produto:", error);
                    }
                    break;


                case 5:
                    try {
                        console.log("\n==== Deletar Produto ====");
                        id = readlinesync.questionInt("Digite o ID do produto que deseja deletar: ");
                        product = this.products.findByProduct(id);

                        if (product !== null) {
                            this.products.deleteProduct(id);
                        } else {
                            console.log(`\nProduto com ID ${id} não foi encontrado!`);
                        }
                    } catch (error) {
                        console.log("Erro ao deletar produto:", error);
                    }
                    break;

                case 0:
                    console.log("\nEncerrando o programa...");
                    break;

                default:
                    console.log("\nOpção inválida!");
            }

            if (option !== 0) {
                console.log("\nPressione ENTER para continuar...");
                readlinesync.question();
            }

        } while (option !== 0);
    }
}


