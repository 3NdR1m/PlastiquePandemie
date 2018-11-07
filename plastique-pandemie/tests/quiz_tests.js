QUnit.test( "", 
    function( assert ) {

        assert.ok(1==1);
});

//validerQuestion
QUnit.test( "WHEN_questionIsWrong_THEN_validerQuestion_RETURNS_false", 
    function( assert ) {
        const noQuestion = 1;
        const choixUtilisateur = 2;
        var expectedResult = false;
        assert.ok( validerQuestion(noQuestion, choixUtilisateur) == expectedResult)
});

//ajouterPoint
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        totalPointage = 2;
        var expectedScore = totalPointage + 1;
        ajouterPoint()
        assert.ok( expectedScore == totalPointage )
});
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        totalPointage = 4;
        var expectedScore = totalPointage + 1;
        ajouterPoint()
        assert.ok( expectedScore == totalPointage )
});
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        totalPointage = 0;
        var expectedScore = totalPointage + 1;
        ajouterPoint()
        assert.ok( expectedScore == totalPointage )
});

//obtenirPoint
QUnit.test( "WHEN_prompted_THEN_obtenirPoint_RETURNS_totalPointage", 
    function( assert ) {
        var expectedPointage = 0;
        assert.ok( obtenirPointage() == expectedPointage );
});

//estFinPartie
QUnit.test( "WHEN_gameOver_THEN_estFinPartie_RETURNS_true", 
    function( assert ) {
        questionCourante = 3;
        assert.ok( estFinPartie(questionCourante));
});

//chargerQuestionSuivante
QUnit.test( "WHEN_atQuestion1_THEN_chargerQuestionSuivante_RETURNS_question2", 
    function( assert ) {
        const EXPECTED_NUMBER = 1;
        questionCourante = EXPECTED_NUMBER;
        chargerQuestionSuivante()
        assert.ok(questionCourante == EXPECTED_NUMBER + 1);
});
QUnit.test( "WHEN_atQuestion1_THEN_chargerQuestionSuivante_RETURNS_question2", 
    function( assert ) {
        const EXPECTED_NUMBER = 2;
        questionCourante = EXPECTED_NUMBER;
        chargerQuestionSuivante()
        assert.ok(questionCourante == EXPECTED_NUMBER + 1);
});
QUnit.test( "WHEN_atQuestion1_THEN_chargerQuestionSuivante_RETURNS_question2", 
    function( assert ) {
        const EXPECTED_NUMBER = 3;
        questionCourante = EXPECTED_NUMBER;
        chargerQuestionSuivante()
        assert.ok(questionCourante == EXPECTED_NUMBER + 1);
});

//obtenirBonneReponse
QUnit.test( "WHEN_querried_THEN_obtenirBonneReponse_RETURNS_1", 
    function( assert ) {
        const bonneReponse = obtenirBonneReponse(0);
        assert.ok(bonneReponse == 0);
        console.log(bonneReponse)
});
QUnit.test( "WHEN_querried_THEN_obtenirBonneReponse_RETURNS_1_2", 
    function( assert ) {
        const bonneReponse = obtenirBonneReponse(1);
        assert.ok(bonneReponse == 0);
});
QUnit.test( "WHEN_querried_THEN_obtenirBonneReponse_RETURNS_1_3", 
    function( assert ) {
        const bonneReponse = obtenirBonneReponse(2);
        assert.ok(bonneReponse == 0);
        console.log(bonneReponse)
});

//obtenirChoix
//afficherBonneReponse
//majPointage
//majTotalQuestion
//majTexteChoix
//majTexteQuestion
//majNoQuestionCourant
//remiseAZeroBoutons
//majProgression
//majInterface
//selectionnerChoix
//afficherBoiteFinDeJeu