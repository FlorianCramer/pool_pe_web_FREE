<?php
header('Content-Type: application/json');

$file = '../../../data/t_1_ermin_curr.json';

if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo json_encode([]);
}
