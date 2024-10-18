document.getElementById('checkButton').addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const result = document.getElementById('result');
  
if (name) {
    if (name == 'fais') {
        result.innerHTML = 'Anda tidak bisa cek khodam';
    } else {
        const khodam = checkKodam(name);
        result.innerHTML = `Khodam anda adalah: <strong>${khodam}</strong>`;
    }
} else {
    result.innerHTML = '<span style="color: red;">Silahkan masukkan nama anda</span>';
}

  });
  
  function checkKodam(name) {
      const khodams = [ 
            "Burung Emas 🦅💛", "Guntur Biru 🔵", "Hantu Bayangan 🌑", "Bintang Emas 🌟", "Angin Dingin ❄️","Agus Tiger",
            "Uyung Berkaki lima", "Eko berkepala naga", "Dajjal pujer", "Barong", "Imron kentut api" , "Sugik anjay", " Uyung Kopling",
            "Sugik Togel", "Slamet Michat", "Bakso Uyung", "Basori Pecel Lele", "Siluman Nanang", "Agus Jembatan Ancol", "Eko Moshing",
            " Uyung Breakdance", "Sugik Molet", "Nono Gombel", "Agus Mohawk", "Bashori Overthinking", "Sugik Introvert" , "Eko Racing Brumhhh"
        ];
          
      const index = Math.floor(Math.random() * khodams.length);
      return khodams[index]; 
  }
  
