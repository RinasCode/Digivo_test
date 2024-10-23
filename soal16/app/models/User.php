<?php
namespace App\Models;

class User {
    private static $users = [
        1 => ['name' => 'John Doe', 'email' => 'john@example.com'],
        2 => ['name' => 'Jane Smith', 'email' => 'jane@example.com'],
    ];

    public static function find($id) {
        return isset(self::$users[$id]) ? self::$users[$id] : null;
    }
}
