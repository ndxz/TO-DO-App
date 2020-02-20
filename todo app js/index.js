
var submit = document.getElementById("SubmitTask") ;

submit.addEventListener("click", NewTask);

function NewTask() 
{
 let task= document.querySelector(".NewTask").value ;
let divElement = document.createElement("div");
let h3Title = document.createElement("h3")
let inputValue = document.createTextNode(task);
let Button = document.createElement("button");
let ButtonRemove= document.createElement("button");

if (!task) {
    alert("please add a new task")
}
else {

h3Title.appendChild(inputValue);
divElement.appendChild(h3Title) ;
document.body.appendChild(divElement);
divElement.style.cssText ="height:50px; width:400px; margin: 20px 0px 5px 30% ; display: flex; justify-content:space-around";
Button.innerHTML="Completed";
ButtonRemove.innerHTML="Remove Task";
divElement.appendChild(Button);
Button.style.cssText="background-color:white; border-radius: 3px; border: 1px solid black; font-family: Arial, Helvetica, sans-serif;font-size:15px;padding: 5px 10px ;"

document.querySelector(".NewTask").value='';

Button.addEventListener("click",function(event){
    var Completed = event.target;
    var x = Completed.previousElementSibling;
    if (Button.innerHTML==="Undo") {
        x.style.cssText="text-decoration: none";
        Button.innerHTML="Completed";

    } else {
       x.style.cssText="text-decoration: line-through"; 
       Button.innerHTML="Undo";
    }
      
  } );

divElement.appendChild(ButtonRemove);
ButtonRemove.style.cssText="background-color:white; border-radius: 3px; border: 1px solid black; font-family: Arial, Helvetica, sans-serif;font-size:15px;padding: 5px 10px ;"

ButtonRemove.addEventListener("click", function(event) {
    var removeTask= event.target ;
    removeTask.parentElement.remove();

} );
}
}




   


    
    




