let first = Number(prompt("Birinci ededi daxil edin"));
let second = Number(prompt("Ikinci ededi daxil edin"));
let third = Number(prompt("Ucuncu ededi daxil edin"));
if( first>second && first>third) {
    console.log(`Sizin daxil etdiyiniz ededlerden en boyuyu 
    ${first} ededidir`  )
}
else if ( second>first && second>third){
    console.log(`Sizin daxil etdiyiniz ededlerden en boyuyu 
    ${second} ededidir`)
}
else{
    console.log(`Sizin daxil etdiyiniz ededlerden en boyuyu 
    ${third} ededidir`)
}

//  && -> ikisinden biri false olsa false qaytaracaq. Yeni iki shertin ikisi de dogru olmalidir ki true qaytarsin.