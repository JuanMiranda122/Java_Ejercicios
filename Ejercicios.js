//let n = 8;
//let fibo = [0,1,]


//for (let i = 0; i < (n-2); i++) {
   // let suma = fibo[0+i] + fibo[1+i]  
   // fibo.push(suma)
//}

   // console.log(fibo)

const numeros = [10, 25, 7, 99, 50, 12 ,53, 60, 11, 8, 23, 22];
const numpares = [];
const numimpares = [];
let sumatodos = 0;
let sumapares = 0;
let sumaimpares = 0;


    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i] % 2 === 0 ){
            numpares.push(numeros[i])
            sumapares += numeros[i]
        }if(numeros[i] % 2 !== 0){
            numimpares.push(numeros[i])
            sumaimpares += numeros[i]
        }

        sumatodos +=  numeros[i] 
     
    }

 

    console.log('Hay ' + numpares.length + ' pares')
    console.log('Hay ' + numimpares.length + ' impares')
    console.log('la suma de todos los numeros es de: ' + sumatodos)
    console.log('la suma de los numeros pares es de: ' + sumapares)
    console.log('la suma de los numeros impares es de: ' + sumaimpares)

    if(sumapares > sumaimpares){
        console.log('La suma de los pares es mayor')

    }else{
        console.log('La suma de los impares es mayor')

    }