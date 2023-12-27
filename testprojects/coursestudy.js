function createCar() {
    for (let i = 0; i < Cars; i++) {
        let ukll = 
            {
                type:"Lambo",
                color:colors[Math.floor(Math.random() * 4)],
                tag:"Florida",
                year:2023,
                registered:true
            };
        box.push(ukll);
    }    
}

let cars = [];
let racers = [];


cars = [
    {
        type:"Lambo",
        color:"Black",
        tag:"Florida",
        year:2023,
        registered:true
    },
    {
        type:"BMW",
        color:"Blue",
        tag:"Florida",
        year:2024,
        registered:true
    }
];

for (const car in cars) {
    let racer = cars[car];
    racers.push(racer);
    if (cars[car].year == 0) {
        console.log(cars[car]);
    }
    
};
const Cars = 4;
let box = [];
const colors = ["green", "red", "sandyBrown", "gray"];

createCar();
console.log(box);