
const name= document.querySelector('.product-name').innerText
const priceArray= document.querySelector('.pdp-main .price-sales')

const price= parseInt(priceArray.innerText.split("$")[1])
let discount= price - (price * .15)
const sizeSwatch = document.querySelectorAll('.pdp-main .swatches.size a')

sizeSwatch.forEach((size) => {
size.addEventListener('click', () => {
  const hideBackground= document.backgroundColor= "grey";
  const div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100%";
div.style.background = "#ffffff";
div.style.color = "#000000";
div.style.zIndex = "1";
div.innerHTML = `<h1>Get this ${name} for ${discount} with a 15% discount</h1>`

  const button = document.createElement("button")
button.innerHTML = "Cart"

const exitButton = document.createElement("exitButton")
exitButton.innerHTML = "X"

document.getElementById("main").appendChild(div);
document.getElementById("main").appendChild(button);
document.getElementById("main").appendChild(exitButton);
});
});
