const swapDigits = (number)=>{
    if(number < 0){number = 0}
    let swappedNumber = 0
    let swappedstring = ''

    let numberstringArr = [...String(number)]

    if(numberstringArr.length % 2 === 0){
        while(numberstringArr.length){

            swappedstring += numberstringArr[1] + numberstringArr[0]

            numberstringArr.shift()
            numberstringArr.shift()
         }
    }
    else{
        swappedstring = numberstringArr[0]
        numberstringArr.shift()
        while(numberstringArr.length){
           swappedstring += numberstringArr[1] + numberstringArr[0]
           numberstringArr.shift()
           numberstringArr.shift()
        //    numberstringArr.pop();
        }

    }
    swappedNumber = Number(swappedstring)
    //write logic here
    return swappedNumber;
    
}

module.exports = swapDigits
