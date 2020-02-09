<?php

    $tema= "Заявка";
    $subject  = $tema;
    $fio     = $_POST['name_Osbb'];
    $phone    = $_POST['phone_Osbb'];
    $headers  = 'Content-type: text/html; charset=utf-8' . "\r\n";

    $message  .= "<b>Письмо с формы сайта ОСББ:</b> {$tema}<br/><b>Имя:</b> {$fio}<br/><b>Телефон:</b> {$phone}<br/>";

    if (mail("contact@pr-seo.com.ua", $subject, $message, $headers)) {
        echo "";
    } else echo "Ошибка!";

?>