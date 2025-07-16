import { Product } from "../models/Product";


export interface ProductRepository {

    createProduct(product: Product): void;
    listAllProducts(): void;
    findByProduct(id: number): void;
    findByProduct(name: string): void;
    updateProduct(product: Product): void;
    deleteProduct(id: number): void;
}