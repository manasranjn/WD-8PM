const fs = require('fs').promises
const path = require('path')

// console.log(fs);

//! Define a folder and file path
const folderPath = path.join(__dirname, "asyncFolder")
const filePath = path.join(folderPath, "newFile.pdf")
// console.log(folderPath);
// console.log(filePath);

//* Step-1: Create a directory if it doesn't exists
async function createFolder() {
    try {
        await fs.access(folderPath)
    }
    catch {
        await fs.mkdir(folderPath)
        console.log("Folder got created");
    }
}

// createFolder()

//* Step-2: Create and write to a file
async function writeFile() {
    try {
        await fs.writeFile(filePath, "This is a new file\n")
        console.log("File created");
    }
    catch (err) {
        console.log(err);
    }
}

// writeFile()

//* Step-3: Append or add multiple content
async function appendToFile() {
    try {
        await fs.appendFile(filePath, "This is a new line\n")
    }
    catch (err) {
        console.log(err);
    }
}

// appendToFile()

//* Step-4: Read the file content
async function readFile() {
    try {
        const content = await fs.readFile(filePath, "utf-8")
        console.log(content);
    }
    catch (err) {
        console.log(err);
    }
}

// readFile()

//* Step-5: Delete the file
async function deleteFile() {
    try {
        await fs.unlink(filePath)
        console.log("File deleted");
    }
    catch (err) {
        console.log(err);
    }
}

// deleteFile()