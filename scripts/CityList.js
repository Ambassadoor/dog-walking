import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (e) => {
        const city = e.target
        if (city.dataset.type ==="city") {
                const cityWalkers = city.dataset.walker
                window.alert(`This city is served by ${cityWalkers}`)

        }



    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"


    for (const city of cities) {
        const cityWalkers = walkers.filter(walker => walker.city === city.id)
        let walkerString = "";

        for (let i = 0; i < cityWalkers.length; i++) {
            if (cityWalkers.length !== 1 && i === (cityWalkers.length - 2)) {
                walkerString += `${cityWalkers[i].name}, and `
            } else if (cityWalkers.length === 1 || i === cityWalkers.length - 1) {
                walkerString += cityWalkers[i].name
            } else {
                walkerString += `${cityWalkers[i].name}, `
            }
        }

        citiesHTML += `
            <li
                data-type="city"
                data-walker="${walkerString}">
                    ${city.name}
            </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

