<?php
namespace App;

class Core {
    protected $routes = [];

    public function get($uri, $controller) {
        $this->routes['GET'][$uri] = $controller;
    }

    public function run() {
        $uri = trim($_SERVER['REQUEST_URI'], '/');
        $method = $_SERVER['REQUEST_METHOD'];

        if (isset($this->routes[$method][$uri])) {
            list($controllerName, $methodName) = explode('@', $this->routes[$method][$uri]);
            $controller = "App\\Controllers\\$controllerName";
            $controller = new $controller();
            $controller->$methodName($this->getIdFromUri($uri));
        } else {
            http_response_code(404);
            echo '404 Not Found';
        }
    }

    protected function getIdFromUri($uri) {

        preg_match('/user\/(\d+)/', $uri, $matches);
        return isset($matches[1]) ? $matches[1] : null;
    }
}
