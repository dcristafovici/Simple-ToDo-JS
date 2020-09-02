(function (window) {
	'use strict';


	// Initial Const 
	const input = document.getElementsByClassName('new-todo')[0]
	const todoList =  document.getElementsByClassName('todo-list')[0]
	const items = document.querySelectorAll('.todo-list li')
	const notCompletedItems = document.querySelectorAll('.todo-list li:not(.completed)')
	const completedItems = document.querySelectorAll('.todo-list li.completed')
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
				<input class="edit" value="${string}">
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

			item.remove()

		})




		
	})

	
	// FiltersButtons
	document.querySelectorAll('ul.filters li').forEach(item=>{

		const filterButton = item.children[0];
		filterButton.addEventListener('click', event=>{

			runFilter(event.target)


		})
		
	})


	function runFilter(item){

		const notCompletedItemsFilter  = document.querySelectorAll('.todo-list li:not(.completed)')
		const completedItemsFilter = document.querySelectorAll('.todo-list li.completed')
		const allItemsFilter = document.querySelectorAll('.todo-list li');

		var href = item.getAttribute('href')
		href = href.split('#/')[1]

		const activeButton = document.querySelector('ul.filters a.selected')
		activeButton.classList.remove('selected')
		item.classList.add("selected")


		
		if(href == 'active'){

			notCompletedItemsFilter.forEach(item=>{
				item.style.display = 'block';
			})
			completedItemsFilter.forEach(item=>{
				item.style.display = 'none';
			})

		}
		else if(href == 'completed'){
			notCompletedItemsFilter.forEach(item=>{
				item.style.display = 'none';
			})
			completedItemsFilter.forEach(item=>{
				item.style.display = 'block';
			})
		}

		else if(href == 'all'){
			allItemsFilter.forEach(item=>{
				item.style.display = 'block'
			})
		}
	}

	


	// Edit Task Double click

	items.forEach(item =>{

		item.addEventListener('dblclick', event =>{
			editTask(item)
		})

	})


	function editTask(item){

		var label = item.querySelector('label');

		var editButton = item.querySelector('.edit')
		editButton.style.display = 'block'
		
		editButton.addEventListener('keyup', function(event){

			label.textContent = this.value
			if(event.key == 'Enter'){

				this.style.display = 'none';

			}
			
		})

		

	}





})(window);
