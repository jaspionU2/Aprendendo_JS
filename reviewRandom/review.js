const photoPerson = document.getElementById("photo")
const btnReview = document.getElementById("btn-random-review")

btnReview.addEventListener("click", async () => {
    console.log("clicado");

    const module = await import("./getRandomPeople.js"); 
    const getRandomPerson = module.getRandomPerson;

    const person = await getRandomPerson();

    console.log(person);

    photoPerson.setAttribute("src", person.picture.large);
});