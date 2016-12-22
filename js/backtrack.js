var container = document.getElementById('play-buttons');
var buttons = container.getElementsByClassName('play-button');
var music = [];
var muting = [false, false, false, false, false, false, false, false, false];
ui = navigator.appVersion;
if (ui.indexOf("Windows") != -1){
    var nameMus = ['./sound/Drummer.ogg','./sound/Bass_Octomeiser.ogg',
                './sound/Unwind_Sweep.ogg',
                './sound/Mr_Casios_Kick.ogg',
                './sound/Mr_Casio_Cheese.ogg',
                './sound/Dolbys_merged.ogg',
                './sound/Effect_Hubble.ogg',
                './sound/Effect_Bubble.ogg',
                './sound/Guitar.ogg'
    ];
}
else{
    var nameMus = ['./sound/Drummer.mp3','./sound/Bass_Octomeiser.mp3',
            './sound/Unwind_Sweep.mp3',
            './sound/Mr_Casios_Kick.mp3',
            './sound/Mr_Casio_Cheese.mp3',
            './sound/Dolbys_merged.mp3',
            './sound/Effect_Hubble.mp3',
            './sound/Effect_Bubble.mp3',
            './sound/Guitar.mp3'
        ];
}
for (var i = 0;i < 9;i++){
    var newHowl = new Howl ({
        urls: [nameMus[i]],
        autoplay: false,
        loop: true
    });
    music.push(newHowl);
};
Array.prototype.forEach.call(buttons, function(btn, i) { 
    btn.addEventListener('click', function() {
        if (!muting[i]) {
            music[i].play();
            muting[i] = true;
        } else {
            music[i].pause();
            muting[i] = false;
        }
        $(document.getElementsByClassName('glyphicon')[i]).toggleClass('glyphicon-play glyphicon-pause');
    });
});