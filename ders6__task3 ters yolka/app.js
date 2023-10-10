let boy= +prompt("boyunuzu daxil edin")

let ceki=+prompt("cekinizi daxil edin")

let bmi= ceki/(boy*boy)


if(!isNaN (bmi)){
    if (bmi <18.5){
        console.log("siz ariqsiz")
    }
    else if(bmi<25) {
        console.log("siz normalsiz")
    }
    else if(bmi<30){
        console.log("siz koksuz ")
    }
    else{console.log("obese")}
}

else{
    alert("duz yaz da")
}