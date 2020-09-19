const https = require("https");
const { Http2ServerRequest } = require("http2");


function authRequest(username, attemptedToken) {

    // This will send an authentication request attempting to authenticate username with the token attemptedToken using authServer.
    https.get("https://apmunute.me/testSession.php?username=" + username + "&attemptedToken=" + attemptedToken, function(response) {

        console.log(response);

    });

}
function deauthRequest(username, token) {

    // Deauthorizes (logs out) username with the token token using authServer.

}