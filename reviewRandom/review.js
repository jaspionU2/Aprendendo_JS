const photoPerson = document.getElementById("photo")
const btnReview = document.getElementById("btn-random-review")
const textReview = document.getElementById("text-review")

const randomText = [
    "Lorem ipsum dolor sit amet. Et earum deleniti qui rerum autem nam repellat galisum ut neque sapiente ea unde minima aut esse voluptatibus.", 
    "Ut corporis officiis a laudantium tempore cum veritatis saepe ad quisquam tempore sed dolorum amet. Ut fuga maiores eum enim voluptatum aut doloribus quia est quasi delectus aut dolorem nesciunt ut cumque aliquid!",
    "Lorem ipsum dolor sit amet. Eos quisquam debitis non nobis excepturi et laboriosam sunt sit error quia et magnam ipsam a quisquam sequi rem rerum illo. "
]

window.addEventListener('DOMContentLoaded', async () => {
    const module = await import("./getRandomPeople.js"); 
    const getRandomPerson = module.getRandomPerson;

    const person = await getRandomPerson();

    photoPerson.setAttribute("src", person.picture.large);
    textReview.textContent = randomText[Math.floor(Math.random() * randomText.length)]
})

btnReview.addEventListener("click", async () => {
    const module = await import("./getRandomPeople.js"); 
    const getRandomPerson = module.getRandomPerson;

    const person = await getRandomPerson();

    photoPerson.setAttribute("src", person.picture.large);
    textReview.textContent = randomText[Math.floor(Math.random() * randomText.length)]
});