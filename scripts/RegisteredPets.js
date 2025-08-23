import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (e) => {
        const pet = e.target

        if (pet.dataset.type === "pet") {

        const walker = walkers.find(obj => obj.id === Number(pet.dataset.walker))
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li
                        data-type="pet"
                        data-walker=${pet.walkerId}>
                            ${pet.name}
                    </li>`
    }

    petHTML += "</ul>"

    return petHTML
}

