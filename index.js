// /this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..

 

 const questions = [
    {
        question: "Which of the reagent is used to distinguish betwwen phenol and alcohols ?",
        optionA: "Anhydrous zinc chrolide",
        optionB: "Conc Sulphuric Acid",
        optionC: "sodium nitrite",
        optionD: "Iron(iii) chrolide",
        correctOption: "optionD"
    },

    {
        question: "5g of thorium was left to decay. Calculate the mass of thorium that remained after 2.5*10^10 years.(the half life of thorium is 1.4 *10^10 years).",
        optionA: "10g",
        optionB: "1.45g",
        optionC: "0.35g",
        optionD: "1.89g",
        correctOption: "optionB"
    },

    {
        question: "When an amine, Z was steam distilled at 98.6 degrees celcius and 760mmHg pressure, the distillate contained 25.5g of water and 7.4g of Z. Calculate the formula mass of Z. ( the vapour pressure of water at 98.6 degrees celcius is 720mmHg) ",
        optionA: "70.85",
        optionB: "30.4",
        optionC: "100",
        optionD: "94.02",
        correctOption: "optionD"
    },

    {
        question: "Of the following name/symbol combinations of elements, which one is WRONG?",
        optionA: "uranium/ U",
        optionB: "sulfur / S",
        optionC: "iron/ I",
        optionD: "nitrogen /N",
        correctOption: "optionC" 
    },

    {
        question: "Identify the INCORRECT statement",
        optionA: " Helium in a balloon: an element",
        optionB: " Paint: a mixture",
        optionC: "Mercury in a barometer; an element",
        optionD: "Tap water: a compound",
        correctOption: "optionD"
    },

    {
        question: "The formula weight of the compound, Al2(SO4)3 18H2O is:",
        optionA: "666.4g",
        optionB: "394.4g",
        optionC: "110900g",
        optionD: "561.2g",
        correctOption: "optionA"
    },

    {
        question: "What makes carbon such a unique element?",
        optionA: "Elemental carbon comes in two forms, diamond and graphite.",
        optionB: "Carbon forms four bonds, although the ground state configuration would predict the formation of fewer bonds",
        optionC: "To a greater extent than any other element, carbon can bond to itself to form straight chains, branched chains and rings.",
        optionD: "Carbon has two stable isotopes, carbon-12 and carbon-13.",
        correctOption: "optionC"
    },

    {
        question: "The hybridization of carbon atoms in alkanes is",
        optionA: " sp3",
        optionB: "sp2",
        optionC: "sp",
        optionD: "sp3d",
        correctOption: "optionA"
    },

    {
        question: "How many actual double bonds does the benzene ring possess?",
        optionA: "1 double bond",
        optionB: "2 double bond",
        optionC: "3 double bond",
        optionD: "None, carbon-carbon bonds in benzene are delocalized around the ring",
        correctOption: "optionD"
    },

    {
        question: `Para-xylene is the same as:`,
        optionA: "1,4-diethylbenzene",
        optionB: "1,2-dimethylbenzene",
        optionC: "1,3-dimethylbenzene",
        optionD: "1,4-dimethylbenzene",
        correctOption: "optionD"
    },

    {
        question: "Which of the following formulas represents an alkene?",
        optionA: "CH3CH2CH3",
        optionB: "CH3CH3",
        optionC: "CH3CH2CHCH2",
        optionD: "CH3CH2Cl",
        correctOption: "optionC"
    },

    {
        question: " Select the IUPAC name for: (CH3)2CHCH(OH)CH2C(CH3)3.",
        optionA: "2,5,5-trimethyl-3-hexanol",
        optionB: "1,1,4,4-pentamethylbutanol",
        optionC: "1,1-dimethylisopentanol",
        optionD: "none of these",
        correctOption: "optionA"
    },


    {
        question: "What alkaline earth metal is located in period 3?",
        optionA: "Li",
        optionB: "Na",
        optionC: "Ca",
        optionD: "Sr",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is classified as a metal?",
        optionA: "Ge",
        optionB: "As",
        optionC: "F",
        optionD: "V",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is a weak acid?",
        optionA: "HF",
        optionB: "H2SO4",
        optionC: "HNO3",
        optionD: "HCl",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following salts is insoluble?",
        optionA: "NH4Cl",
        optionB: "Ca(NO3)2",
        optionC: "BaCO3",
        optionD: "Zn(CH3COO)2",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following statements is TRUE?",
        optionA: "One mole of any acid will ionize completely in aqueous solution to produce one mole of H+ ions.",
        optionB: "Solutions of weak acids always have lower concentrations of H+ than solutions of strong acids.",
        optionC: "There are several common acids that are insoluble.",
        optionD: "All weak acids are insoluble.",
        correctOption: "optionB"
    },

    {
        question: "The precipitate formed when barium chloride is treated with sulfuric acid is _______ ",
        optionA: "BaS2O4",
        optionB: "BaSO3",
        optionC: "BaSO4",
        optionD: "BaSO2",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "What is the net ionic equation for the acid-base reaction that occurs when acetic acid and potassium hydroxide solutions are mixed?",
        optionA: "H+(aq) + OH-(aq)   H2O(l)",
        optionB: "H+(aq) + KOH(s)   K+(aq) + H2O(l)",
        optionC: "CH3COOH(aq) + OH-(aq)   CH3COO-(aq) + H2O(l)",
        optionD: "CH3COO-(aq) + H+(aq) + K+(aq) + OH-(aq)   K+(aq) + CH3COO-(aq) + H2O(l)",
        correctOption: "optionC"
    },

    {
        question: "Determine the oxidation number of carbon in K2CO3.",
        optionA: " 0",
        optionB: " +2",
        optionC: "some other value",
        optionD: "+4",
        correctOption: "optionD"
    },

    {
        question: "Which of the following statements is FALSE given the following net ionic equation?  H3PO4(aq) + 3OH-(aq)   PO43-(aq) + 3H2O(l)",
        optionA: " If all the water evaporated away, the salt remaining could possibly be Na3PO4.",
        optionB: "This could be the net ionic equation for H3PO4 reacting with Al(OH)3.",
        optionC: "This is classified as a neutralization reaction.",
        optionD: "The acid, H3PO4, is a weak electrolyte",
        correctOption: "optionB"
    },

    {
        question: "Which name/formula combination is WRONG?",
        optionA: "chlorous acid / HClO2",
        optionB: "copper(II) periodate / CuIO4",
        optionC: "potassium permanganate / KMnO4",
        optionD: "ammonium nitrate / NH4NO3",
        correctOption: "optionB"
    },

    {
        question: "Which name/formula combination is WRONG?",
        optionA: "acetate ion / CH3COO-",
        optionB: " nitrogen oxide / NO",
        optionC: "phosphorous acid / H3PO4",
        optionD: "calcium hypobromite / Ca(BrO)2",
        correctOption: "optionC"
    },

    {
        question: "Given that the Activity Series is: Na>Mg>Cu>Ag>Au, which one of the following answers represents the ions that would not be displaced from aqueous solution (reduced) by metallic magnesium?",
        optionA: "Cu2+",
        optionB: "Na+, Cu2+, Ag+ and Au+",
        optionC: "Na+",
        optionD: "Cu2+, Ag+ and Au+",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
