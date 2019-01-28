
var taskList = document.getElementById('tpending');
var addbutton=document.querySelector("#addbut");
var doneTask = document.getElementById('done');

addbutton.onclick = mainList


let newArray = [];

function events(){
	taskList.addEventListener('click',removeTask);
	taskList.addEventListener('click',editTask);

}  

events();



function mainList(e){
	e.preventDefault();
	var taskValue = document.getElementById('newt').value;

	if(taskValue==="")
	{
		alert('Please enter a task first');
	}
	else{
	const editbut = document.createElement('button');
	editbut.classList = 'editbut';
	editbut.textContent = 'edit';

	const chkbox = document.createElement("INPUT");
	chkbox.setAttribute("type", "checkbox");

	const delbut = document.createElement('button');
	delbut.classList= 'delbut';
	delbut.textContent= 'Delete';
	
	var newList = document.createElement('li');
	newList.classList='newItem';
	newList.textContent = taskValue;

	
	newList.appendChild(editbut);
	newList.appendChild(delbut);
	newList.appendChild(chkbox);
	taskList.appendChild(newList);
	saveTasksLocalStorage(taskValue);
	newArray.push(taskValue);
	
	console.log(newArray);
	}
}


function removeTask(e) {

	if(e.target.classList.contains('delbut')){
		e.target.parentElement.remove();
	}

}

function editTask(e) {

	if(e.target.classList.contains('editbut')){
		const edit = document.createElement('input');
		edit.setAttribute("type","text");

		e.target.appendChild(edit);
		
		console.log('hello');

	}
}

function saveTasksLocalStorage(taskValue){

	let saveTask = getTasksStorage();

	saveTask.push(taskValue);

	localStorage.setItem('saveTask',JSON.stringify(saveTask));

}

function getTasksStorage(){
	let tasks;
	const lsTask = localStorage.getItem(tasks);
	
	if(lsTask===null){
		tasks=[];
	}
	else {
		tasks = JSON.parse(lsTask);
	}
	return tasks;
}