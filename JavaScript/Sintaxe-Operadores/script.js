function recebeDoisNumeros (a, b){
    let saoIguais = '';
    a === b? saoIguais = `Os números ${a} e ${b} são iguais` : saoIguais = `Os números ${a} e ${b} não são iguais`
    let somaNumeros = a + b;
    
    if (somaNumeros > 10 && somaNumeros > 20){
        return console.log(saoIguais += `. Sua soma é ${somaNumeros}, que é maior que 10 e maior que 20.`)
    }else if (somaNumeros > 10 && somaNumeros < 20) {
        return console.log(saoIguais += `. Sua soma é ${somaNumeros}, que é maior que 10 e menor que 20.`)
    }else if (somaNumeros < 10 && somaNumeros < 20) {
        return console.log(saoIguais += `. Sua soma é ${somaNumeros}, que é menor que 10 e menor que 20.`) 
    }else if (somaNumeros == 10 && somaNumeros < 20){
        return console.log(saoIguais += `. Sua soma é ${somaNumeros}, que é igual a 10 e menor que 20.`)
    }
    else if (somaNumeros > 10 && somaNumeros == 20){
        return console.log(saoIguais += `. Sua soma é ${somaNumeros}, que é maior que 10 e igual a 20.`)
    }
}

recebeDoisNumeros(20, 20);