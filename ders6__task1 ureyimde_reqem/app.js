const cpu_Eded = Math.floor ((Math.random()*100)+1)

let usereded= +prompt("eded daxil edin")
let count=1
while(cpu_Eded !== usereded){
    count++

if(usereded > cpu_Eded){
   usereded= +prompt ("daha kicik eded daxil edin ")
}
else {
    usereded= +prompt ("daha boyuk eded daxil edin ")
}
}

    //  console.log( count + "defeye tapdin  Kapital bank hesabiniza 1000 manat kocuruldu")

switch(count)
{
    case 1:
        console.log ( `${count} defeye tapdiz 1000 manat hesabiniza kocuruldu`)
        break;
        case 2:
        case 3:
        case 4:
        case 5:
            console.log (`${count} defeye tapdiz 750 manat hesabiniza kocuruldu`)
            break;
            case 6:
            case 7:
            case 8:
            case 9:
                console.log (`${count} defeye tapdiz 250 manat hesabiniza kocuruldu`)
                break;
                default: 
                console.log('250 manat vermelisiz ') 
}
