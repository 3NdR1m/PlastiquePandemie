QUnit.module("quiz.js", function( hooks )
{   // Do before all tests; declare tested objects
    hooks.before( function() {
        questionsQuiz = [
            {
                question: "sampleQuestion0",
                lienReponse: "link1",
                indexBonneReponse: 1,
                choixReponse: ["a", "b", "c", "d"]
            },
            {
                question: "sampleQuestion1",
                lienReponse: "link1",
                indexBonneReponse: 3,
                choixReponse: ["e", "f", "g", "h"]
            },
            {
                question: "sampleQuestion2",
                lienReponse: "link2",
                indexBonneReponse: -6,
                choixReponse: ["i", "j", "k", "l"]
            },
            {
                question: "sampleQuestion3",
                lienReponse: "link3",
                indexBonneReponse: 0,
                choixReponse: ["m", "n", "o", "p"]
            }
        ]
        totalPointage = 0;
        noQuestion = 0;

        var hookTotalPoints = document.createElement("p");
        hookTotalPoints.setAttribute("id", "totalPoints");
        document.body.appendChild(hookTotalPoints);

        var hookTotalQuestions = document.createElement("p");
        hookTotalQuestions.setAttribute("id", "totalQuestions");
        document.body.appendChild(hookTotalQuestions);

        document.getElementById("texteQuestion").innerText = questionsQuiz[noQuestion]["question"];
        var hookTexteQuestions = document.createElement("p");
        hookTexteQuestions.setAttribute("id", "totalQuestions");
        document.body.appendChild(hookTexteQuestions);
    });

    QUnit.test( "obtenirBonneReponse()", function( assert )
    {   var questionCourante, returnedValue;

        questionCourante = 0;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 1, "WHEN_indexBonneReponseIs1_THEN_return1");

        questionCourante = 1;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 3, "WHEN_indexBonneReponseIs5_THEN_return5");

        questionCourante = 2;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, -6, "WHEN_indexBonneReponseIs-6_THEN_return-6");

        questionCourante = 3;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 0, "WHEN_indexBonneReponseIs0_THEN_return0");
    });

    QUnit.test( "validerQuestion()", function( assert )
    {
        var noQuestion, choixUtilisateur, returnedValue;

        noQuestion = 0;
        choixUtilisateur = 2;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, false, "WHEN_choixUtilisateurIs2AndAnswerIndexIs1_THEN_returnFalse")

        noQuestion = 1;
        choixUtilisateur = 3;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, true, "WHEN_choixUtilisateurIs5AndAnswerIndexIs5_THEN_returnTrue")

        noQuestion = 2;
        choixUtilisateur = 2;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, false, "WHEN_choixUtilisateurIs2AndAnswerIndexIs-6_THEN_returnFalse")

        noQuestion = 3;
        choixUtilisateur = 0;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, true, "WHEN_choixUtilisateurIs0AndAnswerIndexIs0_THEN_returnTrue")
    });

    QUnit.test( "ajouterPoint()", function( assert )
    {
        totalPointage = 0;
        ajouterPoint();
        assert.equal(totalPointage, 1, "WHEN_totalPointageIs0_THEN_changeItTo1");

        totalPointage = 2;
        ajouterPoint();
        assert.equal(totalPointage, 3, "WHEN_totalPointageIs2_THEN_changeItTo3");

        totalPointage = 3;
        ajouterPoint();
        assert.equal(totalPointage, 4, "WHEN_totalPointageIs3_THEN_changeItTo4");

        totalPointage = -4;
        ajouterPoint();
        assert.equal(totalPointage, -3, "WHEN_totalPointageIs-4_THEN_changeItTo-3");
    });

    QUnit.test( "obtenirPointage()", function( assert )
    {
        var returnedValue;

        totalPointage = 0;
        returnedValue = obtenirPointage();
        assert.equal(returnedValue, 0, "WHEN_totalPointageIs0_THEN_return0");

        totalPointage = 1;
        returnedValue = obtenirPointage();
        assert.equal(returnedValue, 1, "WHEN_totalPointageIs1_THEN_return1");

        totalPointage = 2;
        returnedValue = obtenirPointage();
        assert.equal(returnedValue, 2, "WHEN_totalPointageIs2_THEN_return2");

        totalPointage = -3;
        returnedValue = obtenirPointage();
        assert.equal(returnedValue, -3, "WHEN_totalPointageIs-3_THEN_return-3");
    });

    QUnit.test( "estFinPartie()", function(assert)
    {
        var returnedValue;

        questionCourante = 0;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, false," WHEN_questionCouranteIsLesserThanMAX_QUESTIONS_THEN_returnFalse");

        questionCourante = MAX_QUESTIONS;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, true," WHEN_questionCouranteEqualMAX_QUESTIONS_THEN_returnTrue");

        questionCourante = MAX_QUESTIONS + 1;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, true," WHEN_questionCouranteIsGreaterThanMAX_QUESTIONS_THEN_returnTrue");

        questionCourante = -5;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, false," WHEN_questionCouranteIsLesserThan0_THEN_returnFalse");
    });

    QUnit.test( "chargerQuestionSuivante()", function( assert )
    {
        questionCourante = 0;
        chargerQuestionSuivante();
        assert.equal(questionCourante, 1, "WHEN_questionCouranteIs0_THEN_changeItTo1");

        questionCourante = 2;
        chargerQuestionSuivante();
        assert.equal(questionCourante, 3, "WHEN_questionCouranteIs2_THEN_changeItTo3");

        questionCourante = 3;
        chargerQuestionSuivante();
        assert.equal(questionCourante, 4, "WHEN_questionCouranteIs3_THEN_changeItTo4");

        questionCourante = -4;
        chargerQuestionSuivante();
        assert.equal(questionCourante, -3, "WHEN_questionCouranteIs-4_THEN_changeItTo-3");
    });

    QUnit.test("obtenirChoix()", function( assert )
    {   var noQuestion, returnedValue;

        noQuestion = 0;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["a", "b", "c", "d"], "WHEN_obtenirChoixRecieves0_THEN_outputsQuestion0AnswerArray");

        noQuestion = 1;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["e", "f", "g", "h"], "WHEN_obtenirChoixRecieves1_THEN_outputsQuestion1AnswerArray");

        noQuestion = 2;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["i", "j", "k", "l"], "WHEN_obtenirChoixRecieves2_THEN_outputsQuestion2AnswerArray");

        noQuestion = 3;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["m", "n", "o", "p"], "WHEN_obtenirChoixRecieves3_THEN_outputsQuestion3AnswerArray");

    });

    QUnit.test("majPointage()", function ( assert )
    {   var check;

        totalPointage = 2;
        majPointage();
        check = document.getElementById("totalPoints").textContent;
        assert.equal(check, 2, "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_1");

        totalPointage = 3;
        majPointage();
        check = document.getElementById("totalPoints").textContent;
        assert.equal(check, 3, "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_2");

        totalPointage = 0;
        majPointage();
        check = document.getElementById("totalPoints").textContent;
        assert.equal(check, 0, "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_3");
    });

    QUnit.test("majTotalQuestion", function( assert ) 
    {
            majTotalQuestion();
            var check = document.getElementById("totalQuestions").textContent;
            assert.ok(check==MAX_QUESTIONS, "WHEN_prompted_THEN_majTotalQuestion_RETURNS_totalPointage");
    });

    QUnit.test("majTotalQuestion", function( assert )
    {
        majTexteQuestion(0);
        var check = document.getElementById("texteQuestion").innerText
        assert.equal(check, "sampleQuestion0")
    });

    QUnit.todo("majTexteChoix()", function( assert )
    {   
        
    });

    QUnit.todo("afficherBonneReponse()", function( assert )
    {   
        
    });

    QUnit.todo("majNoQuestionCourant()", function( assert )
    {   
        
    });

    QUnit.todo("remiseAZeroBoutons()", function( assert )
    {   
        
    });

    QUnit.todo("majProgression()", function( assert )
    {   
        
    });

    QUnit.todo("majInterface()", function( assert )
    {   
        
    });

    QUnit.todo("selectionnerChoix()", function( assert )
    {   
        
    });

    QUnit.todo("afficherBoiteFinDeJeu()", function( assert )
    {   
        
    });
});