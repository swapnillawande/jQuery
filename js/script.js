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

  // $(".blue-box").animate({
  //   "margin-left" :"200px"
  // },1000,"linear");

  // $(".blue-box").animate({
  //   "margin-left" : "0px"
  // },1000,"linear");

  // $(".blue-box").animate({
  //   "margin-left" : "200px",
  //   "opacity" : "0",

  // },1000);

  // $("p").animate({
  //   fontSize : "20px",
     

  // },1000);


  // $(".red-box").fadeTo(1000,0.2);
  // $(".green-box").delay(1000).fadeTo(1000,0.5);
  // $(".blue-box").delay(2000).fadeTo(1000,0.7);

  // $(".red-box").fadeTo(1000,0,function(){
  //  // alert("Animation finished");
  //  $(".green-box").fadeTo(1000,0,function(){
  //     $(".blue-box").fadeTo(1000,0,function(){
  //       alert("Bye..")
  //     })
  //  })
  // });

  //$(".lightbox").delay(5000).fadeIn(1000);

  //$("#list").css("background-color","rgba(180,180,30,0.8)")

  //$("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
  //$("#content").next().css("background-color","rgba(180,180,30,0.8)");

  $("<li>AppendTo</li>").appendTo($("ul ul:first"));
  $("<li>PrependTo</li>").prependTo($("ul ul:first"));

  $("<h4>Swapnil Lawande</h4>").prependTo("#content");

  //$(".red-box").after("<div class='red-box'>Another red </div>");

  //$(".blue-box").before("<div class='blue-box'>New blue box</div>")

  // $(".blue-box").after(function(){
  //   return "<div class='red-box'>Last red box</div>";
  // })

  //$(".blue-box").before($(".red-box"))

  //$("p").after($("#list"))

  //$("li").replaceWith("<li>New list </li>");

  // $("li").replaceWith(function(){
  //   return "<li>List of functions</li>"
  // })

  // var firstItem = $("li:first");

  // //$("p").replaceWith(firstItem);

  // // $(".red-box,.blue-box").replaceWith(function(){
  // //   return "<div class='green-box'>Magic box</div>"
  // // })


  // //$("form").remove("input:text")

  // var galleryImage = $(".galery").find("img").first();
  // var images =[

  //   "images/laptop-mobile_small",
  //   "images/laptop-on-table_small",
  //   "images/people-office-group-team_small",
  // ];
  // var i=0;
  // setInterval(function(){

  //   i = (i+1)%images.length;

  //   galleryImage.fadeOut(function(){
  //     $(this).attr("src",images[i]);
  //     $(this).fadeIn();
  //   });
  //   console.log(galleryImage.attr("src"));

  // },2000);


  // var galleryImage = $(".gallery").find("img").first();

  // // Initialize an array of all images for the gallery
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ];

  // // Now, we want to cycle through all images we have and show one after the
  // // other in our gallery. For this, we create a variable i: the index of the
  // // image we want to currently show.
  // var i = 0;

  // // setInterval will call whatever code is inside the callback function every
  // // 2 seconds. This way, we can change the shown image every 2 seconds.
  // setInterval(function() {
  //   // First, we update the index i to the next image.
  //   // However, we cannot simply do i = i+1 because that would quickly result in
  //   // indexes i = 3, 4, 5 etc which are invalid for our array.
  //   // So we constrain the sequence to the range 0..2 by using modulo 3 (i % 3).
  //   i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...
 
  //   galleryImage.fadeOut(function() {
  //      $(this).attr("src", images[i]);
  //     $(this).fadeIn();
  //   });

  //    console.log(galleryImage.attr("src"));

  // }, 2000);


  var properties = $("p").css(["font-size","color"]);
  console.log(properties);

  var redBox = $(".red-box");
  redBox.css("background-color","pink");

  $("a").addClass("fancy-link");


  $("#btn-click").click(function(event){

    alert("Button was clicked.");
    console.log(event);
  })

  $(".blue-box").click(function(){

   // $(this).fadeTo(1000,0.5);
  })

  $("#btn-hover").hover(function(){
    alert("Button was hovered");
  })

  $(".green-box").hover(function(){
    $(this).css("background-color","violet");
    //alert("Green box hovered");
    $(this).text("I was hovered")
  })

  var blueBox = $(".blue-box");

  blueBox.mouseenter(function(){
    $(this).stop().fadeTo(500,0.5)
    logEvent();
  })

  blueBox.mouseleave(function(){
    $(this).stop().fadeTo(500,1)
  })

  $("html").on("click keydown",function(){
    console.log("clicked or keydown or enter pressed");
  })


  function logEvent(){
    console.log("Click was pressed");
  }
 
  $("html").on("click",logEvent);


});