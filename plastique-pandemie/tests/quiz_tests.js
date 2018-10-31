/** 
 * 
 * 
 */
//validerQuestion

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
        var totalpointage = 0;
        assert.ok( obtenirPointage() == totalpointage );
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

QUnit.test( "", 
    function( assert ) {
        assert.ok();
});