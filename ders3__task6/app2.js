//switch case ile 

let n1= Number(prompt("Birinci ededi daxil edin"));
let o= prompt("Operatoru daxil edin");
let n2= Number(prompt("Ikinci  ededi daxil edin"));
let result;
switch(o) {
    case "+":
        result=`${n1} ${o} ${n2} = ${ n1+n2}`
        break;
        case "-":
        result = `${n1} ${o} ${n2} = ${n1-n2}`
        break;
        case "*":
            result = `${n1} ${o} ${n2} = ${n1*n2}`
            break;
            case "/":
                result =`${n1} ${o} ${n2} = ${n1/n2}`
                break;
                default:  result= "404 not found "
}
console.log(result);