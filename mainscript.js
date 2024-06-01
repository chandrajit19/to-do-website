
const formSec=document.querySelector(".form-sec")
const todoInput=document.querySelector(".input")
const todoList=document.querySelector(".todo-list")
const disValue=document.querySelector('.text');
 
formSec.addEventListener("submit", (e)=>{
    e.preventDefault();

 const newTodoText= todoInput.value;
 
 const newLi=document.createElement("li");
 
 const newInnerHtml=` <p class="text">${newTodoText}</p>
 
 <button class="todo-btn done">Done</button>
 <button class="todo-btn remove">Remove</button>
 `
 
 newLi.innerHTML=newInnerHtml
 todoList.append(newLi);
    todoInput.value="";
    
})

// delegation model
todoList.addEventListener("click", (e)=>{
  if(e.target.classList.contains("remove")){
 const targetList=e.target.parentNode
targetList.remove();
  }
  if(e.target.classList.contains("done")){
   const liSpan=e.target.previousElementSibling
liSpan.style.textDecoration="line-through"
  }
})


