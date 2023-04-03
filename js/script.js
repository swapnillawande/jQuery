$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(2000);
  // $(".red-box").fadeTo(1000,0.5);

  // $(".red-box").fadeTo(3000,0.2);
  // $(".green-box").fadeTo(2000,0.5);
  // $(".blue-box").fadeTo(1000,0.8);


  // $(".blue-box").fadeToggle(2000);
  // $(".blue-box").fadeToggle(2000);

  // for(let i=0;i<10;i++){
  //   $(".blue-box").fadeToggle(2000);
  // }


  //$(".blue-box").hide(1000);
  //$(".blue-box").show();

  // $(".blue-box").fadeOut(2000);
  // $(".blue-box1").fadeOut(2000);
  // $(".blue-box").slideDown(2000);
  // $(".blue-box1").slideDown(2000);

  // for(let i=0;i<4;i++){

  // }

  // $("p").hide(1000);
  // $("p").slideDown(1000);

  $(".blue-box").animate({
    "margin-left" :"200px"
  },1000,"linear");

  $(".blue-box").animate({
    "margin-left" : "0px"
  },1000,"linear");

});