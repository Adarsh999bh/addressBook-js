console.log("welcome to Address Book Program.!")
const prompt = require("prompt-sync")()
let addressBookArray=[]
const getfirstname=()=>{
    let firstName=prompt("enter first name ")
    let nameAlreadyExists=addressBookArray.find(cont=>{
        if(cont.firstName==firstName){
            return true
        }
        else{
            return false
        }
    })
    if(nameAlreadyExists || !(RegExp("^[A-Z][a-zA-Z]{2,}").test(firstName))){
        console.log("Name already exists or doesnt match the regex!!\n Choose different user name")
        return getfirstname()
    }
    else{
        return firstName
    }
}
const getlastname=()=>{
    let lastName=prompt("enter last name ")
    if(RegExp("^[A-Z][a-zA-Z]{2,}").test(lastName)){
        return lastName
    }
    else{
        console.log("last name doesnt match regex.!")
        return getlastname()
    }
}
const getaddress=()=>{
    let address=prompt("enter address ")
    if(RegExp("^[a-zA-Z]{4,}").test(address)){
        return address
    }
    else{
        console.log("address doesnt match regex.!")
        return getaddress()
    }
}
const getcity=()=>{
    let city=prompt("enter city ")
    if(RegExp("^[a-zA-Z]{4,}").test(city)){
        return city
    }
    else{
        console.log("city name doesnt match regex.!")
        return getcity()
    }
}
const getstate=()=>{
    let state=prompt("enter state ")
    if(RegExp("^[a-zA-Z]{4,}").test(state)){
        return state
    }
    else{
        console.log("state name doesnt match regex.!")
        return getstate()
    }
}
const getzip=()=>{
    let zip=prompt("enter zip ")
    if(RegExp("^[0-9]{5}[- ]?[0-9]{4}$").test(zip)){
        return zip
    }
    else{
        console.log("zip doesnt match regex.!")
        return getzip()
    }
}
const getphoneNo=()=>{
    let phoneNo=prompt("enter phone number ")
    if(RegExp("^9[1][ ][1-9][0-9]{9}$").test(phoneNo)){
        return phoneNo
    }
    else{
        console.log("phone number doesnt match regex.!")
        return getphoneNo()
    }
}
const getemail=()=>{
    let email=prompt("enter email ")
    if(RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$").test(email)){
        return email
    }
    else{
        console.log("email doesnt match regex.!")
        return getemail()
    }
}
const addContact=()=>{
    let contact={
        firstName: getfirstname(),
        lastName: getlastname(),
        address: getaddress(),
        city: getcity(),
        state: getstate(),
        zip: getzip(),
        phoneNo: getphoneNo(),
        email: getemail()
    }
    addressBookArray.push(contact)
    console.log("inserted contact")
    console.log(contact)
}
addContact()