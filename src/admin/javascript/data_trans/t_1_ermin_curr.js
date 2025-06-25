document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        'ter_1_curr_year' , 'dat_1_curr_year' , 'tim_1_curr_year' , 'ort_1_curr_year' ,
        'ter_2_curr_year' , 'dat_2_curr_year' , 'tim_2_curr_year' , 'ort_2_curr_year' ,
        'ter_3_curr_year' , 'dat_3_curr_year' , 'tim_3_curr_year' , 'ort_3_curr_year' ,
        'ter_4_curr_year' , 'dat_4_curr_year' , 'tim_4_curr_year' , 'ort_4_curr_year' ,
        'ter_5_curr_year' , 'dat_5_curr_year' , 'tim_5_curr_year' , 'ort_5_curr_year' ,
        'ter_6_curr_year' , 'dat_6_curr_year' , 'tim_6_curr_year' , 'ort_6_curr_year' ,
        'ter_7_curr_year' , 'dat_7_curr_year' , 'tim_7_curr_year' , 'ort_7_curr_year' ,
        'ter_8_curr_year' , 'dat_8_curr_year' , 'tim_8_curr_year' , 'ort_8_curr_year' ,
        'ter_9_curr_year' , 'dat_9_curr_year' , 'tim_9_curr_year' , 'ort_9_curr_year' ,
        'ter_10_curr_year', 'dat_10_curr_year', 'tim_10_curr_year', 'ort_10_curr_year',
        'ter_11_curr_year', 'dat_11_curr_year', 'tim_11_curr_year', 'ort_11_curr_year',
        'ter_12_curr_year', 'dat_12_curr_year', 'tim_12_curr_year', 'ort_12_curr_year',
        'ter_13_curr_year', 'dat_13_curr_year', 'tim_13_curr_year', 'ort_13_curr_year',
        'ter_14_curr_year', 'dat_14_curr_year', 'tim_14_curr_year', 'ort_14_curr_year',
        'ter_15_curr_year', 'dat_15_curr_year', 'tim_15_curr_year', 'ort_15_curr_year'
    ];

    // Daten laden
    fetch('/src/admin/php/t_1_ermin_curr/load.php')
        .then(response => response.json())
        .then(data => {
            fields.forEach(id => {
                const el = document.getElementById(id);
                if (el && data[id]) {
                    el.value = data[id];
                }
            });
        });

    // Speichern
    document.getElementById('save_termine_curr_year').addEventListener('click', function (e) {
        e.preventDefault();
        const formData = new FormData();
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                formData.append(id, el.value);
            }
        });

        fetch('/src/admin/php/t_1_ermin_curr/save.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                document.getElementById('status').textContent = message;
            });
    });
});
