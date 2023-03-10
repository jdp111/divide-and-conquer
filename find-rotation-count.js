function findRotationCount(array) {
   
    let leftBound = 0
    let rightBound = array.length -1
    let splitPoint = 0

    while (array[leftBound] > array[rightBound]){
        const middle = Math.floor((leftBound+ rightBound)/2)

        if (array[middle] < array[rightBound]){
            rightBound = middle - 1
            splitPoint = middle
        }else{
            leftBound = middle + 1
            splitPoint = middle+1
        }
    }

    return splitPoint
}

module.exports = findRotationCount