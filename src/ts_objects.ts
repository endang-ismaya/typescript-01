let car: { brand: string; year: number } = {
    brand: "toyota",
    year: 2020,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "lenovo yoga" };

let items: {
    readonly title: string;
    cost?: number;
}[] = [book, pen, notebook];

console.log(items);
