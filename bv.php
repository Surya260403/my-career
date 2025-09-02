<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Data</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    
    <div class="row">

    <?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myCareer";


    $conn = new mysqli($servername, $username, $password, $dbname);


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT * FROM bv";
    $result = $conn->query($sql);

    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<div class="col-md-4 mb-4">';
            echo '<div class="card" style="width: 100%;">';
            echo '<div class="card-body">';
            echo '<h5 class="card-title">' . $row["clg_name"] . '</h5>';
            echo '<p class="card-text">Click below to visit the website:</p>';
            echo '<a href="' . $row["web_link"] . '" target="_blank" class="card-link">Visit Website</a>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }
    } else {
        echo "<p>No results found</p>";
    }

    
    $conn->close();
    ?>

    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
