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
const MAX_QUESTIONS = 5;

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
  ["Combien de tonnes de plastique son jetée à l'océan à chaque seconde", 2, "LIEN_RÉPONSE", "1 Tonnes", "10 Tonnes", "0,5 Tonnes", "14 Tonnes"],
  ["Lequelle de ces nom ne désigne pas un océan?", 3, "LIEN_RÉPONSE", "Pacifique", "Artique", "Indien", "Caraïbe"],
  ["Combien de décharge océaniques sont connues à ce jour?", 3, "etudes-et-articles-scientifiques-pollution-ocean.html", "3", "7", "6", "5"],
  ["Qu'est-ce qu'un plastique Biodégradable omet d'utiliser?", 3, "http://www.pepctplastics.com/resources/connecticut-plastics-learning-center/biodegradable-plastics/", "Un Plastifiant", "Un Polymer", "De l'Antioxidant", "Du Carbonne"],
  ["Pourquoi la cellulose est-elle non-poluante, malgré être un polymer?", 0, "https://en.wikipedia.org/wiki/Cellulose", "Fait a base d'oxygene", "Fait a base de nitrogene", "Fait a base de carbonne", "Fait a base de sodium"],
  ["La Bioaccumulation de plastique est le procédé dans le quel:", 1, "https://www.nature.com/articles/srep03263", "Le plastique est digeré", "Le plastique grimpe la chaine alimentaire", "Le plastique est retourné à la nature", "Le plastique infecte l'environement"],
  ["En 2017, combien d'argent fut investis globalement dans des sources d'énergies renouvelables?", 2, "https://europa.eu/capacity4dev/file/71900/download?token=57xpTJ4W", "275 Millions", "275 Trillions", "275 Billions", "275 Milliards"],
  ["Dans le but de créer des bioréacteurs plus éfficaces, certaines recherchistes proposent...", 1, "https://pp.bme.hu/ch/article/download/11096/7968/", "Des catalysts plus violants", "La domestication d'algues", "Des biorécateurs industrielles", "Des bioréacteurs locaux"],
  ["Parmi ces réponses, lequel n'éxiste pas?", 3, "LIEN_RÉPONSE", "Bactérie plastivore", "Verre de terre plastivore", "Champignon plastivore", "Algue plastivore"]
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
  document.getElementById("totalQuestions").innerHTML = MAX_QUESTIONS;
  document.getElementById("totalQuestions2").innerHTML = MAX_QUESTIONS;
}

window.onload = init;