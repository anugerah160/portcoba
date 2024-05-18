$("#mtop1").click(function(){
    $("#mtop2").removeClass("more-active")
    $("#mtop3").removeClass("more-active")
    $("#mtop4").removeClass("more-active")
    $("#mtop1").addClass("more-active")
    // hide
    $("#more2").hide("fast");
    $("#more3").hide("fast");
    $("#more4").hide("fast");
    $("#more1").show("fast");
});
$("#mtop2").click(function(){
    $("#mtop1").removeClass("more-active")
    $("#mtop3").removeClass("more-active")
    $("#mtop4").removeClass("more-active")
    $("#mtop2").addClass("more-active")
    // hide
    $("#more1").hide("fast");
    $("#more3").hide("fast");
    $("#more4").hide("fast");
    $("#more2").show("fast");
});
$("#mtop3").click(function(){
    $("#mtop1").removeClass("more-active")
    $("#mtop2").removeClass("more-active")
    $("#mtop4").removeClass("more-active")
    $("#mtop3").addClass("more-active")
    // hide
    $("#more1").hide("fast");
    $("#more2").hide("fast");
    $("#more4").hide("fast");
    $("#more3").show("fast");
});
$("#mtop4").click(function(){
    $("#mtop1").removeClass("more-active")
    $("#mtop2").removeClass("more-active")
    $("#mtop3").removeClass("more-active")
    $("#mtop4").addClass("more-active")
    // hide
    $("#more1").hide("fast");
    $("#more2").hide("fast");
    $("#more3").hide("fast");
    $("#more4").show("fast");
});

$("#hide-nav").click(function(){
    $("navbar").hide("fast")
    $("#show-nav").show("3000")
})
$("#show-nav").click(function(){
    $("navbar").show("3000")
    $("#show-nav").hide("fast")
})

const ganti = document.querySelector(':root');
let gan=1;
$("#ganti-theme").click(function(){
    if(gan==1){
        ganti.style.setProperty('--primary', '#ffffff');
        ganti.style.setProperty('--second', '#6abf4b');
        ganti.style.setProperty('--background', '#fbfbfb');
        ganti.style.setProperty('--background2', '#397626');
        ganti.style.setProperty('--certi', '#f0f0f0');
        ganti.style.setProperty('--text', '#000000');
        gan=0;
    }
    else{
        ganti.style.setProperty('--primary', '#000000');
        ganti.style.setProperty('--second', '#00bde7');
        ganti.style.setProperty('--background', '#25262a');
        ganti.style.setProperty('--background2', '#242424');
        ganti.style.setProperty('--certi', '#333333');
        ganti.style.setProperty('--text', '#ffffff');
        gan=1;
    }
});