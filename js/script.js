let songName = [];
let songArtist = [];
let songLength = [];
let image = [];
let link = [];

function loop(array,div){
    $(div).empty();
    array.forEach(function(x){
        $(div).append("<div class='item'>"+x+"</div>");
});
}
function pushing(array, input){
    array.push($(input).val());
}

$("button").click(function(){
    pushing(songName,"#nameInput");
    pushing(songArtist,"#artistInput");
    pushing(songLength,"#lengthInput");
    pushing(image,"#imageInput");
    pushing(link,"#linkInput");


    loop(songName,"#songName");
    loop(songArtist,"#songArtist");
    loop(songLength,"#songLength");
   
    $("#image").empty();
    image.forEach(function(x){
        $("#image").append("<div class='item'> <img src='"+x+"'></div>");
    });
    
    $("#link").empty();
    link.forEach(function(x){
        $("#link").append("<div class='item'> <a href='" + x + "'>Play</a>" + "</div>");
    });
});


