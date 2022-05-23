let recebeValue = document.getElementById('currentNumber');
let currentNumber = 0;

function increment(){
    if(currentNumber >=0 && currentNumber <10){
        currentNumber += 1;
        recebeValue.innerHTML = currentNumber;
    }
}

function decrement(){
    if (currentNumber >0 && currentNumber <=10){
        currentNumber -= 1;
        recebeValue.innerHTML = currentNumber;
    }
}
