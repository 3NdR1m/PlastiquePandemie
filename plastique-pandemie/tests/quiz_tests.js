//validerQuestion
QUnit.test( "", 
    function( assert ) {
        assert.ok();
});

//ajouterPoint
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        const score = 2;
        const expectedScore = 3;

        assert.ok( ajouterPoint(score) == expectedScore );
});
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        const score = 4;
        const expectedScore = 5;

        assert.ok( ajouterPoint(score) == expectedScore );
});
QUnit.test( "WHEN_pointScored_THEN_ajouterPoint_adds1", 
    function( assert ) {
        const score = 0;
        const expectedScore = 1;

        assert.ok( ajouterPoint(score) == expectedScore );
});

//obtenirPoint
QUnit.test( "WHEN_prompted_THEN_obtenirPoint_RETURNS_totalPointage", 
    function( assert ) {
        assert.ok( obtenirPoint() == totalpointage );
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