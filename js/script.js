let songName = [];
let songArtist = [];
let songLength = [];
let image = [];
let link = [];

function loop(array,div){
    array.forEach(function(x){
    $(div).text(x);
});
}

loop(songName,"#songName");
loop(songArtist,"#songArtist");
loop(songLength,"#songLength");
loop(image,"#image");
loop(link,"#link");

$("button").click(function(){
    let songInfo = $("input").val();
    songName.push(songInfo);
});

let songList = {
    image,
    songName,
    songArtist,
    songLength,
    link
};