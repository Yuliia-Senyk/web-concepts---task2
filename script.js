function checkAnswers() {
    // user's answers
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    const q2Answers = document.querySelectorAll('input[name="q2"]:checked');
    const q3Answer = document.getElementById("street_name").value.trim();

    // correct answers
    const correctAnswers = {
        q1: "1996",
        q2: ["maybe", "probably", "really?"],
        q3: "Дмитрівська",
    };

    // clears answers
    const answersTable = document.getElementById("answers-container").querySelector("tbody");
    answersTable.innerHTML = "";

    function createTableRow(question, userAnswer, correctAnswer) {
        const row = document.createElement("tr");
        const questionCell = document.createElement("td");
        questionCell.textContent = question;
        const userAnswerCell = document.createElement("td");
        userAnswerCell.textContent = userAnswer;
        const correctAnswerCell = document.createElement("td");
        correctAnswerCell.textContent = correctAnswer;
        row.appendChild(questionCell);
        row.appendChild(userAnswerCell);
        row.appendChild(correctAnswerCell);
        answersTable.appendChild(row);
    }

    // checks the answers
    createTableRow("when KSE was founded?", q1Answer, correctAnswers.q1);

    const q2UserAnswers = Array.from(q2Answers).map((input) => input.value);
    const q2CorrectAnswers = correctAnswers.q2;
    const q2IsCorrect = q2CorrectAnswers.every((answer) => q2UserAnswers.includes(answer));
    createTableRow("is Tymofyi Brik the youngest rector in Ukraine?", q2IsCorrect ? "All answers are correct" : "Incorrect", q2CorrectAnswers);

    const q3CorrectAnswer = correctAnswers.q3;
    createTableRow("on what street was the first campus?", q3Answer, q3CorrectAnswer);

    // Display the answers table
    const answersContainer = document.getElementById("answers-container");
    answersContainer.style.display = "block";
}
