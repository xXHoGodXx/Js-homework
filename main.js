let numContainer = document.getElementById("num")
let count = 0
let btnInc = document.querySelector(".inc")
let btnDec = document.querySelector(".dec")
let btnReset = document.querySelector(".reset")
let btnRandom = document.querySelector(".random")

btnInc.onclick = () => {
    count++
    numContainer.textContent = count
}
btnDec.onclick = () => {
    count--
    numContainer.textContent = count
}
btnReset.onclick = () => {
    count = 0
    numContainer.textContent = count
}
btnRandom.onclick = () => {
    count = Math.floor(Math.random() * 100)
    numContainer.textContent = count
}

