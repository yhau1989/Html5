<?php


if (isset($_POST)) {

    $email = $_POST['email'];
    $password = $_POST['pws'];

    echo '<h1>Datos</h1>';
    echo '<b>Email</b>: ' . $email;
    echo '</br>';
    echo '<b>Password</b>: ' . $password;

}
else
{
    echo '<h1>Datos</h1>';
    var_dump($_POST);
}


