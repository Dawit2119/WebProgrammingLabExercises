taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks')


form.addEventListener('submit',addNewTaskTwo);
taskList.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearAllTasks);
filter.addEventListener('keyup',filterItems);
var timeTaker = []
function addNewTask(e){    
    const li = document.createElement('li'); //the task
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item seconday-content'
    link.innerHTML = '<i class = "fa fa-remove float-right"></i>';
    li.appendChild(link)
    taskList.appendChild(li)
    timeTaker.push({content:li,time:new Date()})
    e.preventDefault();



 
}
function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

}

function removeItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement.parentElement;
        taskList.removeChild(li);
      }
    }
  }
const reloadIcon = document.querySelector('.fa')

reloadIcon.addEventListener('click',reloadPage)

function reloadPage(){
    location.reload()
}
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = taskList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }



  $(document).ready(function(){
    $('select').formSelect();
  });
function sortList() {
    const sorting = document.querySelector('#sort').value
    addedTasks = taskList.querySelectorAll('li')
    if(sorting == 1){
        timeTaker.sort(compare);
        for(let i = 0; i < addedTasks.length;i++){
            addedTasks[i].innerHTML = timeTaker[i].content.innerHTML;
        }

        
  }
  else{
    addedTasks = taskList.querySelectorAll('li')
    timeTaker = timeTaker.sort(compareDes);
    swappedArray = []
    for(let i = 0; i < addedTasks.length;i++){
      swappedArray.push(timeTaker[i].content);
  }
    for(i=0;i<swappedArray.length;i++){
      addedTasks[i].innerHTML = swappedArray[i].innerHTML
    }
    
}


function compare(a, b) {
    const taskA = a.time;
    const taskB = b.time;
  
    let comparison = 0;
    if (taskA > taskB) {
      comparison = 1;
    } else if (taskA < taskB) {
      comparison = -1;
    }
    return comparison;
  }
function compareDes(a, b) {
    const taskA = a.time;
    const taskB = b.time;
  
    let comparison = 0;
    if (taskA < taskB) {
      comparison = 1;
    } else if (taskA > taskB) {
      comparison = -1;
    }
    return comparison;
  }
}
function addNewTaskTwo(e) {

      e.preventDefault(); //disable form submission


      // Check empty entry
      if (taskInput.value === '') {
          taskInput.style.borderColor = "red";

          return;
      }
      let data = Date.now();
      // Create an li element when the user adds a task 
      const li = document.createElement('li');
      // Adding a class
      li.className = 'collection-item';

      // Create text node and append it 
      li.appendChild(document.createTextNode(taskInput.value));

      // Create new element for the link 
      const link = document.createElement('a');
      // Add class and the x marker for a 
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      let datespan = document.createElement('span');
      datespan.className = 'datespan';
      datespan.style.display ='none';
      datespan.textContent = data;
      li.appendChild(datespan);
      // Append link to li
      li.appendChild(link);
      // Append to UL 
      taskList.appendChild(li);

}

function sortTwo(){
   const collectionSorted = document.querySelector(".collection-temp");
  const sorting = document.querySelector('#sort').value
    if (sorting == '2'){
      const unorderedList = document.querySelectorAll(".collection-item");
      var orderingArray = new Array();
      const currentTime = Date.now();
      for (let i = 0; i < unorderedList.length; i++) {
        listItem = unorderedList[i].querySelector(".datespan");
        taskListTime = listItem.textContent;
        let differenceTime = currentTime - taskListTime;
        orderingArray[i] = [differenceTime, i];
      }

      orderingArray.sort();
      for (let i = 0; i < unorderedList.length; i++) {
        collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
      }
      for (let i = 0; i < unorderedList.length; i++) {
        taskList.appendChild(unorderedList[orderingArray[i][1]]);
      }

    }
    else if(sorting == '1'){

      const unorderedList = document.querySelectorAll(".collection-item");
      var orderingArray = new Array();
      const currentTime = Date.now();
      for (let i = 0; i < unorderedList.length; i++) {
        listItem = unorderedList[i].querySelector(".datespan");
        taskListTime = listItem.textContent;
        let differenceTime = currentTime - taskListTime;
        orderingArray[i] = [differenceTime, i];
      }

      orderingArray.sort();
      orderingArray.reverse();
      for (let i = 0; i < unorderedList.length; i++) {
        collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
      }
      for (let i = 0; i < unorderedList.length; i++) {
        taskList.appendChild(unorderedList[orderingArray[i][1]]);
      }

    }

  }