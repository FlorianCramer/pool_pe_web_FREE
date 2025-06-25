document.addEventListener("DOMContentLoaded", function () {
    const fields = [
        'impressum_adresse', 'impressum_telefonnummer', 'impressum_faxnummer',
        'impressum_email', 'impressum_steuernummer',
        'impressum_vorstand_name_1', 'impressum_vorstand_name_2',
        'impressum_vorstand_name_3', 'impressum_vorstand_name_4',
        'impressum_vorstand_name_5', 'impressum_datenschutzbeauftragter'
    ];

    // Daten laden
    fetch('/src/admin/php/impressum/load.php')
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
    document.getElementById('save_impressum').addEventListener('click', function (e) {
        e.preventDefault();
        const formData = new FormData();
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                formData.append(id, el.value);
            }
        });

        fetch('/src/admin/php/impressum/save.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                document.getElementById('status').textContent = message;
            });
    });
});
