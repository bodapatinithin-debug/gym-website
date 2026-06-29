// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""){

alert("Please enter your name.");

return;

}

if(email===""){

alert("Please enter your email.");

return;

}

if(!emailPattern.test(email)){

alert("Enter a valid email address.");

return;

}

if(message===""){

alert("Please enter your message.");

return;

}

alert("Thank you! Your message has been submitted.");

this.reset();

});


// Workout Planner

function addTask(){

let input=document.getElementById("task");

let task=input.value.trim();

if(task===""){

alert("Please enter a workout.");

return;

}

let li=document.createElement("li");

li.textContent=task;


// Delete Button

let btn=document.createElement("button");

btn.textContent="Delete";

btn.className="delete";

btn.onclick=function(){

li.remove();

};

li.appendChild(btn);

document.getElementById("taskList").appendChild(li);

input.value="";

}