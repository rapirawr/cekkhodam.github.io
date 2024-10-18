const khodams = [ 
    "Burung Emas 🦅💛", "Guntur Biru 🔵", "Hantu Bayangan 🌑", "Bintang Emas 🌟", "Angin Dingin ❄️","Agus Tiger",
    "Uyung Berkaki lima", "Eko berkepala naga", "Dajjal pujer", "Barong", "Imron kentut api" , "Sugik anjay", " Uyung Kopling",
    "Sugik Togel", "Slamet Michat", "Bakso Uyung", "Basori Pecel Lele", "Siluman Nanang", "Agus Jembatan Ancol", "Eko Moshing",
    " Uyung Breakdance", "Sugik Molet", "Nono Gombel", "Agus Mohawk", "Bashori Overthinking", "Sugik Introvert" , "Eko Racing Brumhhh",
    "Cempedak", "Harimau Api Rawrh", "Badut Mampang", "Naga Biru", "Badak Terbang", "Gorilla Petarunk", "Ratu Penyihir", "Rubah sunda",
    "BH Kuntilanak", "Sugik Cempedak", "Uyung Second Choice", "Biawak Alaska", "Agung Amazon", "Ucok GTA", "Bunglon Insomnia", "Ubur-ubur Kayang",
    "Uyung Martabak", "Helikopter Wiu Wiu", "Agus Resing", "Supra Getar", "Agung Royco", "Rice Cooker", "Bak Mandi Blukutuk", "Nastar Push Up",
    "Aldi Taher", "Ular Sumbing", "Rudi Indomie","Eko kejang kejang","Dika tutut","Macan Sumatera","Roger Sulawesi","Burung Kalimantan","Biawak Bondowoso","Loly Imut","Vadel Kutu"
];

document.getElementById('totalKhodam').innerText = khodams.length;

document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKodam(name);
        result.innerHTML = `<strong>${name}</strong> khodam mu adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;">Silahkan masukkan nama anda</span>';
    }
});

function checkKodam(name) {
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index]; 
}
