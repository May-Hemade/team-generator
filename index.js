let textInputNode = document.getElementById("name-input")
let nameFieldNode = document.querySelector(".name-grid")
let nameUlNode = document.querySelector(".names-list")
let divTemasNode = document.querySelector(".teams-generated")
let numberValueNode = document.getElementById("number-value")

let names = []
let numberOfTeams = 1
const decrementTeams = () => {
  if (numberOfTeams > 1) {
    numberOfTeams--
    numberValueNode.innerText = numberOfTeams
  }
}

const incrementTeams = () => {
  numberOfTeams++
  numberValueNode.innerText = numberOfTeams
}

const addName = () => {
  let nameValue = textInputNode.value
  if (nameValue.length === 0) {
    return
  }
  names.push(nameValue)
  liNode = document.createElement("li")
  nameUlNode.appendChild(liNode)
  liNode.innerText = nameValue
  textInputNode.value = ""
}

const resetTeams = () => {
  names = []
  nameFieldNode.innerHTML = ""
}

let generateTeams = () => {
  let teamNodes = []
  divTemasNode.innerHTML = ""
  for (let i = 0; i < numberOfTeams; i++) {
    let h4Node = document.createElement("h4")
    let teamContainerNode = document.createElement("div")
    teamContainerNode.classList.add("card")
    h4Node.innerHTML = `Team ${i + 1}`
    teamContainerNode.appendChild(h4Node)
    divTemasNode.appendChild(teamContainerNode)
    let ulNode = document.createElement("ul")
    teamContainerNode.classList.add("team")
    teamNodes.push(ulNode)
    teamContainerNode.appendChild(ulNode)
  }
  // store the number of names because when we remove a name the length will change
  let nameLength = names.length
  for (let i = 0; i < nameLength; i++) {
    // choose a random index
    let randomIndex = Math.floor(Math.random() * names.length)
    let liNode = document.createElement("li")
    liNode.innerText = names[randomIndex]
    // choose teams one after the other
    // example with 3 teams
    // i          = 0 1 2 3 4 5 6 7 8 9
    // teamIndex  = 0 1 2 0 1 2 0 1 2 0
    let teamIndex = i % numberOfTeams
    teamNodes[teamIndex].appendChild(liNode)
    // remove the selected name from the array
    names.splice(randomIndex, 1)
  }
}

window.onload = () => {
  textInputNode.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addName()
    }
  })
}
