<?php
if (isset($_GET['city']) || ! empty($_GET['city'])) {
    $result = 'Страна невідома';
    if ($_GET['city'] == "Лондон") {
        $result = 'Великобританія';
    }
    if ($_GET['city'] == "Париж") {
        $result = 'Франція';
    }
    if ($_GET['city'] == "Берлін") {
        $result = 'Німеччина';
    }
    echo "ви обрали <strong>$result</strong>";
}