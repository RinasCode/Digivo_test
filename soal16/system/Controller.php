<?php

class Controller {
    protected function view($view, $data = []) {
        View::render($view, $data);
    }
}
