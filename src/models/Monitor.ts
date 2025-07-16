import { Product } from "./Product";


export class Monitor extends Product {
    private _screenSize: number;
    public type: string = "Desktop";

    constructor(id: number, name: string, price: number, screenSize: number) {
        super(id, name, price,);
        this._screenSize = screenSize;
    }

    public get screenSize_1(): number {
        return this._screenSize;
    }
    public set screenSize_1(value: number) {
        this._screenSize = value;
    }


    showProductDetails(): void {
        console.log("===============================");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.name}`);
        console.log(`Preço: R$ ${this.price.toFixed(2)}`);
        console.log(`Tamanho da Tela: ${this._screenSize}`); // Ou `${this._screenSize} polegadas` se for number
        console.log("===============================");
    }

}