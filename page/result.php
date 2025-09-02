<?php
// Database connection
$host = 'localhost';
$db = 'mycareer';
$user = 'root';
$pass = '';
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get table name from AJAX request
$table = $_POST['table'] ?? '';

// Sanitize the table name to prevent SQL injection
$allowedTables = ['arts', 'science', 'commerce', 'voc', 'sport'];  // Allowed table names
if (!in_array($table, $allowedTables)) {
    die("Invalid table name.");
}

// Query to fetch data from the selected table
$sql = "SELECT crs_name FROM " . $table;
$result = $conn->query($sql);

// Generate HTML output
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        echo " $row[clg_name] ";
    }
    echo "</table>";
} else {
    echo "No data found.";
}

$conn->close();
?>
