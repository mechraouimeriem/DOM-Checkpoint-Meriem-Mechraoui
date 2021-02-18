let cards = Array.from(document.querySelectorAll(".card"))
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
let totalPrice = document.querySelector(".total-price")

// Add button
for (let i in plusBtns) {
    plusBtns[i].addEventListener("click", function () {
        plusBtns[i].nextElementSibling.innerHTML++;
        total()
    })
}

// Minus button
for (let i in plusBtns) {
    minusBtns[i].addEventListener("click", function () {
        minusBtns[i].previousElementSibling.innerHTML > 0 ? minusBtns[i].previousElementSibling.innerHTML-- : null;
        total()
    })
}

// Total price
function total() {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0;
    for (let i in unitPrices) {
        s = s + Number(unitPrices[i].innerHTML) * Number(quantities[i].innerHTML)
    }
    
    // console.log(s)
    totalPrice.innerHTML = s
    // console.log(totalPrice.innerHTML)
    return (totalPrice.innerHTML)
}