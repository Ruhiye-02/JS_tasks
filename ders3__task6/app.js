//if else ile 
let n1= Number(prompt("Birinci ededi daxil edin"));
let o= prompt("Operatoru daxil edin");
let n2= Number(prompt("Ikinci  ededi daxil edin"));
let result;


if(! isNaN (n1) && ! isNaN (n2)){
    
if (o=== "+") {
    result=`${n1} ${o} ${n2} = ${ n1+n2}` ;
}

else if(o ==="-"){
    result = `${n1} ${o} ${n2} = ${n1-n2}`
}

else if(o ==="*"){
    result = `${n1} ${o} ${n2} = ${n1*n2}`
}
else if( o === "/") {
    result =`${n1} ${o} ${n2} = ${n1/n2}`
}
else{
    result= "404 not found"
}
}

else { result= "duzgun eded daxil edin "}
console.log(result);



// isNaN = is not a number ;
//  !isNan = is not a number DEYIL
// yuxarda  daxil edilen n1 ve n2 nin  eded olmasi ucun 




