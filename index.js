const input = document.getElementById("input")
const btn = document.getElementById("btn")
const shoppingList = document.getElementById("shopping-list")

let shoppingListArray = JSON.parse(localStorage.getItem("shoppingListArray")) || [] //The script checks local storage for an existing key named "shoppingListArray". If data exists, it retrieves it and parses it (converts the JSON string back into a JavaScript array). If no data exists (e.g., the user visits the page for the first time), it initializes shoppingListArray as an empty array ([]).

const addShoppingItem = () => {
    console.log(input.value)
    if (!shoppingListArray.includes(input.value)){
        shoppingListArray.push(input.value)
        console.log(shoppingListArray)
        updateLocalStorage()
        displayToDoList()
    }
    input.value = ""
}

btn.addEventListener("click", addShoppingItem)

const updateLocalStorage = () => { // The script updates local Storage DOM based on the array
    localStorage.setItem("shoppingListArray",JSON.stringify(shoppingListArray))
}

const displayToDoList = () => {
    let html = ""
    for (let oneItem of shoppingListArray){
        html += `<li id=${oneItem}>${oneItem}</li>`
    }
    return shoppingList.innerHTML = html
}

shoppingList.addEventListener("click", (e) => {
console.log(e.target.id)
shoppingListArray = shoppingListArray.filter(oneItem => e.target.id !== oneItem)
console.log(shoppingListArray)
updateLocalStorage()
displayToDoList()
})

