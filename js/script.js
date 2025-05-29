// Mendapatkan elemen dari DOM
const btnKonversi = document.getElementById('btn-konversi');
const btnReset = document.getElementById('btn-reset');
const btnReverse = document.getElementById('btn-reverse');
const inputSuhu = document.getElementById('input-suhu');
const fromScale = document.getElementById('from-scale');
const toScale = document.getElementById('to-scale');
const hasilSuhu = document.getElementById('hasil-suhu');
const detailSuhu = document.getElementById('detail-suhu');

// Fungsi untuk mengkonversi suhu
function konversiSuhu() {
    const suhu = parseFloat(inputSuhu.value);
    const dari = fromScale.value;
    const ke = toScale.value;
    let hasil = 0;
    let detail = '';

    if (isNaN(suhu)) {
        hasilSuhu.value = 'Masukkan suhu yang valid!';
        detailSuhu.value = '';
        return;
    }

    // Konversi suhu dan rumus detail
    if (dari === 'C') {
        if (ke === 'F') {
            hasil = (suhu * 9/5) + 32;
            detail = `${suhu} °C = (${suhu} × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
        } else if (ke === 'Re') {
            hasil = suhu * 4/5;
            detail = `${suhu} °C = ${suhu} × 4/5 = ${hasil.toFixed(2)} °Re`;
        } else if (ke === 'K') {
            hasil = suhu + 273.15;
            detail = `${suhu} °C = ${suhu} + 273.15 = ${hasil.toFixed(2)} K`;
        } else {
            hasil = suhu;
            detail = `${suhu} °C = ${hasil.toFixed(2)} °C`;
        }
    } else if (dari === 'F') {
        if (ke === 'C') {
            hasil = (suhu - 32) * 5/9;
            detail = `${suhu} °F = (${suhu} - 32) × 5/9 = ${hasil.toFixed(2)} °C`;
        } else if (ke === 'Re') {
            hasil = (suhu - 32) * 4/9;
            detail = `${suhu} °F = (${suhu} - 32) × 4/9 = ${hasil.toFixed(2)} °Re`;
        } else if (ke === 'K') {
            hasil = (suhu - 32) * 5/9 + 273.15;
            detail = `${suhu} °F = ((${suhu} - 32) × 5/9) + 273.15 = ${hasil.toFixed(2)} K`;
        } else {
            hasil = suhu;
            detail = `${suhu} °F = ${hasil.toFixed(2)} °F`;
        }
    } else if (dari === 'Re') {
        if (ke === 'C') {
            hasil = suhu * 5/4;
            detail = `${suhu} °Re = ${suhu} × 5/4 = ${hasil.toFixed(2)} °C`;
        } else if (ke === 'F') {
            hasil = (suhu * 9/4) + 32;
            detail = `${suhu} °Re = (${suhu} × 9/4) + 32 = ${hasil.toFixed(2)} °F`;
        } else if (ke === 'K') {
            hasil = (suhu * 5/4) + 273.15;
            detail = `${suhu} °Re = (${suhu} × 5/4) + 273.15 = ${hasil.toFixed(2)} K`;
        } else {
            hasil = suhu;
            detail = `${suhu} °Re = ${hasil.toFixed(2)} °Re`;
        }
    } else if (dari === 'K') {
        if (ke === 'C') {
            hasil = suhu - 273.15;
            detail = `${suhu} K = ${suhu} - 273.15 = ${hasil.toFixed(2)} °C`;
        } else if (ke === 'F') {
            hasil = (suhu - 273.15) * 9/5 + 32;
            detail = `${suhu} K = ((${suhu} - 273.15) × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
        } else if (ke === 'Re') {
            hasil = (suhu - 273.15) * 4/5;
            detail = `${suhu} K = (${suhu} - 273.15) × 4/5 = ${hasil.toFixed(2)} °Re`;
        } else {
            hasil = suhu;
            detail = `${suhu} K = ${hasil.toFixed(2)} K`;
        }
    }

    // Menampilkan hasil
    hasilSuhu.value = hasil.toFixed(2);
    detailSuhu.value = detail;
}

// Fungsi untuk mereset input
function resetInput() {
    inputSuhu.value = '';
    hasilSuhu.value = '';
    detailSuhu.value = '';
    fromScale.selectedIndex = 0;
    toScale.selectedIndex = 0;
}

// Fungsi untuk membalik skala dan langsung melakukan konversi ulang jika input valid
function reverseScale() {
    const tempFrom = fromScale.value;
    fromScale.value = toScale.value;
    toScale.value = tempFrom;

    if (inputSuhu.value.trim() !== '') {
        konversiSuhu();
    } else {
        hasilSuhu.value = '';
        detailSuhu.value = '';
    }
}

// Event listeners
btnKonversi.addEventListener('click', konversiSuhu);
btnReset.addEventListener('click', resetInput);
btnReverse.addEventListener('click', reverseScale);

