function sortedFrequency(array, num) {

    let leftBound = 0
    let rightBound = array.length -1

    let midLeft = 0
    let midRight = array.length-1

    if (array[leftBound] == num  && array[rightBound] == num){
        return array.length
    }

    while(array[leftBound] < num ){
        let middle = Math.floor((leftBound+midRight)/2)
        if(array[middle] < num){
            leftBound = middle+1
            
        }else{
            midRight = middle-1
        }
        
        
    }
    
    while(array[rightBound] > num){
        let middle = Math.floor((midLeft+rightBound)/2)
        if(array[middle] > num){
            rightBound= middle-1
            
        }else{
            midLeft = middle+1
        }
    }

    if (rightBound == leftBound-1){
        return -1
    }

    return rightBound - leftBound+1

}

module.exports = sortedFrequency