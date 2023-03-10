function findRotatedIndex(array, num) {
 
    let leftBound = 0
    let rightBound = array.length -1
    let splitPoint = array.length-1

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

    if (num < array[0]){
        leftBound = splitPoint -1
        rightBound = array.length-1
    }else{
        leftBound = 0
        rightBound = splitPoint +1
    }

    let res = -1

    while (leftBound < rightBound ){
        
        let middle = Math.floor((leftBound + rightBound)/2)
        if (array[middle] < num){
            leftBound = middle +1
        }else if (array[middle] > num) {
            rightBound = middle -1
        }else if (array[middle] == num) {
            res = middle
            break
        }
    }

    return res
}

module.exports = findRotatedIndex