<?php
if (isset($_POST['x']) || !empty($_POST['y'])) {
    echo $_POST['x'] + $_POST['y'];
}