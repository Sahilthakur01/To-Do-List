const button = document.querySelector('#btn')
// let ar = []

button.addEventListener('click', function(e){
    const input = document.querySelector('#taskInput').value
    console.log(input)
    
    const task = document.querySelector('#taskList')
    if (input === ""){
        alert("Please Enter the task")
    }
    else{
        // this approach is follow the array 
        // ----> in my opinion both method is okey 
        // ar.unshift(input)
        // console.log(ar)
        // task.innerHTML = ar


        // this approach create a list 
        let li = document.createElement('li')
        li.innerHTML = input
        task.appendChild(li)
        localStorage.setItem('To-do', input)
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        li.appendChild(deleteButton);
        deleteButton.onclick = function() {
        task.removeChild(li);
        localStorage.removeItem("To-do", input)
  };

  
  clearInput()
   
        window.addEventListener('load', function(){
        const data = this.localStorage.getItem('To-do')
        console.log(data)
        li  = data
        })
        // function showtask(){
        //     task.innerHTML = localStorage.getItem('task')
        // }
    }
   
    
})
function clearInput() {
    document.querySelector("#taskInput").value = ""; // Clear the input field
  }

//   window.onload = function() {
//     const saveddata = localStorage.getItem('task')
//     li.innerHTML = saveddata;
// }; 



