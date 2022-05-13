let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function filterCosts(array) {
    return courses.filter((item) =>
        (item.prices[0] == null && item.prices[1] == null) ? true :
            item.prices[0] >= array[0] &&
            item.prices[0] <= array[1] &&
            item.prices[1] <= array[1]
    );
}

console.log(filterCosts(requiredRange1));
console.log(filterCosts(requiredRange2));
console.log(filterCosts(requiredRange3));