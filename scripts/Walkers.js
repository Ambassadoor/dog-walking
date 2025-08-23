import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (e) => {
        const walker = e.target        
        if (walker.dataset.type === "walker") {
        window.alert(`This walker works in ${walker.dataset.city}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"


    for (const walker of walkers) {
        const city = cities.find(city => city.id === walker.city)
        walkerHTML += `
            <li 
                data-id="${walker.id}" 
                data-city="${walker.city}"
                data-type="walker">
                    ${walker.name}
            </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

