<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "redux_project_app";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

function projects($conn){
	$sql = "SELECT * FROM projects";
	$result = $conn->query($sql);
	
	$projects = [];
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$projects[] = $row; 
		}
	} 
	return $projects;
}

function project($conn, $id){
	$sql = "SELECT * FROM projects WHERE id=".$id;
	$result = $conn->query($sql);
	return $result->fetch_assoc();
}

function addProject($conn, $title, $category){
	$sql = "INSERT INTO projects (title, category) VALUES ('".$title."', '".$category."')";

	if ($conn->query($sql) === TRUE) {
		return "New Project created successfully";
	} else {
		return "Error: " . $sql . "<br>" . $conn->error;
	}	
}

function editProject($conn, $title, $category, $id){
	$sql = "UPDATE projects SET title='".$title."', category='".$category."' WHERE id=".$id;

	if ($conn->query($sql) === TRUE) {
		return "New Project updated successfully";
	} else {
		return "Error: " . $sql . "<br>" . $conn->error;
	}	
}

function deleteProject($conn, $id){
	$sql = "DELETE FROM projects WHERE id=".$id;

	if ($conn->query($sql) === TRUE) {
		return "Project deleted successfully";
	} else {
		return "Error deleting record: " . $conn->error;
	}
}

if(isset($_GET['action']) && $_GET['action'] == 'add'){
	$title 		= $_GET['title'];
	$category 	= $_GET['category'];
	if($title != ''){
		$result = addProject($conn, $title, $category);
		echo json_encode(['result' => $result]);
		die();	
	}
	echo json_encode(['result' => 'Please insert title.']);	
	die();
}

if(isset($_GET['action']) && $_GET['action'] == 'edit'){
	$title = $_GET['title'];
	$category 	= $_GET['category'];
	$id = $_GET['id'];
	if($title != '' && $id > 0){
		$result = editProject($conn, $title, $category, $id);
		echo json_encode(['result' => $result]);
		die();	
	}
	echo json_encode(['result' => 'Please insert title.']);	
	die();
}

if(isset($_GET['action']) && $_GET['action'] == 'delete'){
	$id = $_GET['id'];
	if($id > 0){
		$result = deleteProject($conn, $id);
		echo json_encode(['result' => $result]);
		die();	
	}
}

if(isset($_GET['action']) && $_GET['action'] == 'view'){
	$id = $_GET['id'];
	if($id > 0){
		$result = project($conn, $id);
		echo json_encode(['result' => $result]);
		die();	
	}
}


$projects = projects($conn);
echo json_encode(['result' => $projects]);
die();



?>