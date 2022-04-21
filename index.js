console.log("working");

//Que.1.. Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$("#hide").click(function(){
    $("p").hide();
})

$("#show").click(function(){
    $("p").toggle();
})



//Q2. Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$("#title").click(function(){
      $.ajax({
          url : "https://jsonplaceholder.typicode.com/todos/12",
          try : "GET",
          success : function(data){
              document.getElementsByTagName("h1")[0].innerText = data.title;
          }
      })
})