const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split file into rows
    const rows = data.trim().split('\n');
    
    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header row
    const headers = rows.shift().split(',');
    
    // Initialize a map to count students per field
    const studentGroups = {};
    let totalStudents = 0;

    // Iterate through each row (each student)
    rows.forEach((row) => {
      const studentInfo = row.split(',');
      if (studentInfo.length === headers.length) {
        const field = studentInfo[studentInfo.length - 1]; // Assume field is the last column
        const firstName = studentInfo[0];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        studentGroups[field].push(firstName);
        totalStudents++;
      }
    });

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log number of students per field and list the first names
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;