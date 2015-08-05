<?php
require_once __DIR__.'/vendor/autoload.php';
$app = new Silex\Application();
$app["debug"] = true;

$app->get('/js/app.js', function(){
    return "ok ";
});

$app->get('/', function() use($app) {
    include "index.html";
    return "";
});

$app->run();
