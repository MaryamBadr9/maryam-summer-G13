var usersList = [
    { id: 1, name: "Maryam", balance: 1000 },
    { id: 2, name: "Badr", balance: 1500 },
    { id: 3, name: "Ahmed", balance: 2000 },
    { id: 4, name: "Sara", balance: 2500 }
]
console.log(usersList)

// function addUser(){
//     var id = Number (prompt("enter id: "))
    
//     for(var i=0 ; i < usersList.length ; i++){
//         if(usersList[i].id===id){
//             console.log(`id ${id} already exists`)
//             return;
//     }}
    
//     var name = prompt("enter name: ")
    
//     var balance = Number(prompt("enter balance: "))

//     usersList.push({id: id , name: name, balance: balance})
//     console.log(usersList)

// }

// console.log(addUser())


// function editBalance(){
//     var id = Number(prompt('enter id to edit balance'))
//     var newBalance = Number(prompt('enter new balance: '))
//     var  user = usersList.find(user =>user.id === id)
//     if (user){
//         user.balance = newBalance;
//         console.log('balance updated')
//     }
//     console.log(usersList)
    
// }

// console.log(editBalance())

function deleteUser(){
    var id = Number(prompt('enter id to delete user'))
   
    for(var i=0 ; i < usersList.length ; i++){
        if(usersList[i].id === id){
            usersList.splice(i , 1)
            console.log('user deleted')
        }
        console.log(usersList)
    }
    
}

console.log(deleteUser())

