// let button = document.querySelector(".guess-submit")
// let lastGuesses =document.querySelector(".guesses")
// let lastResult = document.querySelector(".lastResult")
// let lowOrHigh = document.querySelector(".lowOrHigh")
// let guessField = document.querySelector(".guessField")
//
//
// let guesses = 1
// let resetButton
// let randomNumber = Math.floor(Math.random()*100)+1
//
// let checkGuess = ()=>{
//     if(guessField.value>0){
//     let userGuess = Number(guessField.value)
//     if(guesses===1){
//         lastGuesses.textContent="Previous guesses:"
//     }
//     lastGuesses.textContent += userGuess+" "
//     if (userGuess === randomNumber){
//         lastResult.textContent="Поздравляю вы угадали число"
//         lastResult.style.backgroundColor="green"
//         setGameOver()
//     } else if (guesses === 10){
//         lastResult.textContent="Игра окончена! Повышено количество попыток"
//         button.disabled=true
//         setGameOver()
//     }
//
//     else{
//         lastResult.textContent="Неправильно!"
//         lastResult.style.backgroundColor="red"
//
//
//          if (userGuess>100) {
//             lowOrHigh.textContent="Введите число меньше 100"
//         }
//         else if (userGuess<0) {
//             lowOrHigh.textContent="Введите положительное число  "
//         }
//         else if (userGuess<randomNumber){
//             lowOrHigh.textContent="Число меньше загаданного"
//         }
//         else if (userGuess>randomNumber) {
//             lowOrHigh.textContent="Число больше загаданного"
//         }
//     }
//
//
//     guesses++
//     }
// }
// let setGameOver = ()=>{
//     guessField.disabled=true
//     button.disabled=true
//      resetButton = document.createElement('button')
//         resetButton.textContent="Начать новую игру"
//     document.body.appendChild(resetButton)
//     resetButton.addEventListener("click",resetGame)
// }
//
//
// let resetGame = () =>{
//     guesses =1
//     lastResult =""
//     lastGuesses = ""
//     lowOrHigh = ""
//     guessField.disabled = false
//     button.disabled=false
//     lastResult.style.backgroundColor = "white"
//     resetButton.parentNode.removeChild(resetButton)
//
// }
// button.addEventListener("click",()=>{
//     checkGuess()
//     guessField.value=""
// })
//
//
//
//
// //
// // let button = document.querySelector('.guess-submit')
// // let lastGuesses = document.querySelector('.previous-result')
// // let lastResult = document.querySelector('.last-result')
// // let lowOrHigh = document.querySelector('.lowOrHigh')
// // let guessField = document.querySelector('.guessField')
// //
// // let guesses = 1 // создаем переменную, которая отвечает за кол-во попыток
// // let randomNumber = Math.floor(Math.random() * 100) + 1 // генеррируем число от 1 до 100
// // let resetButton
// // console.log(randomNumber)
// // let checkGuess = () => {
// //     if(guessField.value.length > 0){
// //         let userGuess = Number(guessField.value)
// //         if (guesses === 1){
// //             lastGuesses.textContent = 'Previous guesses:'
// //         }
// //         lastGuesses.textContent += userGuess  + ' '
// //         if (userGuess === randomNumber){ // если угадали число
// //             lastResult.textContent = 'Поздравляем, вы угадали число!'
// //             lastResult.style.backgroundColor = 'green'
// //             lowOrHigh.textContent = ''
// //             setGameOver()
// //         } else if (guesses === 10){ // если кол-во попыток больше 10
// //             lastResult.textContent = 'Игра окончена! Превышено количество попыток'
// //             button.disabled = true
// //             setGameOver()
// //         }else { // если не угадали число
// //             lastResult.textContent = 'Неправильно'
// //             lastResult.style.backgroundColor = 'red'
// //             if (userGuess - randomNumber <= 5 && userGuess - randomNumber  > -5){ // если мы близки к загадонному числу
// //                 lowOrHigh.textContent = 'Вы близко'
// //             } else if (userGuess > 100){ // если число которое мы ввели, больше 100
// //                 lowOrHigh.textContent = 'Вы ввели число больше 100'
// //             }else if (userGuess < 0){// если число которое мы ввели, меньше 0
// //                 lowOrHigh.textContent = 'Вы ввели число меньше 0'
// //             }else {
// //                 lowOrHigh.textContent = 'Невтемщик'
// //             }
// //         }
// //         guesses++
// //     }
// // }
// //
// // let  setGameOver = () => {
// //     guessField.disabled = true // выключаем инпут
// //     button.disabled = true // выключаем кнопку
// //     resetButton = document.createElement('button') // создаем переменную, в которой создаем новую кнопку
// //     resetButton.textContent = 'Начать игру заново' // в значение этой кнопки записываем Начать игру заново
// //     document.body.appendChild(resetButton)  // помещаем данную кнопку  в body через appendChild
// //     resetButton.addEventListener('click', resetGame)   // навешиваем на кнопку события клика, при котором выполнится функция
// //
// //
// //
// // }
// //
// // let resetGame = () => {
// //     guesses = 1
// //     lastResult.textContent = ''
// //     lastGuesses.textContent = ''
// //     lowOrHigh.textContent = ''
// //     guessField.disabled = false
// //     button.disabled = false
// //     lastResult.style.backgroundColor = 'white'
// //     resetButton.parentNode.removeChild(resetButton)
// //
// // }
// //
// // button.addEventListener('click', () => {
// //     checkGuess()
// //     guessField.value = ''
// // })


// const task = (str)=>{
//     let open = 0
//     let close = 0
//     for(let i = 0; i < str.length;i++){
//        if(str[i]==="("){
//           open = open+1
//        } else {
//             close = close+1
//         }
//     }
//     return [open,close]
// }
//
// console.log(task("(())(("))


// let array = [1,2,4,5,6,7,8,5,7]
//
// let result = array.filter((el,idx)=>idx === array.indexOf(el))
// console.log(result)

// let array = ["a","b","c","a","b","a","g","c","b"]
//
// let result = array.reduce((acc,el)=>{
//     if (acc[el]===undefined){
//         return {...acc, [el]:1}
//     }
//     return {...acc, [el]:acc[el]+1}
// },{})
//
// console.log(result)
// {a: 2, b: 2, c: 1, g:1}
// acc = {}
// acc = {a:1}
// acc = {a:1,b:1}
// acc = {a:1,b:1,c:1}
// acc = {a:2,b:1,c:1}
// acc = {a:2,b:2,c:1}
//acc={a:2,b:2,c:1}


// let a = [0,1]
//
// a[2]=a[0]+a[1]
// a[3]=a[3-1]+a[3-2]
// a[4]=a[4-1]+a[4-2]
// a[5]=a[5-1]+a[5-2]
//
//  for(let i = 2; i<20;i++){
//    a[i]= a[i-1]+a[i-2]
// }
// console.log(a)

// напишите функцю кот принимает число и выводит нное число фибоначи

const task = (num)=>{
    let a = [0,1]
 for(let i = 2; i<num;i++){
   a[i]= a[i-1]+a[i-2]
}
   return a.reduce((acc,el,index)=>{
       if(a.indexOf(el)===num-1){
           return el
       }
       return acc
   },0)
}
console.log(task(30))