<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$database = json_decode(file_get_contents("database.json"));
$database[] = (object)$request;

file_put_contents("database.json", json_encode($database));
