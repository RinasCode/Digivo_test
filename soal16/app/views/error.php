<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <title>Error</title>
</head>
<body>
<div class="container mt-5">
    <h1>Error <?= http_response_code() ?></h1>
    <p>Sorry, the page you are looking for does not exist.</p>
</div>
</body>
</html>
