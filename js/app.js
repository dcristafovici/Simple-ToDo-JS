(function (window) {
	'use strict';


	const input = document.getElementsByClassName('new-todo')[0]
	const todoList =  document.getElementsByClassName('todo-list')[0]
	const items = document.querySelectorAll('.todo-list li')
	const clear = document.querySelector('.clear-completed')

	
	
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
	}

	clear.addEventListener('click', function(){

		document.querySelectorAll('.todo-list li.completed').forEach(item=>{

			item.style.display = 'none';

		})


		
	})








})(window);
