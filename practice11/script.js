const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 },
];
  
function calculateAverage() {
    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    const averageMarks = totalMarks / students.length;
  
    let grade = '';
    if (averageMarks < 60) {
      grade = 'F';
    } else if (averageMarks < 70) {
      grade = 'D';
    } else if (averageMarks < 80) {
      grade = 'C';
    } else if (averageMarks < 90) {
      grade = 'B';
    } else {
      grade = 'A';
    }
  
    alert(`Average Marks: ${averageMarks}
    Grade: ${grade}`);
}

document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Enter key was pressed');
    }
});

document.getElementById('myElement').addEventListener('dblclick', function() {
    alert('Element was double-clicked!');
});

let progress = 0;

function updateProgress(value) {
    progress += value;
    if (progress > 100) progress = 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function fe1n() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');
        } else if (i % 3 === 0) {
          console.log('Fizz');
        } else if (i % 5 === 0) {
          console.log('Buzz');
        } else {
          console.log(i);
        }
    }
}