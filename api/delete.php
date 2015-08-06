<?php

$index = file_get_contents("php://input");

$database = (array)json_decode(file_get_contents("database.json"));
unset($database[$index]);

file_put_contents("database.json", json_encode(array_values($database)));
