//if else

let userword = prompt("Zehmet olmasa soz daxil edin")

if(userword==="user"){
    console.log("Xosh geldin istifadeci")
}
else if (userword==="admin"){
    console.log("Xosh geldin cenab amin")
}
else if ( userword==="guest"){
    console.log("Xosh geldin Qonaq ")
}
else{
    error
}




//switch case ile 

switch(userword){
    case "user": 
    console.log("Xosh geldin istifadeci ")
    break;
    case "admin":
        console.log("Xosh geldin cenab amin")
        break;
        case "guest":
            console.log("Xosh geldin Qonaq")
            break;
            default: console.log("error")
}


