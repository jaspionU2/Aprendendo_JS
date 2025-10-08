const containerCenter = document.querySelector(".container-center")
const cube = document.querySelector("#cube")

const boxStyleCss = window.getComputedStyle(containerCenter)

const positionsToCube = {
    "top": "flex-start",
    "bottom": "flex-end",
    "left": "start",
    "right": "end"
}



cube.addEventListener("mouseenter", () => {
    const { top, bottom, left, right } = positionsToCube;
    const yPosition = containerCenter.style.alignItems || boxStyleCss.alignItems;
    const xPosition = containerCenter.style.justifyContent || boxStyleCss.justifyContent;

    if (yPosition == top) {
        if (xPosition == left) {
            containerCenter.style.alignItems = bottom
        } else {
            containerCenter.style.justifyContent = left
        }
    } else {
        if (xPosition == left) {
            containerCenter.style.justifyContent = right
        } else {
            containerCenter.style.alignItems = top
        }
    }
})