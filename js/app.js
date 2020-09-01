(function (window) {
	'use strict';


	const input = document.getElementsByClassName('new-todo')[0]
	const todoList =  document.getElementsByClassName('todo-list')[0]
	const items = document.querySelectorAll('.todo-list li')

	
	
	input.addEventListener('keyup', function (e) {
		
		var string = input.value;

		if(e.key == 'Enter'){
			


			var liClass = document.createElement('li');
			var divClass = document.createElement('div');
			var editInput = document.createElement('input')
			var toggleInput = document.createElement('input')
			var labelInput = document.createElement('label')
			var button =  document.createElement('button')

			divClass.className = 'view';
			editInput.className = 'edit';
			editInput.value = 'Rule the web';
			toggleInput.className = 'toggle';
			toggleInput.type = 'checkbox';
			labelInput.textContent = string;
			button.className = 'destroy';


			liClass.appendChild(divClass);
			liClass.appendChild(editInput)
			divClass.appendChild(toggleInput)
			divClass.appendChild(labelInput)
			divClass.appendChild(button)
			todoList.appendChild(liClass);


			input.value = '';


		}
		
	})
	
	
	document.querySelectorAll('.todo-list li').forEach(item => {

		const toggleCheckbox = item.querySelector('input.toggle')
		toggleCheckbox.addEventListener('click', event =>{
			
			const liParent = toggleCheckbox.closest('li')
			liParent.classList.toggle('completed')

		})

	})




})(window);
