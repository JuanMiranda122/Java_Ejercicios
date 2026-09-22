let n = 8;

let fibo = [0,1,]


for (let i = 0; i < (n-2); i++) {
     
    let suma = fibo[0+i] + fibo[1+i]
    
 fibo.push(suma)

}


    console.log(fibo)