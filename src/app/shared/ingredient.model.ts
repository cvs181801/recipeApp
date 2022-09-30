export class Ingredient {
    constructor(public name: string, public amount: number){
    }
}

//this is a TS syntax shortcut.

//you can also write this using the long version:
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number){
//         this.name = name;
//         this.amount = amount;
//     }
// }