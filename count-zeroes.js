function countZeroes(array) {
    let leftBound = 0
    let rightBound = array.length-1
    let numZeros = 0

    if (!array[leftBound]){
        return array.length
    }

    if (array[rightBound]){
        return numZeros
    }
    //[1,1,1,1,0,0,0,0,0]
    while(array[leftBound] && !array[rightBound]){
        let middle = Math.floor((leftBound+rightBound)/2)

        if(array[middle]){
            leftBound = middle+1
            numZeros = array.length - middle-1
        }else{
            rightBound = middle-1
            numZeros = array.length - middle
        }
        
    }

    return numZeros

}

module.exports = countZeroes