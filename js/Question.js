class Question {
    constructor() {
        var logicSetQuestions1 = ["What has a face and two hands but no legs?", "What is the easiest way to double money?", "What has a thumb and four fingers but is not alive?", "What has to be broken before you can use it?"];
        var logicSetAnswers1 = ["A clock", "Put it in front of the mirror of course!", "A glove", "An egg"];
        var logicSetOptions1 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var logicSetQuestions2 = ["Logical question 1", "log quest2", "log q3", "log q4"]
        var logicSetAnswers2 = ["answer1", "answer2", "answer3", "answer4"]
        var logicSetOptions2 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var logicSetQuestions3 = ["Logical question 1", "log quest2", "log q3", "log q4"]
        var logicSetAnswers3 = ["answer1", "answer2", "answer3", "answer4"]
        var logicSetOptions3 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var logicSetQuestions4 = ["Logical question 1", "log quest2", "log q3", "log q4"]
        var logicSetAnswers4 = ["answer1", "answer2", "answer3", "answer4"]
        var logicSetOptions4 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var logicalGrade1 = [logicSetQuestions1, logicSetAnswers1, logicSetOptions1];
        var logicalGrade2 = [logicSetQuestions2, logicSetAnswers2, logicSetOptions2];
        var logicalGrade3 = [logicSetQuestions3, logicSetAnswers3, logicSetOptions3];
        var logicalGrade4 = [logicSetQuestions4, logicSetAnswers4, logicSetOptions4];

        var logical = [logicalGrade1, logicalGrade2, logicalGrade3, logicalGrade4];

        var mathQuestions1 = ["mathquestion 1", "Mathquest2", "math q3", "math q4"];
        var mathAnswers1 = ["answer1", "answer2", "answer3", "answer4"];
        var mathOptions1 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var mathQuestions2 = ["mathquestion 1", "mathquest2", "mathq3", "mathq4"]
        var mathAnswers2 = ["answer1", "answer2", "answer3", "answer4"]
        var mathOptions2 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var mathQuestions3 = ["math question 1", "math quest2", "math q3", "math q4"]
        var mathAnswers3 = ["answer1", "answer2", "answer3", "answer4"]
        var mathOptions3 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var mathQuestions4 = ["math question 1", "math quest2", "math q3", "math q4"]
        var mathAnswers4 = ["answer1", "answer2", "answer3", "answer4"]
        var mathOptions4 = [["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"], ["option1", "option2", "option3", "option4"]];

        var mathGrade1 = [mathQuestions1, mathAnswers1, mathOptions1];
        var mathGrade2 = [mathQuestions2, mathAnswers2, mathOptions2];
        var mathGrade3 = [mathQuestions3, mathAnswers3, mathOptions3];
        var mathGrade4 = [mathQuestions4, mathAnswers4, mathOptions4];

        var math = [mathGrade1, mathGrade2, mathGrade3, mathGrade4];
        this.subject = [logical, math];

        this.currentMath;
        this.currentLogic;
    }

    getCurrentMath() {
        database.ref("players/" + player.userId + "/currentMath").on("value", (data) => {
            this.currentMath = data.val();
        });

    }

    getCurrentLogic() {
        database.ref("players/" + player.userId + "/currentLogic").on("value", (data) => {
            this.currentLogic = data.val();
        });

    }

    updateCurrentLogic(questionNo) {
       database.ref("players/"+player.userId).update({
           currentLogic:questionNo
       });
    }

    updateCurrentMath(questionNo) {
        database.ref("players/"+player.userId).update({
            currentMath:questionNo
        });
     }
}