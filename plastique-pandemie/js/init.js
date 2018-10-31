/**
 * @module init.js
 * @author Benjamin Bergeron
 * @author Andrew Veilleux
 * @copyright 2018
 */

 /**
  * @const MAX_QUESTIONS
  * @type {number}
  * @description Nombre de questions à afficher dans le quiz.
  */
const MAX_QUESTIONS = 3;

/**
  * @const NB_CHOIX_MAX
  * @type {number}
  * @description Nombre de choix par question.
  */
const NB_CHOIX_MAX = 4;

/**
  * @const POS_REPONSE
  * @type {number}
  * @description Position de l’index de la bonne réponse.
  */
const POS_REPONSE = 0;

/**
  * @global
  * @name questionCourante
  * @type {number}
  * @description Index de la question présentement affichée.
  */
var questionCourante = 0;

/**
  * @global
  * @name totalPointage
  * @type {number}
  * @description Total du pointage accumulé.
  */
var totalPointage = 0;

/**
  * @global
  * @name reponseUtilisateur
  * @type {number}
  * @description Choix de l’utilisateur.
  */
var reponseUtilisateur = 0;

/**
  * @global
  * @name tableauQuestions
  * @type {object}
  * @description Liste des questions disponibles pour le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var tableauQuestions = [
  ["QUESTION_1", 1, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3"],
  ["QUESTION_2", 1, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3"],
  ["QUESTION_3", 1, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3"],
  ["QUESTION_4", 1, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3"],
  ["QUESTION_5", 1, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3"]
];

/**
  * @global
  * @name questionsQuiz
  * @type {object}
  * @description Liste des questions posées dans le quiz.
  * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
  */
var questionsQuiz = [[]];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions()
{
  var count = 0;
  while(count < MAX_QUESTIONS)
  {
    //Math.floor((Math.random() * tableauQuestions.length) + 0);
    questionsQuiz[count] = tableauQuestions[count]
    count ++;
  }
}

/**
 * @name init
 * @description Fonction d'initialisation du quiz.
 */
function init() 
{
  choisirQuestions();
}

window.onload = init;
