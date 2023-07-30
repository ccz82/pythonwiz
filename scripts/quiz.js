function generateQuestion(question, index) {
  const quizContainer = document.getElementById("quiz");
  questionElement = document.createElement("h1");
  questionElement.id = `${index}. ${question}`;
  questionElement.innerText = question;
  quizContainer.appendChild();
}

function generateContext(context) {
  const quizContextContainer = document.getElementById("quizContext");
  preElement = document.createElement("pre");
  codeElement = document.createElement("code");
  codeElement.classList.add("language-python");
  codeElement.innerText = context;
  preElement.appendChild(codeElement);
  quizContextContainer.appendChild(preElement);
}

function generateOptions(options) {
  const quizOptionsContainer = document.getElementById("quizOptions");
  for (const option of options) {
    optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.innerText = option;
    optionButton.onclick = (element) => element.target.value;
    quizOptionsContainer.appendChild(optionButton);
  }
}

let currentQuestionIndex = 0;

while (currentQuestionIndex != .length + 1) {
  question = [currentQuestionIndex].question
  generateQuestion()
}
