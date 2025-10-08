const containerCenter = document.querySelector(".container-center")
const cube = document.querySelector("#cube")

const boxStyleCss = window.getComputedStyle(containerCenter)


cube.addEventListener("mouseenter", () => {
    const containerWidth = containerCenter.clientWidth;
    const containerHeight = containerCenter.clientHeight;

    const cubeWidth = cube.offsetWidth;
    const cubeHeight = cube.offsetHeight;

    const positionTop = cube.style.top || boxStyleCss.top
    const positionLeft = cube.style.left || boxStyleCss.left

    console.log(`top: ${positionTop}`)
    console.log(`left: ${positionLeft}`)

    if (positionTop == "0px") {
        if (positionLeft == "0px") {
            cube.style.top = `${containerHeight - cubeHeight}px`
        } else {
            cube.style.left = "0px"
        }
    } else {
        if (positionLeft == "0px") {
            cube.style.left = `${containerWidth - cubeWidth}px`
        } else {
            cube.style.top = "0px"
        }
    }
})