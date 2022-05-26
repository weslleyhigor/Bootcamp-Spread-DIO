// Função Autoinvocável 
(
    function(){
        let name = "Digital Innovation One"
        return console.log(name);
    }
)();

// Função Callback (Quando uma função chama outra função)
const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}
const soma = function(num1, num2){
    return num1 + num2;
}
const resultsoma = calc(soma, 1, 6);
console.log(resultsoma);