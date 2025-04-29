let statistics={
    redCars:21,
    blueCars:45,
    greenCars:12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};

for (let property in statistics) {
    let value = statistics[property];

    // Check if the property name starts with 'r' or if the value is odd
    if (property.startsWith('r') || value % 2 !== 0) {
        console.log(value);
    }
}