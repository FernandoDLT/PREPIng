// PREP

// 1 to num, 3 fizz, 5 buzz, 3&5 fizzbuzz
// P: num, shole, +
// R: console
// E:


// loop
// conditinal % 3%5, % 3, %5
// console.log num or fizz,buzz,fizzbuzz

function fizzBuzz(num) {
    for(let i = 1; i <= num;i++) {
        if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        }else if(i % 3 === 0) {
            console.log("Fizz")
        }else if(i % 5 === 0) {
            console.log('Buzz')
        }else(
            console.log(i)
        )
    }
}
fizzBuzz(30)
fizzBuzz(5)
fizzBuzz(15)// 1,2,fizz,4,buzz,7,8,fizz,buzz,11,fizz,12,14,
