const btnDecrease = document.getElementById("btn-decrease")
const btnIncrease = document.getElementById("btn-increase")
const btnReset = document.getElementById("btn-reset")
const number = document.querySelector(".value")

const btnList = [btnIncrease, btnDecrease, btnReset]

btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
       switch (btn.id) {
           case "btn-decrease":
               if (Number(number.textContent) == 0) {
                   break;
               }
               number.textContent = Number(number.textContent) - 1
               console.log("diminiu")
            break;
           case "btn-increase":
               number.textContent = Number(number.textContent) + 1
               console.log("aumentou")
               break;
           case "btn-reset":
               number.textContent = 0
               break;
        default:
            break;
       }
    })
})
