
function factorialCalculator(n) {

    let start = new Date().getTime() //ou new Date ().getUTCMiliseconds()
    let factorial = n
    for (let i = 1; i < n; i++) {
        factorial *= i

    } 
    let end = new Date().getTime()
    let time = (end - start)
    
    
    return `${n}! = ${factorial} (${time} milisegundos)`
}

console.log(factorialCalculator(53))
