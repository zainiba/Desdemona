function showBuyNow() {
    document.getElementById("BuyNow").style.display = "inline";
}

//this calls the function above, 3000 milliseconds is 3 seconds, adjust here to make it a longer interval
setTimeout("showBuyNow()", 1);

var str = "<h1 class=front1>My name is Desdemona</h1> <br><h3 class=front2>Nothing is going right these days. I forgot what I did yesterday. It's hard to visualize what I'm thinking because all I see are snakes. There's so much I want to do but for some reason I can't handle it all. If I don't get this done before sunset there'll be blood on the walls.</h3><br><br>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());
