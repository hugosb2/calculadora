function soma(a, b) {

    var num1 = Number(document.getElementById(a).value);
    var num2 = Number(document.getElementById(b).value);

    if ((num1 === 0)&(num2===0)){
        document.getElementById("resultadored").innerText = "Digite um valor em cada campo";
    }
    else{
        var resultado = num1 + num2;

    document.getElementById("resultado").innerText = "o resultado é: " + resultado;
    }
    
}

function sub(a, b) {

    var num1 = Number(document.getElementById(a).value);
    var num2 = Number(document.getElementById(b).value);

    if ((num1 === 0)&(num2===0)){
        document.getElementById("resultadored").innerText = "Digite um valor em cada campo";
    }
    else{
        var resultado = num1 - num2;

    document.getElementById("resultado").innerText = "o resultado é: " + resultado;
    }
    
}

function mult(a, b) {

    var num1 = Number(document.getElementById(a).value);
    var num2 = Number(document.getElementById(b).value);

    if ((num1 === 0)&(num2===0)){
        document.getElementById("resultadored").innerText = "Digite um valor em cada campo";
    }
    else{
        var resultado = num1 * num2;

    document.getElementById("resultado").innerText = "o resultado é: " + resultado;
    }
    
}

function div(a, b) {

    var num1 = Number(document.getElementById(a).value);
    var num2 = Number(document.getElementById(b).value);

    if ((num1 === 0)&(num2===0)){
        document.getElementById("resultadored").innerText = "Digite um valor em cada campo";
    }
    else{

        if (num2 === 0){
            document.getElementById("resultadored").innerText = "Denominador não pode ser 0";
        }
        else{
            var resultado = num1 / num2;
             document.getElementById("resultado").innerText = "o resultado é: " + resultado;
    }
       
}
        

   
    
}