enum Unit {
    KG,
    ML,
    L,
    G,
}

export default class Ingredient {
    public name: string;
    public quantity: number;
    public unit: Unit;

    constructor(name: string, quantity: number, unit: Unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}
