//Business Logic
function Task(description){
  this.description = description;
}

//User Interface Logic
$(document).ready(function(){
  $("form#add-task").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#add-task").val();

    var newTask = new Task(taskInput);

    $("#output ul").append("<li><input type='checkbox'>" + newTask.description +"</li>");

    $("#output ul li").click(function(){
    $(this).css("text-decoration", "line-through");

//resets the button and clears the list
    $('#refresh').click(function() {
        location.reload();
    });
   });

});
});
