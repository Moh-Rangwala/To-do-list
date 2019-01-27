const taskList = document.getElementById('tpending');

function events(){
	document.querySelector("#addbut").addEventListener("click",addNewTask);
	taskList.addEventListener('click',removeTask);
}  

events();

function addNewTask(e){
	e.preventDefault();
	const taskValue = document.getElementById('newt').value;

	const delbut = document.createElement('button');
	delbut.classList= 'delbut';
	delbut.textContent= 'Delete';
	
	const newList = document.createElement('li');
	newList.textContent = taskValue;
	

	newList.appendChild(delbut);
	taskList.appendChild(newList);

	saveTasksLocalStorage();
}

function removeTask(e) {

	if(e.target.classList.contains('delbut')){
		e.target.parentElement.remove();
	}

}

function saveTasksLocalStorage(taskValue){
	
	let saveTask = getTasksStorage();

	saveTask.push(taskValue);

	localStorage.setItem('saveTask',JSON.stringify(taskValue));
}

function getTasksStorage(){
	let tasks;
	const lsTask = localStorage.getItem('tasks');
	
	if(lsTask===null){
		tasks=[];
	}
	else {
		tasks = JSON.parse(lsTask);
	}
	return tasks;
}