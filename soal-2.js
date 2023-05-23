const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const makananKesukaan = ["Daging", "Buah", "Sayur"];

const data = () => [...hewanBuas, ...hewanJinak];

const pemetaanHewan = (hewan, makanan) => {

    const hasilPemetaan = {};

    for (let a=0; a<hewan; a++){
        hasilPemetaan[hewan[a], makanan[a]];
    }

    return hasilPemetaan;
}

console.log(pemetaanHewan(hewanJinak,makananKesukaan));
setTimeout(() => {
    console.log(data());
}, 5000);
