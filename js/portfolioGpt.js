GPT_URL = "https://portfolio-gpt-c5c8288ee3a6.herokuapp.com";

// Wake up the server
window.onload = async function wakeUpServer() {
  try {
    const response = await fetch(GPT_URL);
    return;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Via send button click
async function askResume() {
  const query = document.getElementById("resume-query-textbox").value;

  function typeWriter(typingTextElement, text) {
    let i = 0;
    for (let char of text) {
      setTimeout(() => {
        typingTextElement.innerHTML += char;
      }, 25 * i);
      i++;
    }
  }

  try {
    document.getElementById("send-question").className = "fas fa-hourglass";
    const response = await fetch(`${GPT_URL}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({ query: query }),
    });
    const data = await response.json();

    if (data.answer) {
      document.getElementById("send-question").className = "fas fa-hourglass";
      document.getElementById("query-answer-container").innerText = "";
      typeWriter(
        document.getElementById("query-answer-container"),
        data.answer
      );
      document.getElementById("query-answer-container").className =
        "answer-present";
      setTimeout(() => {
        document.getElementById("send-question").className =
          "fa fa-paper-plane";
      }, data.answer.length * 25);
    }

    return;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error:", error);
  }
}

// Via enter key press
async function askResumeViaEnter(event) {
  if (event.key === "Enter") {
    await askResume();
  }
}

// Get random questions
function getRandomQuestion() {
  const questions = [
    "Who is Ferrel?",
    "How many years of JS experience does Ferrel have?",
    "What kind of technologies does Ferrel work with?",
    "What's Ferrel's current job?",
    "Where did Ferrel complete his education?",
    "How many years of experience does Ferrel have in the tech industry?",
    "What are some of Ferrel's key achievements at his previous job?",
    "What programming languages does Ferrel know?",
    "Is Ferrel experienced with front-end or back-end development?",
    "What databases does Ferrel have experience with?",
    "What frameworks has Ferrel worked with?",
    "Does Ferrel have experience with cloud services?",
  ];
  document.getElementById("resume-query-textbox").value =
    questions[Math.floor(Math.random() * questions.length)];
}
