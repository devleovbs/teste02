// Aula 04 - 08.06.2021
// ex02Calculadora

let somar = function(n1,n2){
    return n1+n2;
}

let subtrair = function(n1,n2){
    return n1-n2;
}

let multiplicar = function(n1,n2){
    return n1*n2
}

let dividir = function(n1,n2){
    return n1/n2
}

let xburguer = function(n1,n2){
    // olhar para a variável caso o usuário coloque 0
    if(n2==0){
        //executar se for true
        return "Impossível dividir por 0";
    }else{
        return n1/n2;
    }
}

console.log("n1 = 10 e n2 = 5")
console.log("Somar")
console.log(somar(10,5))
console.log("Subtrair")
console.log(subtrair(10,5))
console.log("Multiplicar")
console.log(multiplicar(10,5))
console.log("Dividir")
console.log(dividir(10,5))
console.log("xburguer")
console.log(xburguer(10,0))
