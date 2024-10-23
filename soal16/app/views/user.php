<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Detail</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1>User Detail</h1>
        <p>User ID: <?= htmlspecialchars($id); ?></p>
        <p>Name: <?= htmlspecialchars($user['name']); ?></p>
        <p>Email: <?= htmlspecialchars($user['email']); ?></p>
        <a href="/" class="btn btn-primary">Kembali</a>
    </div>
</body>
</html>
