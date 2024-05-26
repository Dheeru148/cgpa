async function submitForm() {
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);
    const subject6 = parseInt(document.getElementById('subject6').value);

    const response = await fetch('/api/marks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject1, subject2, subject3, subject4, subject5, subject6 })
    });

    const result = await response.json();

    document.getElementById('totalMarks').innerText = `Total Marks: ${result.totalMarks}`;
    document.getElementById('cgpa').innerText = `CGPA: ${result.cgpa.toFixed(2)}`;
    document.getElementById('result').innerText = `Result: ${result.result}`;
}
