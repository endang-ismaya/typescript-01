function calculateDiscount(price: number): number {
    return price * 0.9;
}

const priceList = 9000;
const finalPrice = calculateDiscount(priceList);
console.log(finalPrice);

// optional parameters
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(priceList);
console.log(priceAfterDiscount);

// default parameter
function calculateScore(
    initialScore: number,
    penalyPoints: number = 0
): number {
    return initialScore - penalyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(200);
console.log(scoreAfterPenalty);
console.log(scoreWithoutPenalty);

// void function
function logMessage(message: string): void {
    console.log(message);
}

logMessage("this is void!.");
