//WEEK 3 EXC. 2
//Mengakses Nilai Dalam Array

function balikKata(kata){
    var balik = "";
    for (i = kata.length -1; i >= 0; i--) {
        balik += kata[i]    
    }
    return balik
};

console.log(balikKata("hello world!"))