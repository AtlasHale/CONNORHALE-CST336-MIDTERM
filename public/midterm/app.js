let getBooks = function(){
	$("#books").empty();
	var url = "https://openlibrary.org/api/books?bibkeys=ISBN:"+$("#isbn").val()+"&format=json&jscmd=data";
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
		    let imgLink = data["ISBN:"+$("#isbn").val()]["cover"]["large"];
		    let title = data["ISBN:"+$("#isbn").val()].title;
		    let author = data["ISBN:"+$("#isbn").val()]["authors"][0]["name"];
		    console.log(title);
		    console.log(author);
		    $(".cover").html(`<img src=${imgLink} alt='cover art'>`);
		    $("#title").html(title);
		    $("#Author").html(author);
		    console.log(data);
		},
		error: function(err){
			console.log(err);
		}
	});
}



/*JQ examples

// 			data.message.forEach(function(src){
// 				$("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
// 			});

Get the value of some field using JQuery
$("#q1").val().toLowerCase();
Change html using jquery, index is passed into function here.
$(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
update css of all divs
$('div').css('background-color', 'purple');
update css of all tags with class highlight
$('.highlight').css('width', '200');
update css of all tags with id third
$('#third').css('border', '2px solid orange');


AJAX example using radio buttons
var queryTodos  = $("#query-todos-button");

queryTodos.on("click", function(){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    success: function(data) {
        var falseRadio = $("input[id='falseRadio']:checked").val();
        var trueRadio = $("input[id='trueRadio']:checked").val();
        $("#results").addClass("result-class")
        if(falseRadio == "on"){
            $("#results").html("<h5>Completed Todos: False<h5>");
        }
        else if(trueRadio == "on"){
            $("#results").html("<h5>Completed Todos: True</h5>");
        }
        $.each(data, function( key, value) {
          if(value.completed == false && falseRadio == "on"){
            console.log(value.title);
            $("#results").append(value.title);
            $("#results").append("<br/>");
          }
          else if(value.completed == true && trueRadio == "on"){
            console.log(value.title + value.completed);
            $("#results").append(value.title);
            $("#results").append("<br/>");
          }
        });
    },
    error: function(e) {
      $("#results").html("An error occurred during your request: " +  e.status + " " + e.statusText);
      $("#results").append("error");
    }
  });
});
*/