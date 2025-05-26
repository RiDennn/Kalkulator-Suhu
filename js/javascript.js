const inputSuhu = document.getElementById("input-suhu");
    const hasilSuhu = document.getElementById("hasil-suhu");
    const detailSuhu = document.getElementById("detail-suhu");

    const tombolKonversi = document.getElementById("btn-konversi");
    const tombolReset = document.getElementById("btn-reset");
    const tombolReverse = document.getElementById("btn-reverse");

    const labelInput = document.getElementById("label-input");
    const labelHasil = document.getElementById("label-hasil");

    let modeCelcius = true; // true: C to F, false: F to C

    function konversiSuhu() {
      const suhu = parseFloat(inputSuhu.value);
      if (isNaN(suhu)) {
        hasilSuhu.value = "Masukkan angka yang valid!";
        detailSuhu.value = "";
        return;
      }

      if (modeCelcius) {
        const hasil = (suhu * 9) / 5 + 32;
        hasilSuhu.value = hasil.toFixed(2) + " °F";
        detailSuhu.value = `${suhu} °C → (${suhu} × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
      } else {
        const hasil = ((suhu - 32) * 5) / 9;
        hasilSuhu.value = hasil.toFixed(2) + " °C";
        detailSuhu.value = `${suhu} °F → (${suhu} - 32) × 5/9 = ${hasil.toFixed(2)} °C`;
      }
    }

    function resetForm() {
      inputSuhu.value = "";
      hasilSuhu.value = "";
      detailSuhu.value = "";
    }

    function reverseMode() {
      modeCelcius = !modeCelcius;
      if (modeCelcius) {
        labelInput.innerText = "Celcius (°C):";
        labelHasil.innerText = "Fahrenheit (°F):";
      } else {
        labelInput.innerText = "Fahrenheit (°F):";
        labelHasil.innerText = "Celcius (°C):";
      }
      resetForm();
    }

    tombolKonversi.addEventListener("click", konversiSuhu);
    tombolReset.addEventListener("click", resetForm);
    tombolReverse.addEventListener("click", reverseMode);