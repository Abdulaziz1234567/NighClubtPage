<?
  //1963636171:AAExtjRBKxUGucK7Ans1vJ4hJm355y0i_3k
  //https://api.telegram.org/bot1963636171:AAExtjRBKxUGucK7Ans1vJ4hJm355y0i_3k/getUpdates
$name = $_POST['user_name'];
$number = $_POST['user_number'];
$email = $_POST['user_email'];
$numorder = $_POST['user_order'];
$token = '1963636171:AAExtjRBKxUGucK7Ans1vJ4hJm355y0i_3k';
$chat_id = '-571721863';
if ($numorder > 10) {
    $numorder = Null;
}
$arr = array(
    'Имя пользователя:' => $name,
    'Телефон:' => $number,
    'Email:' => $email,
    'Сколько:' => $numorder
);

foreach ($arr as $key => $value) :
    $text .= $key . $value . "%0A";
endforeach;

$telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_emode=html&text={$text}", "r");
if ($telegram) {
    header('Location: menu.html');
} else {
    echo "ERROR";
}
?>