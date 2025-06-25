<?php
header('Content-Type: text/plain');

$file = '../../../data/impressum.json';

$data = [];
foreach ($_POST as $key => $value) {
    $data[$key] = trim($value);
}

if (file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo "Impressum erfolgreich gespeichert.";
} else {
    echo "Fehler beim Speichern.";
}
