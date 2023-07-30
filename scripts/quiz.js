function generateQuestion(question, code, index) {
  const questionContainer = document.getElementById("question");

  // Creates <h1>Index. What is the question?</h1>
  questionElement = document.createElement("h1");
  questionElement.innerText = `${index + 1}. ${question}`;
  questionContainer.appendChild(questionElement);

  // Creates <pre><code class="language-python"></code></pre>
  if (code) {
    const preElement = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.innerHTML = code;
    codeElement.className = "language-python";
    preElement.appendChild(codeElement);
    questionContainer.appendChild(preElement);

    return true;
  }
  return false;
}

function generateOptions(options) {
  const optionsContainer = document.getElementById("options");
  for (let option of options) {
    // Creates <button class="option"></button>
    optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.innerText = option;
    optionButton.addEventListener("click", (event) =>
      checkAnswer(option, event.target)
    ); // Call checkAnswer(option)
    optionsContainer.appendChild(optionButton);
  }
}

function nextQuestion() {
  // Clear previous question and options
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  const question = pythonQuestions[currentQuestionIndex].question;
  const code = pythonQuestions[currentQuestionIndex].code;
  const options = pythonQuestions[currentQuestionIndex].options;

  // Call Prism syntax highlighting if code block is rendered
  if (generateQuestion(question, code, currentQuestionIndex)) {
    Prism.highlightAll();
  }
  generateOptions(options);
}

function showResult() {
  // Clear question and options
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  // Show results
  const resultElement = document.getElementById("result");
  resultElement.innerText = `You scored ${score} out of ${pythonQuestions.length}!`;

  // Show retry button
  const retryButton = document.getElementById("retry");
  retryButton.style.display = "block";

  // Restart quiz if retry button clicked
  retryButton.addEventListener("click", () => {
    resultElement.innerText = "";
    score = 0;
    currentQuestionIndex = 0;
    retryButton.style.display = "none";
    nextQuestion();
  });
}

function checkAnswer(option, optionElement) {
  const answer = pythonQuestions[currentQuestionIndex].answer;
  if (option === answer) {
    optionElement.style.backgroundColor = "#134d13";
    score++; // Increment score if answer is correct
  } else {
    optionElement.style.backgroundColor = "#731105";
  }

  // Temporarily disable selecting options
  const optionButtons = document.getElementsByClassName("option");
  for (let optionButton of optionButtons) {
    optionButton.disabled = true;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < pythonQuestions.length) {
    // Show next button
    const nextButton = document.getElementById("next");
    nextButton.style.display = "block";

    // Move to next question when next button is clicked
    nextButton.addEventListener("click", () => {
      nextButton.style.display = "none";
      nextQuestion();
    });
  } else {
    showResult();
  }
}

const pythonQuestions = [
  {
    question: "What will be the output of the following Python code?",
    code: `
x = 10
y = 5
z = x + y
print(z)
    `,
    options: ["15", "105", "x + y", "Syntax Error"],
    answer: "15",
  },
  {
    question: "Which Python keyword is used to define a function?",
    code: "",
    options: ["def", "function", "define", "fun"],
    answer: "def",
  },
  {
    question: "What data type is the result of 3 + 5.0 in Python?",
    code: `
result = 3 + 5.0
    `,
    options: ["int", "float", "double", "str"],
    answer: "float",
  },
  {
    question:
      "Which loop is used to iterate over a sequence (e.g., list, tuple) in Python?",
    code: "",
    options: ["for", "while", "loop", "repeat"],
    answer: "for",
  },
  {
    question: "What is the correct way to comment a single line in Python?",
    code: "",
    options: [
      "/* Comment goes here */",
      "// Comment goes here",
      "# Comment goes here",
      "<!-- Comment goes here -->",
    ],
    answer: "# Comment goes here",
  },
  {
    question: "Which method is used to get the length of a list in Python?",
    code: "",
    options: ["length()", "size()", "count()", "len()"],
    answer: "len()",
  },
  {
    question: "What is the output of the following Python code?",
    code: `
x = 7
if x > 5:
    print("Hello")
else:
    print("Hi")
    `,
    options: ["Hello", "Hi", "Hello\nHi", "Hi\nHello"],
    answer: "Hello",
  },
  {
    question: "What will the following code print?",
    code: `
print(5 > 3 and 10 < 20)
    `,
    options: ["True", "False", "Error", "None"],
    answer: "True",
  },
  {
    question: "Which Python function is used to read input from the user?",
    code: "",
    options: ["get_input()", "read_input()", "input()", "user_input()"],
    answer: "input()",
  },
  {
    question:
      "What is the correct way to check if a key 'name' exists in a dictionary 'person'?",
    code: `
person = {"name": "John", "age": 30}
    `,
    options: [
      "if 'name' in person:",
      "if 'name' exists person:",
      "if person contains 'name':",
      "if person['name']:",
    ],
    answer: "if 'name' in person:",
  },
  {
    question: "What is the result of 2 * 3 ** 2?",
    code: `
result = 2 * 3 ** 2
    `,
    options: ["18", "36", "12", "9"],
    answer: "18",
  },
  {
    question: "What will be the output of the following Python code?",
    code: `
numbers = [1, 2, 3, 4, 5]
print(numbers[2])
    `,
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question:
      "In Python, how do you round a floating-point number to the nearest integer?",
    code: "",
    options: ["round()", "floor()", "ceil()", "int()"],
    answer: "round()",
  },
  {
    question: "What is the output of the following Python code?",
    code: `
print("Hello, " + "World!")
    `,
    options: ["Hello, ", "World!", "Hello, World!", "Hello World!"],
    answer: "Hello, World!",
  },
  {
    question:
      "Which Python conditional statement is used to check multiple conditions?",
    code: "",
    options: ["else", "and", "elif", "or"],
    answer: "elif",
  },
  {
    question: "What will be the output of the following Python code?",
    code: `
x = 5
y = 2
print(x / y)
    `,
    options: ["2.5", "2", "2.0", "2.2"],
    answer: "2.5",
  },
  {
    question: "Which method is used to add an element at the end of a list?",
    code: "",
    options: ["append()", "add()", "push()", "insert()"],
    answer: "append()",
  },
  {
    question: "What is the correct way to define a tuple in Python?",
    code: "",
    options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>"],
    answer: "(1, 2, 3)",
  },
  {
    question: "In Python, how do you check the type of a variable?",
    code: "",
    options: ["typeof(x)", "type(x)", "x.type()", "x.getType()"],
    answer: "type(x)",
  },
  {
    question: "What will be the output of the following Python code?",
    code: `
x = 3
y = 4
print(x + y * 2)
    `,
    options: ["14", "11", "10", "9"],
    answer: "11",
  },
  {
    question:
      "Which Python function is used to find the maximum value in a list?",
    code: "",
    options: ["max()", "maximum()", "largest()", "top()"],
    answer: "max()",
  },
  {
    question: "What is the output of the following Python code?",
    code: `
print(3 != 4)
    `,
    options: ["True", "False", "Error", "None"],
    answer: "True",
  },
  {
    question: "Which Python method is used to remove an element from a list?",
    code: "",
    options: ["remove()", "pop()", "delete()", "discard()"],
    answer: "remove()",
  },
  {
    question: "What will be the output of the following Python code?",
    code: `
x = 10
y = 3
z = x % y
print(z)
    `,
    options: ["1", "0", "3", "10"],
    answer: "1",
  },
  {
    question:
      "Which loop is used to repeat a block of code as long as the condition is true?",
    code: "",
    options: ["for", "while", "do-while", "repeat"],
    answer: "while",
  },
  {
    question: "In Python, how do you convert a string 'num_str' to an integer?",
    code: `
num_str = "42"
    `,
    options: [
      "int(num_str)",
      "num_str.to_int()",
      "parse_int(num_str)",
      "num_str.convert_int()",
    ],
    answer: "int(num_str)",
  },
  {
    question: "What is the output of the following Python code?",
    code: `
x = 2
y = 5
print(x ** y)
    `,
    options: ["7", "10", "25", "32"],
    answer: "32",
  },
  {
    question: "Which Python method is used to sort a list in ascending order?",
    code: "",
    options: ["sort()", "order()", "ascending()", "arrange()"],
    answer: "sort()",
  },
  {
    question: "What will be the output of the following Python code?",
    code: `
x = 10
y = 2
z = x / y
print(z)
    `,
    options: ["5", "10", "2.0", "0.5"],
    answer: "5.0",
  },
  {
    question:
      "Which Python function is used to print a message to the console?",
    code: "",
    options: ["print()", "display()", "show()", "log()"],
    answer: "print()",
  },
  {
    question: "What is the output of the following Python code?",
    code: `
x = [1, 2, 3]
y = x
y.append(4)
print(x)
    `,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "[1, 2, 3, [4]]"],
    answer: "[1, 2, 3, 4]",
  },
];

let currentQuestionIndex = 0;
let score = 0;

nextQuestion();
