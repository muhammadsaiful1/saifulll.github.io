
// segitiga
var bil = 1/2;
var alas = 23;
var tinggi = 20;

var hasil = 1/2*(alas*tinggi);

console.log(hasil)

// lingkaran
var r1 =12;
var r2 =21;

var hasil = 22/7*(r1 * r2);

console.log(hasil);

// login akun
const email = "yassertkj@gmail.com";
const pass = "anu";

if (email === "yassertkj@gmail.com"){
if (pass === "anu");
    console.log("kamu berhasil login");
}else{
    console.log("password salah");
}

// switch case

const warna = "hijau";

switch (warna) {
    case "hitam":
        console.log("warna hitam");
        break;
    case "putih":
        console.log("warna putih");
        break;
        default:
        console.log("tidak ada warna pilihan");
        break;
}

// tugas pendapatan
var pendapatan = 300000;
var komisi,jasa,total;

if (pendapatan >= 0 && pendapatan <= 2000000){
    jasa = 10000;
    komisi = 0.1 * pendapatan;
}
else if (pendapatan <= 500000){
    jasa = 20000;
    komisi = 0.15 * pendapatan;
}
else
{
    jasa = 30000;
    komisi = 0.2;
}
{
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total)
}