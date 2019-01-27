const taskList = document.getElementById('tpending');

function events(){
	document.querySelector("#addbut").addEventListener("click",addNewTask);
	taskList.addEventListener('click',removeTask);
	taskList.addEventListener('click',editTask);
}  

events();

function addNewTask(e){
	e.preventDefault();
	const taskValue = document.getElementById('newt').value;

	const editbut = document.createElement('button');
	editbut.classList = 'editbut';
	editbut.textContent = 'edit';

	const delbut = document.createElement('button');
	delbut.classList= 'delbut';
	delbut.textContent= 'Delete';
	
	const newList = document.createElement('li');
	newList.textContent = taskValue;

	
	newList.appendChild(editbut);
	newList.appendChild(delbut);
	taskList.appendChild(newList);

}

function removeTask(e) {

	if(e.target.classList.contains('delbut')){
		e.target.parentElement.remove();
	}

}

  

