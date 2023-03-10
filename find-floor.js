function findFloor(array, num) {
    
    let leftBound = 0
    let rightBound = array.length-1
    let found = -1
    if(num > array[rightBound]){
        return array[rightBound]
    }

    while (leftBound < rightBound){
        const middle = Math.floor((leftBound+ rightBound)/2)

        if (array[middle+1] < num){
            leftBound = middle+1
        }
        if(array[middle] > num){
            rightBound = middle-1
        }
        if (array[middle] <num && array[middle+1] >num){
            found = array[middle]
            break
        }

    }

    return found
}

module.exports = findFloor