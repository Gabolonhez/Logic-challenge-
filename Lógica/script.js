 //output
 console.log("What's the player name?")

 //declaring variable
 let nickname = "Gabolonhez"
 
 //concatenando fixed mensage + variable
 console.log("Be welcome" + nickname)
 console.log(nickname + "joined the server")

___________________________________________________________

const notification = "Pokemon Go say: "


//output
console.log(notification + "There is a new pokemon in the region")
console.log(notification + "You were defeat")

____________________________________________________________

let bowlCoffee = "Pilao coffee"
let bowlSugar = "Cristal sugar"
let bowlBiscuit = "CornStarch Biscuit"
const messageGrandmother = "In grandmother's kitchen today have:"

bowlCoffee = "3 hearts coffee"

console.log(messageGrandmother +  
bowlCoffee + " " +
bowlSugar + " " 
bowlBiscuit + " " 
)

_____________________________________________________________
//pokemon
let pokemonName = "pikachu"
let pokemonLevel = 20
let pokemonLife = 45
let pokemonSex = "M"
let selective = true  

//string - text variables
//number - number variables
//boolean - true or false variables 

______________________________________________________________

//name, age, phone number, cpf, address, receives pension

let herName = "Arta Duego"
let age = 115
let phoneNumber = "00-00000000"
let cpf = "000.000.000-00"
let address = "Wall street, Nova York"
let receivesPension = true

______________________________________________________________

let name = "Water bottle"
let mililiter = 500
let color = "Blue"
let fullorEmpty = false

______________________________________________________________
//Array

let pokemonNames = ["Pikachu" , "Charmander" , "Bulbasaur"]

//Matriz

let pokemonTeam = [
    ["Pikachu", "M", "Level 1"],
    ["Charmander", "F", "Level 4"]
]

console.log("o pokemon " + pokemonTeam[1][0] + "of gender" + pokemonTeam[1][1] + "and at the level" + pokemonTeam[1][2])

console.log(pokemonNames.length)


______________________________________________________________
//arithmetic operators

let age = 30
age = 30 + 6
console.log("addition operation" + age)


let firstNumber= 1023
let secondNumber = 23
let result = firstNumber - secondNumber
console.log("subtraction operation" + result)

let productValue = 100.99
let feeValue = productValue * 2
console.log(feeValue)

let multiplier = 4
let multipling = 12
let product = multiplier * multiplying
console.log("multiply result is" + product)

multiplier = 8
console.log("multiply result is" + product)

let marketNote = 50
let personToMultiply = 2
console.log("division operation:" + marketNote / personToMultiply)

let calculation = 10 % 3
console.log(calculation)

_______________________________________________________________
//increment and decrement

let counter = 1 

counter++

counter-- 

console.log(counter)

_______________________________________________________________
//calculate and assign(atribuir)
let price = 10
price += 5
price -= 4
console.log(price)

_______________________________________________________________
//scope ((  )    ) 

let result1 = 2 * ((5 + 5) - 10)

console.log(result1)

_______________________________________________________________
//compare operators 

let number = "1" // assign (atribuição)
console.log(number == "1") //compare value
console.log(number === 1) //compare value and format

let brand = "Apple"
console.log(brand !== "Apple") //diferent or not

let result2 = marca === "Samsung"
console.log(result2)

let cpfblocked = "000.000.000-00"
let cpfUser = "000.000.0000-00"
let isBlockedCpf = cpfUser === cpfblocked 

console.log("User is able to board?" + isBlockedCpf)

let cpfPermitted = "000.000.000-00"
let userCpf = "000.000.000-00"

let isCpfBloqued = userCpf !== cpfPermitted

console.log("Is an invalid user?" + isCpfBloqued)

let minimumAge = 18
let userAge = 18
let permittedage = userAge >= minimumAge // >= or >

console.log(permittedage)

let age1 = 50
let userAge2 = 50

let resultAge = age1  <= userAge2 // <= or <
console.log(resultAge)

let text = "Gabriel"
console.log(text === "Gabriel") 

______________________________________________________________
// Logical operators

// and (&&)
let age2 = 18
let verifiedVisa = true
let result3 = ( (age >= 18) && (verifiedVisa === true))
console.log(result3)

let collectedCoins = 99
let item = "estrela"
let result4 = (collectedCoins === 100) && (item === "estrela")
console.log(result4)

// or (||) 
let weather = "chuva"
let item2 = "umbrella"
let ableToLeave = (weather !== "chuva") || (item === "umbrella")
console.log("Our character can leave?" + ableToLeave)

// not ( !)
let weather2 = "sol"
let hour = 12
let result5 = !((weather !== "sol") && (hour > 6))
console.log(result5) 

_______________________________________________________________
// conditional strutures 

// if, else, else if

let isOn = true

if (isOn){
    console.log("command executed")
}

let haveEggs = true
let boughtItems = ""

if(haveEggs){
    boughtItems = "Milk"
}
else{
    console.log("passed the frozen session")
    boughtItems = "Frozen lasanha"

console.log("bought item:" + boughtItems)
}


let hungryLevel = 10

if(hungryLevel === 1){
    console.log("little hunger")
}else if(hungryLevel === 2){
    console.log("very hunger")
}else{
    console.log("starving")
}


______________________________________________________________
// Decision structure 

//switch, case, break, default

let fruit = "banana"

switch (fruit){
    case "orange":
    console.log("orange juice")
    console.log("second juice")
    break      

    case "banana":
    case "strawberry"
    console.log("smoothie + fruit")
    break

    case "apple":
    console.log("apple juice")

    default:
    console.log("generic juice")
}


_______________________________________________________________
// repetion strutures 

// for, while, do-while

for (let counter = 0; counter < 4; counter ++)
{ 
    console.log(counter)
    console.log("increase counter")
}

let lifePoints = 0

for(let i = 0; i <= 10 ; i++){
    lifePoints += 1
    console.log("Took the magic potion" + i)
}

console.log(lifePoints + " Totals ")


let i = 0

while(i < 3) {
    console.log(" Hi ")
    i++
}


let counter1 = 0

do {
    console.log(" Hi ")
    counter1++
    while (counter < 3)
}