const urlRandomUser = "https://randomuser.me/api/?inc=name,picture,email&noinfo"

export function getRandomPerson() {
    return fetch(urlRandomUser)
        .then(response => response.json())
        .then(resultado => resultado.results[0])
}

// export default getRandomPerson()



