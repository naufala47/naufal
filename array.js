
var buah    = ["mangga","pisang","nangka","semangka","durian"];
var sayuran = ["timun","wortel","tomat"];

console.log(buah);
console.log(sayuran);
console.log(buah[0]);
console.log(sayuran[0]);

//for ada 3 parameter
for (var i = 0; i < 5;i++){
    console.log(i);
    
}

//while hanya 1 parameter yaitu kondisi saja    
var x = 6;
while (x < 5){
    x++;
    console.log("nilai x="+x);
    
}


var y = 6;
do{
    y++;
    console.log("nilai y="+y);
} while(y<5);

createListBuah();
createListSayur();

function createListBuah(){
    var listBuah = "";
    for(var z = 0; z < buah.length;  z++){

        console.log(buah[z]);
        // listBuah = listBuah + "<li>" + buah[z] + "<button onclick='tambahItemBuah()'>+</button>" + "</li>";
        listBuah = listBuah + "<li>" + buah[z] + "<button onclick='tbladd2("+z+")'>+</button>" + "  <div id='boxisidata"+z+"' style='display:none;'>  <input type='text' id='txtBuah1"+z+"'/>  <button id='btnAddBuah' onclick=tambahBuah(document.getElementById('txtBuah1"+z+"').value)>Tambah Buah</button>  </div>"  + "</li>"; 

    }
    console.log(listBuah);
    document.getElementById("buah").innerHTML = listBuah;
}


//1 & 1 = 1
//1 + 0 = 1
//AND itu tambah, OR itu kali
//!== artinya tidak sama dengan
//else if akan terus berlanjut condition nya
//untuk condition terakhir hanya masukkan else saja


function tambahBuah(namaBuah){
    //if digunakan untuk conditional jika terpenuhi dan tidka terpenuhi
    //versi 1
    if(buah.length >= 10){
        alert("jumlah buah tidak bisa lebih dari 10");
    }else {
        if (cariBuahSama(namaBuah)) {
            alert("maaf sdah  diinput");
        }else{
        buah.push(namaBuah);
        createListBuah();
    }

    //versi 2   
    // buah.length >= 10 ? 
    // alert("jumlah buah tidak bisa lebih dari 10") : 
    // buah.push(namaBuah);createListBuah();
}
}

function cariBuahSama(namaBuah){
    for(var i = 0; i < buah.length; i++){
        if(buah[i].toLowerCase() === namaBuah.toLowerCase()) {
            return true;
        }
    }
    return false;
}
// = menginput nilai
// == kondisional
// function sesuatu yang dipanggil
// lenght menghitung isi panjang dari sebuah array


// function cekIsiBuah (namaBuah){
//     var jmlBuahSama = buah.find(namaBuah);
//     return jmlBuahSama;
// }


// function cekBuah (a){
//     return a === namaBuah;

// }        


function createListSayur(){
    var listSayur = "";
    for(var z = 0; z < sayuran.length;  z++){

        console.log(sayuran[z]);
        listSayur = listSayur + "<li>" + sayuran[z] + "</li>";
    }
    console.log(listSayur);
    document.getElementById("sayuran").innerHTML = listSayur;
}

function tambahSayur(namaSayur){
    if(sayuran.length >= 10){
        alert("jumlah sayuran tidak bisa lebih dari 10");
    }else {
        if (cariSayurSama(namaSayur)) {
            alert("maaf sdah  diinput");
        }else{
            sayuran.push(namaSayur);
        createListSayur();
    }

}
}

function cariSayurSama(namaSayur){
    for(var i = 0; i < sayuran.length; i++){
        if(sayuran[i].toLowerCase() === namaSayur.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function tambahItem (namaItem, jenisItem){
    switch(jenisItem){
        
        case "buah" :
            tambahBuah(namaItem);
            break;
        case "sayur" :
            tambahSayur(namaItem);
            break;
    }
}
// function tmbh(){
//         tambahBuah(document.getElementById("txtBuah").value);
//         createListBuah();
// }
// function tambahItemBuah (){
//         document.getElementById("buahan").innerHTML = "<label  for = 'txtBuah'>input nama buah :</label><input  type = 'text' id = 'txtBuah'><button id  = 'btnAddBuah' onclick = 'tmbh()'>tambah buah</button>";
// }