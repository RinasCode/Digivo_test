<?php
namespace App\Controllers;

use App\Models\User;

class UserController {
    public function show($id) {
        $user = User::find($id);
        
        if ($user === null) {
            http_response_code(404);
            echo '404 User Not Found';
            return;
        }

        include '../app/Views/user.php';
    }
}
