import { Product } from "./Product";


export class Desktop extends Product {

    private _processor: string;

    private _ram: string;

    private _brand: string;

    public type: string = "Desktop";

    constructor(id: number, name: string, price: number, processor: string, ram: string, brand: string,) {
        super(id, name, price,);
        this._processor = processor;
        this._ram = ram;
        this._brand = brand;
    }

    public get processor(): string {
        return this._processor;
    }
    public set processor(value: string) {
        this._processor = value;
    }

    public get ram(): string {
        return this._ram;
    }
    public set ram(value: string) {
        this._ram = value;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }


    showProductDetails(): void {
        console.log("===============================");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.name}`);
        console.log(`Preço: R$ ${this.price.toFixed(2)}`);
        console.log(`Processador: ${this.processor}`);
        console.log(`Memória RAM: ${this.ram}`);
        console.log(`Marca: ${this.brand}`);
        console.log("===============================");
    }
}
