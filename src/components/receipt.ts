import Ingredient from './ingredient';
export default class Receipt {
    public name: string;
    public ingredients: Ingredient[];
    constructor(name: string, ingredients: Ingredient[]) { this.name = name; this.ingredients = ingredients; }
}
