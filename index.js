const input = document.getElementById("input")
const btn = document.getElementById("btn")
const shoppingList = document.getElementById("shopping-list")

let shoppingListArray = []


const addShoppingItem = () => {
    console.log(input.value)
    if (!shoppingListArray.includes(input.value)){
        shoppingListArray.push(input.value)
        console.log(shoppingListArray)
        displayToDoList()
    }
    input.value = ""
}

btn.addEventListener("click", addShoppingItem)

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
    displayToDoList()
   })

