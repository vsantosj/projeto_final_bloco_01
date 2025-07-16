import { Product } from "../models/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductController implements ProductRepository {

    private listProducts: Array<Product> = new Array<Product>;
    generatedNumber: number = 0;

    createProduct(product: Product): void {
        this.listProducts.push(product);
        console.log(`\n Produto Id: ${product.id} Adicionado com sucesso! `)
    }
    listAllProducts(): void {
        for (let product of this.listProducts) {
            product.showProductDetails();
        }
    }



    findByProduct(id: number): void;
    findByProduct(name: string): void;
    findByProduct(name: unknown): void {
        throw new Error("Method not implemented.");
    }
    updateProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
    deleteProduct(id: number): void {
        throw new Error("Method not implemented.");
    }

    generateId(): number {
        return ++this.generatedNumber;
    }

}