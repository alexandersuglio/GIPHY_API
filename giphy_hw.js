var authKey = "dc6zaTOxFJmzC"; //
var subject = "";
var limit = "5"; //
var queryUrl = "";
var queryUrlEnter;

var img;
var button;

var options;
var search;

var options = ["cat", "dog", "shark", "eagle", "snake", "iguana"];

$("#submitButton").on("click", function() {
    search = $('#searchBar').val().trim();
    // console.log(search);

options.push(search);

$("#initialAnimals").append("<button class='newButton'  value = " + search  + " > " + search + " </button>");
console.log(options);

$(".newButton").on("click", function(){
var topic = $(this).val();
console.log(topic);

});
});

for (i = 0; i < options.length; i++) {
    button = $("<button class='Button' value= " + options[i] + " ></button>").attr('id', options[i]).text(options[i]);
    $("#initialAnimals").append(button);
} //end of for loop

//When the animal button is clicked, grab its value and use it to build the query string
$("button").on("click", function() {

    //this splits up the options array by specific value
    subject = $(this).val();
    console.log(subject);
    // queryUrl to access GIPHY
    queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&limit=" + limit + "&api_key=" + authKey;

    $.ajax({ url: queryUrl, method: 'GET' })
        .done(function(response) {

            console.log(response);
            var img1 = response.data[0].images.original.url;
            var img2 = response.data[1].images.original.url;
            var img3 = response.data[2].images.original.url;
            var img4 = response.data[3].images.original.url;
            var img5 = response.data[4].images.original.url;
$("#GIFSfound").html("<img src=" + img1 + "> </br> <img src= " + img2 + "> </br> <img src= " + img3 + "> </br> <img src= " + img4 + "> </br> <img src= " + img5 + ">");
// $("#GIFSfound").load(img1);
        }); //end of ajax
}); //end of function

// }); //end of function


// $("#initialAnimals").on("click", function(){
// // console.log("you clicked a new button");
// // var subjectNew = $(this).value;
// // console.log(subjectNew);
// });







// $(".oldButton").on("click", function(){
//  console.log(options);
// var type = $(this).attr("id");
// var subject = this.value;
// queryUrl = ("http://api.giphy.com/v1/gifs/search?q=" + subject + limit + authKey);

// $('#GIFSfound').html("<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" );
// });






















































// $("#initialAnimals").on("click", function(){






// });

// var queryUrlNew = ("http://api.giphy.com/v1/gifs/search?q=" + search + limit + authKey);

//     button = $("<button value= " + options[i] + " ></button>").attr('id', options[i]).text(options[i]);

// $("#initialAnimals").on("click", function(){
//  console.log(options);
//  // subject = this.id;

//  $("#GIFSfound").html(queryUrlNew);



// });	

// $("button").on("click", function(){
// console.log(options);
// // alert("hey");

// });










// $("#initialAnimals").on("click", function(){
// 	var options;
// subject = options[i];
// var queryUrl = ("http://api.giphy.com/v1/gifs/search?q=" + subject + limit + authKey);
// $('#GIFSfound').html(queryUrl);

// // $('#GIFSfound').html("<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrl + " </h1>" );
// // });
// // $("#submitButton").on("click", function(){

// // var search= $('#searchBar').val().trim(); 

// // if (search != options[i]){

// // 	options.push("search");
// });

// // var search= $('#searchBar').val().trim(); 
// // $('#initialAnimals').append('<button id=' + search + ' value=' + search + '>' + search + ' </button>');
// // $('#GIFSfound').html("<h1> " + queryUrl + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" );

// });






// $("#submitButton").on("click", function(){
// var search= $('#searchBar').val().trim();
// queryUrlEnter = ("http://api.giphy.com/v1/gifs/search?q=" + search + limit + authKey);


// $('#GIFSfound').html("<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" );

// });

// $("#initialAnimals").on("click", function(){

// $('#GIFSfound').html("<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" );


// });



// $("#submitButton").on("click", function(){
// search= $('#searchBar').val().trim();
// var queryUrlEnter = ("http://api.giphy.com/v1/gifs/search?q=" + search + limit + authKey);

// $('#initialAnimals').append('<button id=' + search + ' value=' + search + '>' + search + ' </button>');
// $('#initialAnimals').on('click', function(){
// 	$('#GIFSfound').html("<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" + "<h1> " + queryUrlEnter + " </h1>" );
// });
// });


// function ajaxQuery() {

// $.ajax({
//     url: ("http://api.giphy.com/v1/gifs/search?q=" + subject + limit + authKey),
//     method: "GET"

// $("button").on("click", function(){
// var somethingHere = "http://media0.giphy.com/media/Ycr587EkQo8KY/200.gif";
// $('#GIFSfound').html("<img src = " + somethingHere + "/>")
// });
// }).done(function(response) {

//     $.each(response.data, function(index, element) {

//         var img = $("<img></img>").attr("src", element.embed_url);
//         $("GIFSfound").append(img);
//         console.log(img);

//     });

// });

// }
//         $("GIFSfound").append(img);

//  $.ajax({ url: queryUrl, method: 'GET' })
//         .done(function(response) {
//             console.log(response);

// var subject = "shark"
// var queryUrl = ("http://api.giphy.com/v1/gifs/search?q=" + subject + limit + authKey);


//      // var ruby = "http://api.giphy.com/v1/gifs/search?q=shark&limit=5&api_key=dc6zaTOxFJmzC"
// var idk = $('#GIFSfound').html("<img src = " + queryUrl + "/>");
//         // var somethingHere = "http://media0.giphy.com/media/Ycr587EkQo8KY/200.gif";
// console.log(idk);    
//  // $('#GIFSfound').html("<img src = " + somethingHere + "/>");

//      // console.log(ruby);

//      // var idk= ruby.data;
//      //        console.log(idk); 



// //
//         }); 





// $("#initialAnimals").on("click", "button", function() {
//     // var type = $(this).attr("id")
//     // var valueOfButton = this.value;
//     // console.log(valueOfButton);

//     subject = this.value;
// var queryURLBase = ("http://api.giphy.com/v1/gifs/search?q=" + subject + limit + authKey);
//     $("#GIFSfound").text(queryURLBase);
// var GIFtest = queryURLBase;
// console.log(GIFtest);

// });

// $('button').on("click", function(){
// var fiveOptions = ["1", "2", "3", "4", "5"];
// for (var j = 0; j < fiveOptions.length; j++){

// 	var gifSharkey= "http://media1.s-nbcnews.com/i/MSNBC/Components/Video/201701/f_shark_wave_170126.jpg";

// $('#GIFSfound').append("<img src=" + gifSharkey + ">"); 
// }



// })















// // $("#gifsGoHere").load("http://giphy.com/embed/o0vwzuFwCGAFO");
// // console.log(GIPHY.data);
//         console.log(GIPHY.data[1].embed_url);
//         console.log(GIPHY.data[2].embed_url);
//          console.log(GIPHY.data[3].embed_url);
//         console.log(GIPHY.data[4].embed_url);

//         // $("#submitButton").click(function() {
//         //     $("#gifsGoHere").load("http://api.giphy.com/v1/gifs/search?q=" + 'cats' + limit + authKey);

//     });
