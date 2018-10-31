/**
 * @module quiz.js
 * @author Benjamin Bergeron
<<<<<<< HEAD
 * @author Andrew Veilleux
=======
 * @author Andrew Veillette
>>>>>>> ddb4a160088ac859368ae027bf582ba660e0dcb3
 * @copyright 2018
 */

/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
function validerQuestion(noQuestion, choixUtilisateur)
{
	const INDEX_BONNE_REPONSE = 1;
	if(choixUtilisateur == questionsQuiz[noQuestion][INDEX_BONNE_REPONSE])
	{
		return true;
	}
	else
	{
		return false
	}
}

/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */
function ajouterPoint()
{
	totalPointage ++;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
	return totalPointage;
}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */
function estFinPartie(questionCourante)
{
	if(questionCourante == MAX_QUESTIONS)
	{
		return true;
	}
	else
	{
		return false;
	}
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */
function chargerQuestionSuivante()
{
	questionCourante ++;
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */
function obtenirBonneReponse(noQuestion)
{
	chargerQuestionSuivante();
	return questionsQuiz[noQuestion][1];
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */
function obtenirChoix(noQuestion)
{
	var nbChoix = questionsQuiz[noQuestion].length;
	var choix;

	for (let i = 2; i < nbChoix; i++) {
		choix[i] = noQuestion[noQuestion][i];
	}

	return choix;
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */
function afficherBonneReponse(noQuestion) {
	//ajouter votre code ici
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */
function majPointage()
{
	document.getElementById("totalPoints").textContent = totalPointage;
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */
function majTotalQuestion()
{
	document.getElementById("totalQuestions").textContent = MAX_QUESTIONS;
}

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */
function majTexteChoix(noQuestion)
{
	var choix = obtenirChoix(noQuestion);
	for (let i = 0; i < choix.length; i++) {
		document.getElementById("txtChoix"+i).innerText = choix[i];
	}
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */
function majTexteQuestion(noQuestion)
{
	$("#texteQuestion").innerText = questionsQuiz[noQuestion][0];

	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant une le numéro de la question courante.
 */
function majNoQuestionCourant()
{	
	document.getElementById("noQuestionCourante").textContent = questionCourante;
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */
function remiseAZeroBoutons() {
	//ajouter votre code ici
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */
function majProgression()
{
	document.getElementById("barreProgression")
	//ajouter votre code ici
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */
function majInterface()
{
	majNoQuestionCourant();
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et activer le bouton Valider.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */
function selectionnerChoix(noChoix)
{
	$("#btnChoix"+noChoix)
	$("#btnSubmitQuestion").disabled="false";
	//ajouter votre code ici
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */
function afficherBoiteFinDeJeu()
{
	document.getElementById("boiteQuestion").style.display = "none";
	document.getElementById("resumeQuestion").style.display = "block";
}
