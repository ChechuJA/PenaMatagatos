<?php
/**
 * File Upload Handler for Peña Matagatos
 * Handles file uploads from the contact form
 */

// Set CORS headers to allow requests from the same domain
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST method allowed']);
    exit;
}

// Configuration
$uploadDir = __DIR__ . '/documents/';
$maxFileSize = 5 * 1024 * 1024; // 5MB
$allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'txt', 'jpg', 'jpeg', 'png', 'gif'];

// Ensure upload directory exists
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$response = [
    'success' => false,
    'message' => '',
    'uploadedFiles' => [],
    'errors' => []
];

try {
    // Check if files were uploaded
    if (!isset($_FILES['files']) || empty($_FILES['files']['name'][0])) {
        $response['message'] = 'No files were uploaded';
        echo json_encode($response);
        exit;
    }

    $files = $_FILES['files'];
    $fileCount = count($files['name']);

    for ($i = 0; $i < $fileCount; $i++) {
        // Skip empty file slots
        if (empty($files['name'][$i])) {
            continue;
        }

        $fileName = $files['name'][$i];
        $fileTmpPath = $files['tmp_name'][$i];
        $fileSize = $files['size'][$i];
        $fileError = $files['error'][$i];

        // Check for upload errors
        if ($fileError !== UPLOAD_ERR_OK) {
            $response['errors'][] = "Error uploading file '{$fileName}': Upload error code {$fileError}";
            continue;
        }

        // Validate file size
        if ($fileSize > $maxFileSize) {
            $response['errors'][] = "File '{$fileName}' is too large. Maximum size is 5MB.";
            continue;
        }

        // Validate file extension
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
        if (!in_array($fileExtension, $allowedExtensions)) {
            $response['errors'][] = "File '{$fileName}' has an invalid extension. Allowed: " . implode(', ', $allowedExtensions);
            continue;
        }

        // Generate unique filename to prevent conflicts
        $timestamp = date('Y-m-d_H-i-s');
        $uniqueFileName = $timestamp . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $fileName);
        $destinationPath = $uploadDir . $uniqueFileName;

        // Move uploaded file to destination
        if (move_uploaded_file($fileTmpPath, $destinationPath)) {
            $response['uploadedFiles'][] = [
                'originalName' => $fileName,
                'savedAs' => $uniqueFileName,
                'size' => $fileSize,
                'path' => 'documents/' . $uniqueFileName
            ];
        } else {
            $response['errors'][] = "Failed to save file '{$fileName}'";
        }
    }

    // Set response status based on results
    if (!empty($response['uploadedFiles'])) {
        $response['success'] = true;
        $uploadCount = count($response['uploadedFiles']);
        $response['message'] = "Successfully uploaded {$uploadCount} file(s)";
        
        if (!empty($response['errors'])) {
            $errorCount = count($response['errors']);
            $response['message'] .= " with {$errorCount} error(s)";
        }
    } else {
        $response['message'] = 'No files were successfully uploaded';
    }

} catch (Exception $e) {
    $response['message'] = 'Server error: ' . $e->getMessage();
    $response['errors'][] = $e->getMessage();
}

echo json_encode($response);
?>