const containerCenter = document.querySelector(".container-center")
console.log(containerCenter)

containerCenter.addEventListener("mouseover", () => {
    console.log(containerCenter.style)
    containerCenter.style.alignItems = "flex-end"
    containerCenter.style.justifyContent = "end"
})