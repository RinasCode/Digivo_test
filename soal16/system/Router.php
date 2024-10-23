<?php
class Router {
    private $routes = [];

    public function get($route, $controllerMethod) {
        $this->routes['GET'][$route] = $controllerMethod;
    }

    public function post($route, $controllerMethod) {
        $this->routes['POST'][$route] = $controllerMethod;
    }

    public function resolve($uri, $method) {
        foreach ($this->routes[$method] as $route => $controllerMethod) {
            $pattern = preg_replace('/{(\w+)}/', '(\d+)', $route);
            if (preg_match('#^' . $pattern . '$#', $uri, $matches)) {
                array_shift($matches); 
                return $controllerMethod(...$matches);
            }
        }
        throw new Exception('Route not found', 404);
    }
}
