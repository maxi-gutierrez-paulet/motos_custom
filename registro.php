<?php


// Configuración de la base de datos
$servername = "localhost";
$username = "root"; // Usuario de MySQL
$password = ""; // Contraseña de MySQL
$dbname = "BDCustom";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encriptar la contraseña

    // Preparar la consulta SQL para evitar inyecciones SQL
    $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)");
    if ($stmt === false) {
        die("Error en la preparación de la consulta: " . $conn->error);
    }

    // Vincular parámetros
    $stmt->bind_param("sss", $nombre, $email, $password);

    // Ejecutar la consulta y manejar errores
    try {
        if ($stmt->execute()) {
            echo "Registro exitoso. <a href='registro.html'>Volver al formulario</a>";
        }
    } catch (mysqli_sql_exception $e) {
        // Verificar si el error es por duplicado de correo electrónico
        if ($e->getCode() == 1062) { // Código de error para entradas duplicadas
            echo "Error: El correo electrónico ya está registrado. <a href='registro.html'>Intenta con otro correo</a>.";
        } else {
            echo "Error inesperado: " . $e->getMessage();
        }
    }

    // Cerrar la consulta preparada
    $stmt->close();
} else {
    echo "No se recibieron datos del formulario.";
}

// Cerrar conexión
$conn->close();
?>