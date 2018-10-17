var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
const TwitchHelix = require("twitch-helix");

var headers = {
    'Client-ID': 'c2q7jrqrcodfs4t6tfxawkcrvwn1fl'
    /*'Authorization': 'Bearer <access token>'*/
};

var options = {
    url: 'https://api.twitch.tv/helix/streams?user_login=lirik',
    headers: headers
};

app.get("/", function(req, res){
    function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        res.render("landing");
        var data = JSON.parse(body)
        console.log(data);
    }
}
request(options, callback);
});






app.listen(process.env.PORT, process.env.IP, function() {
    console.log("App has started!");
});



/*const twitchApi = new TwitchHelix({
    clientId: "c2q7jrqrcodfs4t6tfxawkcrvwn1fl",
    clientSecret: "oiccv2po6ohv0cfnrsp7hjrxrhaltv"
});*/

/*twitchApi.getTwitchUserByName("nightbot").then(twitchUser => {
    console.log(twitchUser.display_name) // Prints "Nightbot"
})*/


/*app.get("/", function(req, res) {
    var url = 'https://api.twitch.tv/helix/streams?game_id=33214';
    request(url, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            console.log(data);
        }

    });
});

*/