import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (e) => {
        const city = e.target

        if (city.dataset.type === "city") {
            window.alert(`${city.dataset.walker} is servicing this city`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const currentWalker of walkers) {
        citiesHTML += `
            <li
                data-type="city"
                data-walker=${currentWalker.name}>
                    ${currentWalker.city}
            </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

