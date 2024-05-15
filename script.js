document.addEventListener('DOMContentLoaded', () => {
    const provinsiSelect = document.getElementById('provinsi');
    const kotaSelect = document.getElementById('kota');

    // Fungsi untuk mengambil data provinsi
    async function fetchProvinsi() {
        try {
            const response = await fetch('https://ibukota-api.vercel.app/api/regions');
            const data = await response.json();
            populateProvinsi(data);
        } catch (error) {
            console.error('Error fetching provinsi:', error);
        }
    }

    // Fungsi untuk mengisi dropdown provinsi
    function populateProvinsi(provinces) {
        provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province.id;
            option.textContent = province.name;
            provinsiSelect.appendChild(option);
        });
    }

    // Fungsi untuk mengambil data kota berdasarkan id provinsi
    async function fetchKota(provinceId) {
        try {
            const response = await fetch(https://api.goapi.io/regional/kota?api_key=81c5bd06-f012-5961-b902-8d4104cf and provinsi_id ${provinceId}/cities);
            const data = await response.json();
            populateKota(data);
        } catch (error) {
            console.error('Error fetching kota:', error);
        }
    }

    // Fungsi untuk mengisi dropdown kota
    function populateKota(cities) {
        kotaSelect.innerHTML = '<option value="">Pilih Kota</option>'; // Clear previous options
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.id;
            option.textContent = city.name;
            kotaSelect.appendChild(option);
        });
    }

    // Event listener ketika provinsi dipilih
    provinsiSelect.addEventListener('change', () => {
        const selectedProvinceId = provinsiSelect.value;
        if (selectedProvinceId) {
            fetchKota(selectedProvinceId);
        } else {
            kotaSelect.innerHTML = '<option value="">Pilih Kota</option>'; // Clear kota options if no provinsi is selected
        }
    });

    // Panggil fungsi untuk mengambil data provinsi saat halaman dimuat
    fetchProvinsi();
});