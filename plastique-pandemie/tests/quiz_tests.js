questionsQuiz = [
    // Don't implement untested field such as questions, link and options
    { indexBonneReponse: 1 },
    { indexBonneReponse: 5 },
    { indexBonneReponse: -6 },
    { indexBonneReponse: 0 }
]
QUnit.module.todo("init.js", function()
{
    
});
QUnit.module("quiz.js", function( hooks )
{
    // Do before all; declare tested objects
    hooks.before( function() {
        questionsQuiz = [
            // Don't implement untested field such as questions, link and options
            { indexBonneReponse: 1 },
            { indexBonneReponse: 5 },
            { indexBonneReponse: -6 },
            { indexBonneReponse: 0 }
        ]


    });

    QUnit.test( "obtenirBonneReponse()", function( assert )
    {
        var questionCourante, returnedValue;

        questionCourante = 0
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 1, "WHEN_indexBonneReponseIs1_THEN_return1");

        questionCourante = 1
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 5, "WHEN_indexBonneReponseIs5_THEN_return5");

        questionCourante = 2
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, -6, "WHEN_indexBonneReponseIs-6_THEN_return-6");

        questionCourante = 3
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
        choixUtilisateur = 5;
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

    QUnit.test( "estFinPartie()", function(assert){
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

    QUnit.todo("obtenirChoix()", function(){

    });
    QUnit.todo("afficherBonneReponse()", function(){

    });
});

QUnit.module("User Interface Update",
    function() {
        //afficherBonneReponse
        //majPointage
        QUnit.test( "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_1", 
            function( assert ) {
                totalPointage = 2;
                majPointage();
                var check = document.getElementById("totalPoints").textContent;
                assert.ok(check==totalPointage);
        });
        QUnit.test( "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_2", 
            function( assert ) {
                totalPointage = 3;
                majPointage();
                var check = document.getElementById("totalPoints").textContent;
                assert.ok(check==totalPointage);
        });
        QUnit.test( "WHEN_prompted_THEN_majPointage_RETURNS_totalPointage_3", 
            function( assert ) {
                totalPointage = 0;
                majPointage();
                var check = document.getElementById("totalPoints").textContent;
                assert.ok(check==totalPointage);
        });

        //majTotalQuestion
        QUnit.test( "WHEN_prompted_THEN_majTotalQuestion_RETURNS_totalPointage", 
            function( assert ) {
                majTotalQuestion();
                var check = document.getElementById("totalQuestions").textContent;
                assert.ok(check==MAX_QUESTIONS);
        });

        //majTexteChoix
        //majTexteQuestion
        //majNoQuestionCourant
        //remiseAZeroBoutons
        //majProgression
        //majInterface
        //selectionnerChoix
        //afficherBoiteFinDeJeu
});