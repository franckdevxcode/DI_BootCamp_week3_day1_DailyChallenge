// 1 Create an array which value is the planets of the solar system.
const planets =["venus","Mercury","Mars","Earth","Jupiter", "Saturn", "uranus","Nepturne"]

            const planetA =[{name : "venus", moons: 0},
            {name :"Mercury", moons: 0},
            {name :"Mars", moons: 1},
            {name :"Earth", moons: 0},
            {name:"Jupiter", moons: 2},
            {name : "Saturn", moons : 3},
            {name:"uranus", moons: 4},
            {name:"Nepturne", moons: 0}
         ]          
// 2. For each planet in the array, create a using . This div should have a class named .For each planet in the array, create a using . This div should have a class named .

for (const c of planets){
console.log("planet:",c)
}

// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

for (const planet of planets){
    console.log("planet:",planet)
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLowerCase())
    console.log("div:",div)
    }

// 4. Finally append each div to the in the HTML (presented below)
for (const planet of planets){
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLowerCase())
     const section = document.querySelector(".listPlanets")
     section.appendChild(div)
 
    }

// Bonus: Do the same process to create the moons.

    for (const planetB of planetA){
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planetB.name.toLowerCase())
         for (let i=0; i<planetB.moons;i++){
            const MoonDiv = document.createElement("div")
             MoonDiv.classList.add("moon")
             div.appendChild(MoonDiv)
         }
     const section = document.querySelector(".listPlanets")
     section.appendChild(div)
 
    }

    