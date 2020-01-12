//WEEK 3 EXC. 3
//Melakukan Looping Data Array

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"], 
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"], 
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"], 
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(list){
    var id = [];
    var name = [];
    var ttl = [];
    var hobi = [];

    for (i=0;i<list.length;i++){  
        id.push(list[i][0]);
        name.push(list[i][1]);
        ttl.push(list[i][2]+ ` ` +list[i][3]);
        hobi.push(list[i][4]);
    };

    for (i=0;i<list.length;i++){
        console.log(`Nomor ID: ` + id[i]);
        console.log(`Nama Lengkap: ` + name[i]);
        console.log(`TTL: ` + ttl[i]);
        console.log(`Hobi: ` + hobi[i]);
        console.log();
    };
};

dataHandling(input);

/*
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/