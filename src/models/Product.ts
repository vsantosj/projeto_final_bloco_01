

export abstract class Product {

    private _id: number;
    private _name: string;
    private _price: number;

    constructor(id: number, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    abstract type: string;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    abstract showProductDetails(): void;

}