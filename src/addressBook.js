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

const editContact=(personName)=>{
    for(i=0;i<addressBookArray.length;i++){
        if(addressBookArray[i].firstName==personName){
            let flag=true
            while(flag){
                console.log("1.FirstName\n2.LastName\n3.Address\n4.City\n5.State\n6.Zip\n7.Mobile no.\n8.Email\n9.Done Editing")
                switch(Number(prompt("Enter your choice"))){
                    case 1:{
                        addressBookArray[i].firstName=getfirstname()
                        break
                    }
                    case 2:{
                        addressBookArray[i].lastName=getlastname()
                        break
                    }
                    case 3:{
                        addressBookArray[i].address=getaddress()
                        break
                    }
                    case 4:{
                        addressBookArray[i].city=getcity()
                        break
                    }
                    case 5:{
                        addressBookArray[i].state=getstate()
                        break
                    }
                    case 6:{
                        addressBookArray[i].zip=getzip()
                        break
                    }
                    case 7:{
                        addressBookArray[i].phoneNo=getphoneNo()
                        break
                    }
                    case 8:{
                        addressBookArray[i].email=getemail()
                        break
                    }
                    case 9:{
                        flag=false
                        break
                    }
                    default:{
                        flag=false
                        break
                    }
                }
            }
            console.log("saved edits")
            break
        }
    }
    
}
const deleteContact=(personName)=>{
    for(i=0;i<addressBookArray.length;i++){
        if(addressBookArray[i].firstName==personName){
            addressBookArray.splice(i,1)
            console.log("Deleted contact successfully")
            return
        }
    }
    console.log(personName+" not found in Address Book ")

}