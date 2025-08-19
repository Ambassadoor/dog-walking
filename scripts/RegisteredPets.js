import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (e) => {
        const pet = e.target

        const walker = walkers.find(obj => obj.id === Number(pet.dataset.walker))

        if (pet.dataset.type === "pet") {
            window.alert(`This pet is walked by ${walker.name}`)
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

