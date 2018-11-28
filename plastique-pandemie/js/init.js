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
const MAX_QUESTIONS = 8;

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
const POS_REPONSE = 1;

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
const tableauQuestions = [
  ["Que signifie l'acronyme 'POP'", 0, "https://fr.wikipedia.org/wiki/Polluant_organique_persistant", "Polluants Organiques Persistants", "Projets Ocean Propres", "Pomme, Oeuf, Patate", "Propriété Obfusqués du Pacifique"],
  ["Combien de tonne de plastique son jetée à l'océan à chaque seconde", 2, "LIEN_RÉPONSE", "1 Tonnes", "10 Tonnes", "0,5 Tonnes", "14 Tonnes"],
  ["Lequelle de ces nom ne désigne pas un océan?", 3, "LIEN_RÉPONSE", "Pacifique", "Artique", "Indien", "Caraïbe"],
  ["Combien de décharge océaniques sont connues à ce jour?", 3, "etudes-et-articles-scientifiques-pollution-ocean.html", "3", "7", "6", "5"],
  ["Qu'est-ce qu'un plastique Biodégradable omet d'utiliser?", 3, "http://www.pepctplastics.com/resources/connecticut-plastics-learning-center/biodegradable-plastics/", "Un Plastifiant", "Un Polymer", "De l'Antioxidant", "Du Carbonne"],
  ["QUESTION_6", 0, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3", "RÉPONSE_4"],
  ["QUESTION_7", 0, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3", "RÉPONSE_4"],
  ["QUESTION_8", 0, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3", "RÉPONSE_4"],
  ["QUESTION_9", 0, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3", "RÉPONSE_4"],
  ["QUESTION_10", 0, "LIEN_RÉPONSE", "RÉPONSE_1", "RÉPONSE_2", "RÉPONSE_3", "RÉPONSE_4"]
];

/**
 * @global
 * @name questionsQuiz
 * @type {object}
 * @description Liste des questions posées dans le quiz.
 * @example [["Quel est le meilleur aliment pour votre santé?", 1, "https://www.google.ca" ,"Brocoli","Croustilles sans OGM","Crème glacée","Poutine déjeuner"]]
 */
var questionsQuiz = [
  []
];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions() {
  let questionList = [];
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    let index;
    do {
      index = Math.floor(Math.random() * tableauQuestions.length);
    }
    while (questionList.includes(index))
    questionList[i] = index;
    questionsQuiz[i] = tableauQuestions[index];
  }
}

/**
 * @name init
 * @description Fonction d'initialisation du quiz.
 */
function init() {
  reponseUtilisateur = 0;
  questionCourante = 0;
  totalPointage = 0;
  choisirQuestions();
  $(".totalQuestions").text(MAX_QUESTIONS);
}

window.onload = init;