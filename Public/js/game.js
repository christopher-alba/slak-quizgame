// ==============QUESTIONS=============


    
  let start = document.getElementById("startGame");
    if(start) {
      start.addEventListener('click', () => {
        startGame()
        console.log("eekeke")
      })
    }

    let nextQ = document.getElementById("nextQ")
    if (nextQ) {
        nextQ.addEventListener('click', () => {
            
            checkAnswer()
            uncheckedRadioButton()
            if (currentQuestion === 20) {
                endGame()
            }
        })
    }
    

    // The page is fully loaded
    const qAndA = [ 
      {
          question: 'what is the definition of JSON?',
            a: 'Javascript Object Notation',
            b: 'Java Surrounding Operator Notation',
            c: 'Javascript Online Narrator',
            d: 'Java Sending Opressor Notation',
            answer: 'Javascript Object Notation'
        },
        {
            question: 'how would you style a content without the use of CSS? ',
              a: "<div class='plzWork' stylers=' background-color: pink' '></div>", 
              b: "<div class='plzWork' styling=' background-color: bisque' '></div>",
              c: "<div class='plzWork' styles=' background-color: indigo' '></div>",
              d: "<div class='plzWork' style=' background-color: honeydew' '></div>",
              answer: "<div class='plzWork' style=' background-color: honeydew' '></div>"
        },
        {
          question: 'are you able to trim armor yourself in Runescape?',
            a: 'Yes, if you have a high enough skill level you will be able to achieve this',
            b: 'It does not even exist!',
            c: 'No you can not trim the armor yourself but you are able to buy it from other players or find it from treasures',
            d: 'As long as you  give the person who is trimming it money, they are able to glitch the game so that you are able to trim it',
            answer: 'No you can not trim the armor yourself but you are able to buy it from other players or find it from treasures'
        },
        {
          question: 'What is the proper way to install an npm dependecy globally?',
            a: 'npm i --G',
            b: 'npm i -globally ',
            c: 'npm install -g',
            d: 'npm lnstalI -g',
            answer: 'npm install -g'
        },
        {
          question: 'from a scale of 1 - 10 what is your favourite shade of the color black?',
            a: 'Why is this a question?',
            b: 'Who in their mind would think of a question like this?',
            c: 'I think the person who wrote this question is a very smart person',
            d: 'Will this count towards the point system?',
            answer: 'I think the person who wrote this question is a very smart person'
        }, // Lucas Question top
        {
          question: 'What is the time complexity of for(let i = 0; i < array.length; i++){ console.log(array[i])} ?',
          a: 'very complicated',
          b: 'n',
          c: 'array.length',
          d: 'stop using for loops Chris',
          answer: 'n'
        },
        {
          question: "let obj = { name: vayne } -> let newObj = obj -> newObj.name = 'ashe' -> console.log(obj.name) . What is the output of the console.log? ",
          a: 'ashe',
          b: 'Shen Yue is the best girl',
          c: 'vayne',
          d: "{ name: 'vayne'}",
          answer: 'ashe'
        },
        {
          question: 'margin: 0 auto 0 auto; In CSS what is this type of values notation called?',
            a: 'clockwise notation',
            b: 'anti-clockwise notation',
            c: 'listing',
            d: 'follow Chris on instagram @ https://www.instagram.com/alba.sy.chris/',
            answer: 'clockwise notation'
        },
        {
          question:'How do you stop: let timer = setInterval(() => { console.log("hello")}, 100)?',
            a:'stopInterval(timer)',
            b:'kys(timer)',
            c:'clearInterval(timer)',
            d:'timer.clearInterval()',
            answer:'clearInterval(timer)'
        },
        {
          question: "Who is Chris' favourite girl?",
            a: 'Shen Yue',
            b: 'Asuna',
            c: 'his mum',
            d: 'Enori',
            answer: 'his mum'
        },
      
        // Raymond's questions
        {
          question: 'What is a templating engine?',
            a: 'An engine that can manipulate your HTML code from server', 
            b: 'An engine that can manipulate your templates from server',
            c: 'An engine that can manipulate your cookies from server',
            d: 'An engine that can manipulate your JavaScript code from server',
            answer: 'An engine that can manipulate your HTML code from server'
        },
        {
          question: 'Which of the following is NOT an npm command?',
            a: 'start',
            b: 'help',
            c: 'logout',
            d: 'dev',
            answer: 'dev'
        },
        {
          question: 'What is the function of JSON.parse()?',
            a: 'You mean Jason, learn how to spell!',
            b: 'Accepts a JSON string as a parameter, and returns the corresponding JavaScript object',
            c: 'Accepts an object as a parameter, and returns the equivalent JSON string form',
            d: 'Accepts a JSON string as an object, and returns the equivalent corresponding JavaScript object form',
            answer: 'Accepts a JSON string as a parameter, and returns the corresponding JavaScript object'
        },
        {
          question: 'What is a font stack?',
            a: 'A stack of font',
            b: 'A list of fonts in the CSS font-family declaration',
            c: 'A font that stacks',
            d: 'A list of stacks in the font-family declaration',
            answer: 'A list of fonts in the CSS font-family declaration'
        },
        {
          question: 'What is the purpose of a <script> tag?',
            a: 'To import local script',
            b: 'To import external script',
            c: 'To define a client-side JavaScript',
            d: 'All of the above',
            answer: 'All of the above'
        },
      
          //Matt Questions Top
          {
            question: 'Which of these is not a Dev Dependency?',
              a: 'Express', 
              b: 'Jest',
              c: 'Supertest',
              d: 'Nodemon',
              answer: 'Express'
          },
          {
            question: 'If you wanted to get the element at index 5 of an array what would be the best function to use?',
              a: '.map()',
              b: '.find()',
              c: '.filter()',
              d: '.find()',
              answer: '.find()'
          },
          {
            question: 'What prefix do you need to use in CSS when applying rules to elements with ID tags?',
              a: '.',
              b: '$',
              c: '#',
              d: '&',
              answer: '#'
          },
          {
            question: 'What does UTF-8 stand for?',
              a: '8-bit Unicode Transformation Format',
              b: 'Ultimate Fighting Tournament 8',
              c: 'User Transmitted Formatting 8',
              d: 'Universal Text Format 8',
              answer: '8-bit Unicode Transformation Format'
          },
          {
            question: 'The heading tag in HTML has several variants, starting with <h1> being the largest. How many total are there?',
              a: '4',
              b: '5',
              c: '6',
              d: '7',
              answer: '6'
          }
      ]

      console.log(qAndA)
    // ===============Game=Data===========
      let gameData = {
        player: {
          name: "Player",
          score: 0,
        },
        leaderboard: [
          // include leaderboard info here (EMILY NEEDS TO BE 1ST!)
          {
            name:"Emily", 
            score: 25
          },
          {
            name: "Don",
            score: 19
          },
          {
            name: "JV",
            score: 18.5
          },
          {
            name: "JO$EPH",
            score: 16
          },
          {
            name:"Lane",
            score: 15
          },
        ],
      }
    // ===================THE=LOGIC=======================
    let currentQuestion = 0
    let score = gameData.player.score
    let answer
    
    function uncheckedRadioButton () {
      document.getElementById("radioButtonA").checked = false
      document.getElementById("radioButtonB").checked = false
      document.getElementById("radioButtonC").checked = false
      document.getElementById("radioButtonD").checked = false
      answer = null
    }
    
    function updateAnswer(value){
        answer = value.value
    }
    function updateLeaderboard(){
        gameData.leaderboard.push(gameData.player)
        let finalPlayerIndex = gameData.leaderboard.length - 1
        let mainContainer = document.createElement("div")
        mainContainer.classList.add("mainCont")
        let playerScoreContainer = document.createElement("div")
        playerScoreContainer.classList.add("playerScoreCont")
        let playerScore = document.createElement("p")
        playerScore.innerText = gameData.leaderboard[finalPlayerIndex].score
        playerScoreContainer.appendChild(playerScore)
        let playerNameContainer = document.createElement("div")
        playerNameContainer.classList.add("playerNameCont")
        let playerName= document.createElement("p")
        playerName.innerText = 'Player'
        playerNameContainer.appendChild(playerName)


        mainContainer.appendChild(playerNameContainer)
        mainContainer.appendChild(playerScoreContainer)
      
        leaderboard.appendChild(mainContainer)
    }
    function initializeLeaderBoard(){
       
        let leaderboard = document.getElementsByClassName("leaderboard")[0]
        for(let i = 0; i < gameData.leaderboard.length; i++){
            let mainContainer = document.createElement("div")
            mainContainer.classList.add("mainCont")
            let playerScoreContainer = document.createElement("div")
            playerScoreContainer.classList.add("playerScoreCont")
            let playerScore = document.createElement("p")
            playerScore.innerText = gameData.leaderboard[i].score
            playerScoreContainer.appendChild(playerScore)
            let playerNameContainer = document.createElement("div")
            playerNameContainer.classList.add("playerNameCont")
            let playerName= document.createElement("p")
            playerName.innerText = gameData.leaderboard[i].name
            playerNameContainer.appendChild(playerName)


            mainContainer.appendChild(playerNameContainer)
            mainContainer.appendChild(playerScoreContainer)
          
            leaderboard.appendChild(mainContainer)
        }
    }
    function displayScore(){
        console.log("Score is: " + score);
        
        document.getElementById("score").innerText = `Score: ${score}`
    }
    function updateScore(){
        score++
    }
    
    function checkAnswer() {
        console.log(qAndA[currentQuestion]);
        console.log("correct Answer: " + qAndA[currentQuestion -1].answer );
        console.log("Answer: " + answer);
        console.log(qAndA[currentQuestion - 1].answer.localeCompare(answer))
        
        if (qAndA[currentQuestion - 1].answer === answer) { 
            updateScore()
            displayScore()

            console.log("Answer correct");
        } 

        changeQuestion()
    }

    function changeQuestion(){
        let questionDisplay = document.getElementById("question")

        let questionObj = qAndA[currentQuestion]
        console.log(questionObj);
        console.log(currentQuestion)
        
        // This Displays The Questions
        questionDisplay.innerText = questionObj.question

        // set value of inputs 
          document.getElementById("radioButtonA").value= questionObj.a
          document.getElementById("radioButtonB").value= questionObj.b
          document.getElementById("radioButtonC").value= questionObj.c
          document.getElementById("radioButtonD").value= questionObj.d
          
        // This displays the Answers
          document.getElementById("a").innerText = questionObj.a
          document.getElementById("b").innerText = questionObj.b
          document.getElementById("c").innerText = questionObj.c
          document.getElementById("d").innerText = questionObj.d

          // Goes to next Question
            currentQuestion++
    }
    setTimeout(function () {
        changeQuestion()
        displayScore()
        initializeLeaderBoard()
    }, 500)
    
    
    function startGame(){
        changeQuestion()
    }
    
    function endGame(){

        console.log("testing");
        
        updateLeaderboard()
        
        // Add obj containing name and score to gameData
    }
    
  
    // ===================

  