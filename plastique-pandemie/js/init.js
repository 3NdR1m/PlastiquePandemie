/**
 * @module init.js
 * @author Benjamin Bergeron
 * @author Andrew Veilleux
 * @copyright 2018
 */

/**
 * @const MAX_QUESTIONS
 * @type {Number}
 * @description Nombre de questions à afficher dans le quiz.
 * @constant
 */
const MAX_QUESTIONS = 5;

/**
 * @const NB_CHOIX_MAX
 * @type {Number}
 * @description Nombre de choix par question.
 * @constant
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
 * @type {Array<Object>}
 * @description Liste des questions disponibles pour le quiz.
 * @example [{
 * 	Question:"Que vaus 1 + 1",
 * 	lienReponse:"index.html",
 * 	indexBonneReponse: 0,
 * 	choixReponse: [ "2", "0", "4", "-1" ]
 * }]
 */
const tableauQuestions = [
	{
		question: "Que signifie l’acronyme « POP »?",
		lienReponse: "https://fr.wikipedia.org/wiki/Polluant_organique_persistant",
		indexBonneReponse: 0,
		choixReponse: ["Polluants Organiques Persistants", "Projets Oceans Propres", "Pomme, Oeuf, Patate", "Propriété Obfusqués du Pacifique"]
	},
	{
		question: "Combien de tonnes de plastique sont jetées à l’océan à chaque seconde?",
		lienReponse: "problematique.html",
		indexBonneReponse: 2,
		choixReponse: ["1 Tonnes", "10 Tonnes", "0,5 Tonnes", "14 Tonnes"]
	},
	{
		question: "Lequel de ces noms ne désigne pas un océan?",
		lienReponse: "https://fr.wikipedia.org/wiki/Cara%C3%AFbes",
		indexBonneReponse: 3,
		choixReponse: ["Pacifique", "Atlantique", "Indien", "Caraïbe"]
	},
	{
		question: "Combien de décharges océaniques sont connues à ce jour?",
		lienReponse: "etudes-et-articles-scientifiques-pollution-ocean.html",
		indexBonneReponse: 3,
		choixReponse: ["3", "7", "6", "5"]
	},
	{
		question: "Depuis quelle décennie le plastique est-il massivement utilisé?",
		lienReponse: "index.html",
		indexBonneReponse: 1,
		choixReponse: ["1930", "1940", "1950", "1960"]
	},
	{
		question: "Combien a-t-il d’océans sur terre?",
		lienReponse: "https://fr.wikipedia.org/wiki/Oc%C3%A9an",
		indexBonneReponse: 3,
		choixReponse: ["7", "6", "4", "5"]
	},
	{
		question: "Parmi ces organismes plastivores, lesquels n’existent pas encore?",
		lienReponse: "https://www.theguardian.com/environment/2018/apr/16/scientists-accidentally-create-mutant-enzyme-that-eats-plastic-bottles",
		indexBonneReponse: 3,
		choixReponse: ["Les bactéries plastivores", "Les vers de terre plastivores", "Les champignons plastivores", "les algues plastivores"]
	},
	{
		question: "Qu'est-ce qu'un plastique Biodégradable omet d'utiliser?",
		lienReponse: "http://www.pepctplastics.com/resources/connecticut-plastics-learning-center/biodegradable-plastics/",
		indexBonneReponse: 3,
		choixReponse: ["Un Plastifiant", "Un Polymer", "De l'Antioxidant", "Du Carbonne"]
	},
	{
		question: "Pourquoi la cellulose est-elle non-poluante, malgré être un polymer?",
		lienReponse: "https://en.wikipedia.org/wiki/Cellulose",
		indexBonneReponse: 0,
		choixReponse: ["Fait a base d'oxygene", "Fait a base de nitrogene", "Fait a base de carbonne", "Fait a base de sodium"]
	},
	{
		question: "Dans le but de créer des bioréacteurs plus éfficaces, certaines recherchistes proposent...",
		lienReponse: "https://pp.bme.hu/ch/article/download/11096/7968/",
		indexBonneReponse: 2,
		choixReponse: ["Des catalysts plus violants", "La domestication d'algues", "Des biorécateurs industrielles", "Des bioréacteurs locaux"]
	}
];
/**
 * @global
 * @name questionsQuiz
 * @type {Array<Object>}
 * @description Liste des questions posées dans le quiz.
 * @example [{
 * 	Question:"Que vaux 1 + 1",
 * 	lienReponse:"index.html",
 * 	indexBonneReponse: 0,
 * 	choixReponse: [ "2", "0", "4", "-1" ]
 * }]
 */
var questionsQuiz = [];

/**
 * @name choisirQuestions
 * @description Prend MAX_QUESTIONS de questions de tableauQuestions pour les mettre dans questionsQuiz.
 */
function choisirQuestions() {
	let questionIndexList = [];
	for (let i = 0; i < MAX_QUESTIONS; i++) {
		let index;
		do {
			index = Math.floor(Math.random() * tableauQuestions.length);
		}
		while (questionIndexList.includes(index))
		questionIndexList[i] = index;
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

	// Init interface
	$(".totalQuestions").text(MAX_QUESTIONS);
	document.getElementById("questionBox").style.display = "block";
	document.getElementById("greetingBox").style.display = "none";
	document.getElementById("gameOverBox").style.display = "none";
	majInterface();
}