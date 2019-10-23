const departure = [0.4, 1];
const destination = [0.9, 3];

const perfectCity = (departure, destination) => {
    const [departureX, departureY] = departure;
    const [destinationX, destinationY] = destination;

    let distanceX = Math.abs(departureX - destinationX);
    let distanceY = Math.abs(departureY - destinationY);

    let result = 0;

    if (distanceX < 1) {
        distanceX = 0;

        const distanceLeft = (departureX - Math.floor(departureX)) + (destinationX - Math.floor(departureX));
        const distanceRight = (Math.ceil(departureX) - departureX) + (Math.ceil(destinationX) - destinationX);

        result += Math.min(distanceLeft, distanceRight);

    } else if (distanceY < 1) {
        distanceY = 0;

        const distanceButton = (departureY - Math.floor(departureY)) + (destinationY - Math.floor(destinationY));
        const distanceTop = (Math.ceil(departureY) - departureY) + (Math.ceil(destinationY) - destinationY);

        result += Math.min(distanceButton, distanceTop);

    } else {
        return (distanceX + distanceY);
    }

    return (distanceX + distanceY + result)
};

console.log(perfectCity(departure, destination));