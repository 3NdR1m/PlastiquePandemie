/**
 * @description Active un HTMLAudioElement avec l'id elementId
 * @param {string} elementId
 * @author https://www.w3schools.com/jsref/met_audio_play.asp
 */
function jouerSon(elementId)
{
	let audio = document.getElementById(elementId); 
	audio.play(); 
}