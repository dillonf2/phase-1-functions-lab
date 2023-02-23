function distanceFromHqInBlocks(startingBlock){
    if (startingBlock>=42){
        return startingBlock-42
    } else {
        return 42-startingBlock
    }
}
function distanceFromHqInFeet(startingBlock){
    return distanceFromHqInBlocks(startingBlock)*264
}
function distanceTravelledInFeet(startingBlock,endingBlock){
    const distance = (endingBlock-startingBlock)*264
    const distanceDos =(startingBlock-endingBlock)*264
    if (startingBlock<endingBlock){
        return distance
    } else {
        return distanceDos
    }
}
function calculatesFarePrice(startingBlock,endingBlock){
    if (distanceTravelledInFeet(startingBlock,endingBlock)<400){
        return 0
    } else if (distanceTravelledInFeet(startingBlock,endingBlock)<2000){
        const fare=(distanceTravelledInFeet(startingBlock,endingBlock)-400)*0.02
        return fare
    } else if (distanceTravelledInFeet(startingBlock,endingBlock)<2500){
        return 25
    } 
    else if (distanceTravelledInFeet(startingBlock,endingBlock)>2500) {
        return `cannot travel that far`
    }
    }

