function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return 42 - someValue
    } else {
        return someValue - 42
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(startValue, finishValue) {
    if (finishValue < startValue) {
        return (startValue - finishValue) * 264
    } else {
        return (finishValue - startValue) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    switch (true) {
        case (distance < 400):
            return 0;

        case (distance > 400 && distance < 2000):
            return (distance - 400) * 0.02

        case (distance > 2000 && distance < 2500):
            return 25

        case (distance > 2500):
            return 'cannot travel that far'
    }
}