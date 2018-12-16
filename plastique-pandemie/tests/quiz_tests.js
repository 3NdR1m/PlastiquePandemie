/**
 * @author Benjamin Bergeron
 * @tutorial
 *  QUnit.module(NOM_FICHER_JS_A_TESTER, function(hooks){
 *      hook.before(...) <= Elements à préparer avant de faire les tests
 *      
 *      QUnit(NOM_DE_LA_FUNCTION_A_TESTER, function(assert){
 *          var ...; <= variables utiliser dans pour les tests. Exemples: Parametre et valeur de retour
 *          functionATester();
 *          assert.equal(resultatATester, resultatObtenue, "WHEN_scenario_THEN_resultatAttendue");
 *      });
 *  });
 */
QUnit.module("init.js", function (hooks) {
    hooks.before(function () {
        reponseUtilisateur = undefined;
        questionCourante = undefined;
        totalPointage = undefined;
        questionsQuiz = [undefined];
    });

    QUnit.test("choisirQuestions()", function (assert) {
        choisirQuestions();
        assert.equal(questionsQuiz.length, MAX_QUESTIONS, "WHEN_called_THEN_questionsQuizIsOfSizeMAX_QUESTIONS");
    });

    QUnit.test("init()", function (assert) {
        // Act
        init();

        // Assert
        assert.equal(reponseUtilisateur, 0, "WHEN_called_THEN_setReponseUtilisateurTo0");
        assert.equal(questionCourante, 0, "WHEN_called_THEN_setQuestionCouranteTo0");
        assert.equal(totalPointage, 0, "WHEN_called_THEN_setTotalPointageTo0");
    });

});

QUnit.module("quiz.js", function (hooks) {
    // Do before all tests; declare tested objects
    hooks.before(function () {
        questionsQuiz = [{
                question: "sampleQuestion0",
                lienReponse: "http://example1.com/",
                indexBonneReponse: 1,
                choixReponse: ["a", "b", "c", "d"]
            },
            {
                question: "sampleQuestion1",
                lienReponse: "http://example2.com/",
                indexBonneReponse: 3,
                choixReponse: ["e", "f", "g", "h"]
            },
            {
                question: "sampleQuestion2",
                lienReponse: "http://example3.com/",
                indexBonneReponse: 2,
                choixReponse: ["i", "j", "k", "l"]
            },
            {
                question: "sampleQuestion3",
                lienReponse: "http://example4.com/",
                indexBonneReponse: 0,
                choixReponse: ["m", "n", "o", "p"]
            }
        ];
        totalPointage = 0;
    });

    QUnit.test("obtenirBonneReponse()", function (assert) {
        var questionCourante, returnedValue;

        questionCourante = 0;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 1, "WHEN_indexBonneReponseIs1_THEN_return1");

        questionCourante = 1;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 3, "WHEN_indexBonneReponseIs5_THEN_return5");

        questionCourante = 2;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 2, "WHEN_indexBonneReponseIs2_THEN_return2");

        questionCourante = 3;
        returnedValue = obtenirBonneReponse(questionCourante);
        assert.equal(returnedValue, 0, "WHEN_indexBonneReponseIs0_THEN_return0");
    });

    QUnit.test("validerQuestion()", function (assert) {
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
        choixUtilisateur = -2;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, false, "WHEN_choixUtilisateurIs-2AndAnswerIndexIs2_THEN_returnFalse")

        noQuestion = 3;
        choixUtilisateur = 0;
        returnedValue = validerQuestion(noQuestion, choixUtilisateur)
        assert.equal(returnedValue, true, "WHEN_choixUtilisateurIs0AndAnswerIndexIs0_THEN_returnTrue")
    });

    QUnit.test("ajouterPoint()", function (assert) {
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

    QUnit.test("obtenirPointage()", function (assert) {
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

    QUnit.test("estFinPartie()", function (assert) {
        var returnedValue;

        questionCourante = 0;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, false, " WHEN_questionCouranteIsLesserThanMAX_QUESTIONS_THEN_returnFalse");

        questionCourante = MAX_QUESTIONS;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, true, " WHEN_questionCouranteEqualMAX_QUESTIONS_THEN_returnTrue");

        questionCourante = MAX_QUESTIONS + 1;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, true, " WHEN_questionCouranteIsGreaterThanMAX_QUESTIONS_THEN_returnTrue");

        questionCourante = -5;
        returnedValue = estFinPartie();
        assert.equal(returnedValue, false, " WHEN_questionCouranteIsLesserThan0_THEN_returnFalse");
    });

    QUnit.test("chargerQuestionSuivante()", function (assert) {
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

    QUnit.test("obtenirChoix()", function (assert) {
        var noQuestion, returnedValue;

        noQuestion = 0;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["a", "b", "c", "d"], "WHEN_noQuestionIs0_THEN_returnsQuestion0Questions");

        noQuestion = 1;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["e", "f", "g", "h"], "WHEN_noQuestionIs1_THEN_returnsQuestion1Questions");

        noQuestion = 2;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["i", "j", "k", "l"], "WHEN_noQuestionIs2_THEN_returnsQuestion2Questions");

        noQuestion = 3;
        returnedValue = obtenirChoix(noQuestion);
        assert.deepEqual(returnedValue, ["m", "n", "o", "p"], "WHEN_noQuestionIs3_THEN_returnsQuestion3Questions");

    });

    QUnit.test("majPointage()", function (assert) {
        var elementTotalPointsTextContent;

        totalPointage = 2;
        majPointage();
        elementTotalPointsTextContent = document.getElementById("totalPoints").textContent;
        assert.equal(elementTotalPointsTextContent, 2, "WHEN_totalPointageIs2_THEN_changeTotalPointsTextContentTo2");

        totalPointage = 3;
        majPointage();
        elementTotalPointsTextContent = document.getElementById("totalPoints").textContent;
        assert.equal(elementTotalPointsTextContent, 3, "WHEN_totalPointageIs3_THEN_changeTotalPointsTextContentTo3");

        totalPointage = 0;
        majPointage();
        elementTotalPointsTextContent = document.getElementById("totalPoints").textContent;
        assert.equal(elementTotalPointsTextContent, 0, "WHEN_totalPointageIs3_THEN_changeTotalPointsTextContentTo3");

        totalPointage = -1;
        majPointage();
        elementTotalPointsTextContent = document.getElementById("totalPoints").textContent;
        assert.equal(elementTotalPointsTextContent, -1, "WHEN_totalPointageIs-1_THEN_changeTotalPointsTextContentTo-1");
    });

    QUnit.test("majTotalQuestion", function (assert) {
        var elementsTotalQuestionsTextContent;

        majTotalQuestion();
        elementsTotalQuestionsTextContent = document.getElementById("totalQuestions").textContent;
        assert.equal(elementsTotalQuestionsTextContent, MAX_QUESTIONS, "WHEN_called_THEN_updateTatalQuestionsTextContent");
    });

    QUnit.test("majTexteQuestion", function (assert) {
        var noQuestion, elementTexteQuestionInnerText;
        noQuestion = 0;
        majTexteQuestion(noQuestion);
        elementTexteQuestionInnerText = document.getElementById("texteQuestion").innerText;
        assert.equal(elementTexteQuestionInnerText, "sampleQuestion0", "WHEN_noQuestionIs0_THEN_changeTexteQuestionTextContentToQuestion0sQuestion");

        noQuestion = 1;
        majTexteQuestion(noQuestion);
        elementTexteQuestionInnerText = document.getElementById("texteQuestion").innerText;
        assert.equal(elementTexteQuestionInnerText, "sampleQuestion1", "WHEN_noQuestionIs1_THEN_changeTexteQuestionTextContentToQuestion1sQuestion");

        noQuestion = 2;
        majTexteQuestion(noQuestion);
        elementTexteQuestionInnerText = document.getElementById("texteQuestion").innerText;
        assert.equal(elementTexteQuestionInnerText, "sampleQuestion2", "WHEN_noQuestionIs2_THEN_changeTexteQuestionTextContentToQuestion2sQuestion");

        noQuestion = 3;
        majTexteQuestion(noQuestion);
        elementTexteQuestionInnerText = document.getElementById("texteQuestion").innerText;
        assert.equal(elementTexteQuestionInnerText, "sampleQuestion3", "WHEN_noQuestionIs3_THEN_changeTexteQuestionTextContentToQuestion3sQuestion");
    });

    QUnit.test("majTexteChoix()", function (assert) {
        var noQuestion, elementListOptionsLabels, listTextChoix;

        // Get an array of text choix labels elements
        elementListOptionsLabels = Array.from(document.formQuiz.options);

        noQuestion = 0;
        majTexteChoix(noQuestion);
        listTextChoix = elementListOptionsLabels.map(e => e.nextElementSibling.textContent);
        assert.deepEqual(listTextChoix, questionsQuiz[0]["choixReponse"], "WHEN_noQuestionIs0_THEN_changeOptionsLabelsToQuestion0sOptions");

        noQuestion = 1;
        majTexteChoix(noQuestion);
        listTextChoix = elementListOptionsLabels.map(e => e.nextElementSibling.textContent);
        assert.deepEqual(listTextChoix, questionsQuiz[1]["choixReponse"], "WHEN_noQuestionIs1_THEN_changeOptionsLabelsToQuestion1sOptions");

        noQuestion = 2;
        majTexteChoix(noQuestion);
        listTextChoix = elementListOptionsLabels.map(e => e.nextElementSibling.textContent);
        assert.deepEqual(listTextChoix, questionsQuiz[2]["choixReponse"], "WHEN_noQuestionIs2_THEN_changeOptionsLabelsToQuestion2sOptions");

        noQuestion = 3;
        majTexteChoix(noQuestion);
        listTextChoix = elementListOptionsLabels.map(e => e.nextElementSibling.textContent);
        assert.deepEqual(listTextChoix, questionsQuiz[3]["choixReponse"], "WHEN_noQuestionIs3_THEN_changeOptionsLabelsToQuestion3sOptions");

    });

    QUnit.test("afficherBonneReponse()", function (assert) {
        var noQuestion, elementTexteReponseTextContent, elementLienPlusInfosHref;

        noQuestion = 0;
        afficherBonneReponse(noQuestion);
        elementTexteReponseTextContent = document.getElementById("texteReponse").textContent;
        elementLienPlusInfosHref = document.getElementById("lienPlusInfos").href;
        assert.equal(elementTexteReponseTextContent, "b", "WHEN_noQuestionIs0_THEN_changeTexteReponseTextContentToQuestion0sAnswer");
        assert.equal(elementLienPlusInfosHref, "http://example1.com/", "WHEN_noQuestionIs0_THEN_changeLienPlusInfosHrefToQuestion0sLink");

        noQuestion = 1;
        afficherBonneReponse(noQuestion);
        elementTexteReponseTextContent = document.getElementById("texteReponse").textContent;
        elementLienPlusInfosHref = document.getElementById("lienPlusInfos").href;
        assert.equal(elementTexteReponseTextContent, "h", "WHEN_noQuestionIs1_THEN_changeTexteReponseTextContentToQuestion1sAnswer");
        assert.equal(elementLienPlusInfosHref, "http://example2.com/", "WHEN_noQuestionIs1_THEN_changeLienPlusInfosHrefToQuestion1sLink");

        noQuestion = 2;
        afficherBonneReponse(noQuestion);
        elementTexteReponseTextContent = document.getElementById("texteReponse").textContent;
        elementLienPlusInfosHref = document.getElementById("lienPlusInfos").href;
        assert.equal(elementTexteReponseTextContent, "k", "WHEN_noQuestionIs2_THEN_changeTexteReponseTextContentToQuestion2sAnswer");
        assert.equal(elementLienPlusInfosHref, "http://example3.com/", "WHEN_noQuestionIs2_THEN_changeLienPlusInfosHrefToQuestion2sLink");

        noQuestion = 3;
        afficherBonneReponse(noQuestion);
        elementTexteReponseTextContent = document.getElementById("texteReponse").textContent;
        elementLienPlusInfosHref = document.getElementById("lienPlusInfos").href;
        assert.equal(elementTexteReponseTextContent, "m", "WHEN_noQuestionIs3_THEN_changeTexteReponseTextContentToQuestion3sAnswer");
        assert.equal(elementLienPlusInfosHref, "http://example4.com/", "WHEN_noQuestionIs3_THEN_changeLienPlusInfosHrefToQuestion3sLink");
    });

    QUnit.test("majNoQuestionCourant()", function (assert) {
        var elementNoQuestionCouranteTextContent;

        questionCourante = 0;
        majNoQuestionCourant()
        elementNoQuestionCouranteTextContent = document.getElementById("noQuestionCourante").textContent;
        assert.equal(elementNoQuestionCouranteTextContent, 1, "WHEN_questionCouranteIs0_THEN_changeNoQuestionCouranteTextContentTo1");

        questionCourante = 1;
        majNoQuestionCourant()
        elementNoQuestionCouranteTextContent = document.getElementById("noQuestionCourante").textContent;
        assert.equal(elementNoQuestionCouranteTextContent, 2, "WHEN_questionCouranteIs1_THEN_changeNoQuestionCouranteTextContentTo2");

        questionCourante = 2;
        majNoQuestionCourant()
        elementNoQuestionCouranteTextContent = document.getElementById("noQuestionCourante").textContent;
        assert.equal(elementNoQuestionCouranteTextContent, 3, "WHEN_questionCouranteIs2_THEN_changeNoQuestionCouranteTextContentTo3");

        questionCourante = -3;
        majNoQuestionCourant()
        elementNoQuestionCouranteTextContent = document.getElementById("noQuestionCourante").textContent;
        assert.equal(elementNoQuestionCouranteTextContent, -2, "WHEN_questionCouranteIs-3_THEN_changeNoQuestionCouranteTextContentTo-2");
    });

    QUnit.test("remiseAZeroBoutons()", function (assert) {
        // Activate all .btn element
        $('.btn').addClass("active");

        // Test
        var countOfActiveButtonElements;

        remiseAZeroBoutons();
        countOfActiveButtonElements = $('.btn.active').length
        assert.equal(countOfActiveButtonElements, 0, "WHEN_called_THEN_deactivateAll.btnElements");
    });

    QUnit.test("majProgression()", function (assert) {
        var elementProgressBarWidth;

        questionCourante = 0;
        majProgression();
        elementProgressBarWidth = document.getElementById("barreProgression").style.width;
        assert.equal(elementProgressBarWidth, "0%", "WHEN_questionCouranteIs0_THEN_setProgressBarWidthTo0%");

        questionCourante = MAX_QUESTIONS;
        majProgression();
        elementProgressBarWidth = document.getElementById("barreProgression").style.width;
        assert.equal(elementProgressBarWidth, "100%", "WHEN_questionCouranteIsMaxQuestion_THEN_setProgressBarWidthTo100%");

        questionCourante = MAX_QUESTIONS / 2;
        majProgression();
        elementProgressBarWidth = document.getElementById("barreProgression").style.width;
        assert.equal(elementProgressBarWidth, "50%", "WHEN_questionCouranteIsHalfMaxQuestion_THEN_setProgressBarWidthTo50%");

        questionCourante = MAX_QUESTIONS / 4;
        majProgression();
        elementProgressBarWidth = document.getElementById("barreProgression").style.width;
        assert.equal(elementProgressBarWidth, "25%", "WHEN_questionCouranteIsOnQuarterOfMaxQuestion_THEN_setProgressBarWidthTo25%");
    });

    QUnit.test("majInterface()", function (assert, hook) {
        var isElementBtnConfirmedDisabled;

        questionCourante = 0;
        majInterface();
        isElementBtnConfirmedDisabled = document.getElementById("btnConfirmer").hasAttribute("disabled");
        assert.equal(isElementBtnConfirmedDisabled, true, "WHEN_called_THEN_resetBtnConfirmerToDisabled");

        // Only this specific feature of function majInterface is tested. All other features are done by other function and are tested as such.
    });

    QUnit.test("selectionnerChoix()", function (assert) {
        var noChoix, isBtnConfirmerDisabled;

        selectionnerChoix(null);
        isBtnConfirmerDisabled = document.getElementById("btnConfirmer").hasAttribute("disabled");
        assert.equal(isBtnConfirmerDisabled, false, "WHEN_called_THEN_activateBtnConfirmerChoix");

        noChoix = 0;
        selectionnerChoix(noChoix);
        assert.equal(reponseUtilisateur, 0, "WHEN_noChoixIs0_THEN_changeReponseUtilisateurTo0");

        noChoix = 1;
        selectionnerChoix(noChoix);
        assert.equal(reponseUtilisateur, 1, "WHEN_noChoixIs1_THEN_changeReponseUtilisateurTo1");

        noChoix = 2;
        selectionnerChoix(noChoix);
        assert.equal(reponseUtilisateur, 2, "WHEN_noChoixIs2_THEN_changeReponseUtilisateurTo2");

        noChoix = 3;
        selectionnerChoix(noChoix);
        assert.equal(reponseUtilisateur, 3, "WHEN_noChoixIs3_THEN_changeReponseUtilisateurTo3");
    });

    QUnit.test("afficherBoiteFinDeJeu()", function (assert) {
        var elementQuestionBoxDisplay, elementGameOverBoxDisplay, elementTotalScoreTextContent;

        totalPointage = 0;
        afficherBoiteFinDeJeu()
        elementTotalScoreTextContent = document.getElementById("totalScore").textContent;
        assert.equal(elementTotalScoreTextContent, 0, "WHEN_totalPointageIs0_THEN_setTotalScoreTextContentTo0");

        totalPointage = 1;
        afficherBoiteFinDeJeu()
        elementTotalScoreTextContent = document.getElementById("totalScore").textContent;
        assert.equal(elementTotalScoreTextContent, 1, "WHEN_totalPointageIs1_THEN_setTotalScoreTextContentTo1");

        totalPointage = 2;
        afficherBoiteFinDeJeu()
        elementTotalScoreTextContent = document.getElementById("totalScore").textContent;
        assert.equal(elementTotalScoreTextContent, 2, "WHEN_totalPointageIs2_THEN_setTotalScoreTextContentTo2");

        totalPointage = 3;
        afficherBoiteFinDeJeu()
        elementTotalScoreTextContent = document.getElementById("totalScore").textContent;
        assert.equal(elementTotalScoreTextContent, 3, "WHEN_totalPointageIs3_THEN_setTotalScoreTextContentTo3");

        elementQuestionBoxDisplay = document.getElementById("questionBox").style.display;
        elementGameOverBoxDisplay = document.getElementById("gameOverBox").style.display;
        assert.equal(elementQuestionBoxDisplay, "none", "WHEN_called_THEN_setQuestionBoxDisplayToNone");
        assert.equal(elementGameOverBoxDisplay, "block", "WHEN_called_THEN_setGameOverBoxDisplayToInitial");
    });
});