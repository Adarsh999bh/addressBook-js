console.log("welcome to Address Book Program.!")
const prompt = require("prompt-sync")()
let addressBookArray=[]
const addContact=()=>{
    let contact={
        firstName: prompt("enter first name "),
        lastName: prompt("enetr last name"),
        address:prompt("enter address "),
        city:prompt("enter city "),
        state:prompt("enter state "),
        zip:prompt("enter zip "),
        phoneNo:prompt("enter phone number"),
        email:prompt("enter email ")
    }
    addressBookArray.push(contact)
    console.log("inserted contact")
    console.log(contact)
}