<?php
require '../system/Autoloader.php';


use App\Core; 

$core = new Core();

$core->get('user/{id}', 'UserController@show');

$core->run();
?>