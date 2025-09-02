<?php
// Database configuration
$servername = "localhost";
$username = "root";    // default username for XAMPP
$password = "";        // default password for XAMPP
$dbname = "myCareer";  // name of your database

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data from the table
$sql = "SELECT id_num, clg_name, web_link FROM arts";
$result = $conn->query($sql);

// Check if any results were returned and fetch data
if ($result->num_rows > 0) {
    // Output data for each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id_num"] . " - College Name: " . $row["clg_name"] . " - Website: <a href='" . $row["web_link"] . "' target='_blank'>" . $row["web_link"] . "</a><br>";
    }
} else {
    echo "No results found";
}

// Close the connection
$conn->close();
?>
