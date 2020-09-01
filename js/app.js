(function (window) {
	'use strict';


	// Initial Const 
	const input = document.getElementsByClassName('new-todo')[0]
	const todoList =  document.getElementsByClassName('todo-list')[0]
	const items = document.querySelectorAll('.todo-list li')
	const notCompletedItems = document.querySelectorAll('.todo-list li:not(.completed)')
	const clear = document.querySelector('.clear-completed')
	const todoCount = document.querySelector('.todo-count strong')
	
	
	function updateCount(){
		todoCount.textContent = document.querySelectorAll('.todo-list li:not(.completed)').length;
	}

	// Initial Item left	
	updateCount()
	

	input.addEventListener('keyup', function (e) {
		
		var string = input.value;

		if(e.key == 'Enter'){


			const li = document.createElement('li')
			li.innerHTML = `
				<div class="view">
					<input class="toggle" type="checkbox" />
					<label>${string}</label>
					<button class="destroy"></button>
				</div>
				<input class="edit" value="">
			`;

			todoList.appendChild(li);
			const childrenItem = li.querySelector('input.toggle')
			

			childrenItem.addEventListener('click', event => {

				toggleTaskStatusEvent(event.target)

			})


			input.value = '';
			updateCount();

		}
		
	})
	
	
	document.querySelectorAll('.todo-list li').forEach(item => {

		const toggleCheckbox = item.querySelector('input.toggle')
		toggleCheckbox.addEventListener('click', event =>{
			
			toggleTaskStatusEvent(event.target)

		})

	})



	function toggleTaskStatusEvent(e){
		const liParent = e.closest('li')
		liParent.classList.toggle('completed')
		updateCount()
	}

	clear.addEventListener('click', function(){

		document.querySelectorAll('.todo-list li.completed').forEach(item=>{

			item.style.display = 'none';

		})


		
	})








})(window);
