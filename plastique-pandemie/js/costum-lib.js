/**
 * @author Benjamin Bergeron
 */

let GiphyXhr = new XMLHttpRequest();
const GIPHY_API_KEY = "5dDJgh3g5aH2UJs8PYXRgNoJ2JC7mJBJ";
/**
 * @author Benjamin Bergeron
 * @description Get a random gif via Giphy's API
 * @param {string} tag
 * @param {function} callback
 */
function getRandomGiphy(tag, callback)
{
    let requestUrl = `http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}&rating=g`;

    GiphyXhr.open("GET", requestUrl);
    GiphyXhr.send();

    GiphyXhr.onreadystatechange = function()
    {
        if(GiphyXhr.readyState === 4 && GiphyXhr.status === 200)
        {
            let responseJson = JSON.parse(this.responseText)
            let gifUrl = responseJson['data']['embed_url'];
            callback(gifUrl);
        }
    }
}