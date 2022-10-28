let textInputNode = document.getElementById("name-input")
let numberInputNode = document.getElementById("number-input")
let nameFieldNode = document.querySelector(".name-grid")
let nameUlNode = document.querySelector(".names-list")
let listUlNode = document.querySelectorAll(".name-list")
let divTemasNode = document.querySelector(".teams-generated")
let numberValueNode = document.getElementById("number-value")

let names = []
let numberOfTeams = 0
const decrementTeams = () => {
  if (numberOfTeams > 0) {
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
  names.push(nameValue)

  console.log(names)
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
  let ulNodes = []
  //   let randomNames = []

  divTemasNode.innerHTML = ""
  for (let i = 0; i < numberOfTeams; i++) {
    let h4Node = document.createElement("h4")
    let teamContainerNode = document.createElement("div")
    h4Node.innerHTML = `Team ${i + 1}`
    teamContainerNode.appendChild(h4Node)
    divTemasNode.appendChild(teamContainerNode)
    let ulNode = document.createElement("ul")
    ulNode.classList.add("team")
    ulNodes.push(ulNode)
    teamContainerNode.appendChild(ulNode)
  }
  let nameLength = names.length
  for (let i = 0; i < nameLength; i++) {
    let randomIndex = Math.floor(Math.random() * names.length)

    // randomNames.push(names[randomIndex])

    let liNode = document.createElement("li")
    liNode.innerText = names[randomIndex]
    ulNodes[i % numberOfTeams].appendChild(liNode)
    names.splice(randomIndex, 1)
  }
  //   for (let i = 0; i < randomNames.length; i++) {
  //     const name = randomNames[i]
  //     let liNode = document.createElement("li")
  //     liNode.innerText = name
  //     ulNodes[i % numberOfTeams].appendChild(liNode)
  //   }
}

window.onload = () => {
  textInputNode.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addName()
    }
  })
}
