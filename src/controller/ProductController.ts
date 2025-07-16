import { Product } from "../models/Product";
import { ProductRepository } from "../repository/ProductRepository";
import { colors } from "../util/Colors";

export class ProductController implements ProductRepository {

    private listProducts: Array<Product> = new Array<Product>;
    private productIdSequence: number = 0;

    createProduct(product: Product): void {
        this.listProducts.push(product);
        console.log(`\n Produto Id: ${product.id} Adicionado com sucesso! `)
    }

    listAllProducts(): void {
        for (let product of this.listProducts) {
            product.showProductDetails();
        }
    }



    public findByProduct(id: number): Product | null;
    public findByProduct(name: string): Product | null;

    public findByProduct(param: number | string): Product | null {
        if (typeof param === "number") {
            return this.findByArray(param);
        } else {
            for (let product of this.listProducts) {
                if (product.name.toLowerCase() === param.toLowerCase()) {
                    return product;
                }
            }
        }
        return null;
    }

    updateProduct(product: Product): void {
        let findproduct = this.findByArray(product.id);
        if (findproduct != null) {
            this.listProducts[this.listProducts.indexOf(findproduct)] = product;
            console.log(colors.fg.green, `\nA Conta número: ${product.id} foi atualizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, ` \nA Conta número: ${product.id} não foi encontrda! `, colors.reset);
        }
    }
    deleteProduct(id: number): void {
        const findproduct = this.findByArray(id);
        if (findproduct != null) {
            this.listProducts.splice(this.listProducts.indexOf(findproduct), 1);
            console.log(colors.fg.green, `\nO produto de Id: ${id} foi apagado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO produto de Id: ${id} não foi encontrado! `, colors.reset);
        }
    }

    generateId(): number {
        return ++this.productIdSequence;
    }

    public findByArray(id: number): Product | null {
        for (let product of this.listProducts) {
            if (product.id === id) {
                return product;
            }
        }
        return null;
    }


}