/** 
 * 
 * 
 */
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
//obtenirBonneReponse
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