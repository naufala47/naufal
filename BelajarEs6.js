let namaVariable = 10;


//const nilai yang tidak bisa diubah2 lagi
//let aware dengan scope
{//scope block
    namaVariable++;
    console.log(namaVariable);
}

{
    let namaVariable = 5;
    namaVariable++;
    console.log(namaVariable);
}

console.log(namaVariable);
//=================================================================

let nama = "Ahmad"
let namaLengkap = ` Hi nama saya adalah " ${nama} Naufal " `;

console.log(namaLengkap);

//=================================================================

function ambilBuah() {
    return ["mangga", "pepaya", "pisang", "rambutan"];
}

let [buahManis, buahAsam, buahPanjang, buahBerambut] = ambilBuah();

console.log(buahManis);
console.log(buahAsam);
console.log(buahPanjang);
console.log(buahBerambut);

//=================================================================

let namaMuridKelas1 = ["a", "b", "c"];
let namaMuridKelas2 = ["d", "e", ...namaMuridKelas1];
let namaMuridKelas3 = ["aa", "bb", "cc"];

//push
//... restparameter
namaMuridKelas3.push(...namaMuridKelas2);

//=================================================================

let nilaiKelas = [10, 9, 8, 7];

console.log(Math.max(...nilaiKelas));

console.log(namaMuridKelas3);

//=================================================================

function tambah(...nilai) {
    let hasil = 0;
    for (let i = 0; i < nilai.length; i++) {
        hasil = hasil + nilai[i];
    }
    return hasil;

}

let nilaix = [1, 2, 3, 4];
console.log(tambah(...nilaix));

//=================================================================

// let manusia = {
const manusia = {
    mata: "hitam",
    rambut: "pendek",
    gigi: "putih",
    nama: "ahmad",
    kekasih: ["nene", "miko"],
    pekerjaan: { namaPerusahaan: "Toki", alamat: "bangka" },
    orang: "elu"

}

console.log(manusia.kekasih[1]);


let { mata, rambut, gigi, pekerjaan } = manusia;
console.log(pekerjaan.namaPerusahaan)

const { orang = "gue" } = manusia;
console.log(orang);

//=================================================================

let multiply = (a) => {
    let calc = (b) => {

        return a * b;
    }
    return calc;

}


let x = multiply(5);
let y = x(2);

console.log(y);
