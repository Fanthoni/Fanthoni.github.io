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
    const response = await fetch(
      "https://portfolio-gpt-c5c8288ee3a6.herokuapp.com/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({ query: query }),
      }
    );
    const data = await response.json();
    document.getElementById("query-answer-container").innerText = "";
    typeWriter(document.getElementById("query-answer-container"), data.answer);
    document.getElementById("query-answer-container").className =
      "answer-present";
    return;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error:", error);
  }
}

function getRandomQuestion() {
  const questions = [
    "Who is Ferrel?",
    "What is Ferrel doing at the moment?",
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
