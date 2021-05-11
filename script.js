
let input = document.querySelector('.block_form-input');
let btn = document.querySelector('.block_form-btn');
let blockList = document.querySelector('.block_list')


function addElem (text) {
	let newElem = document.createElement('p');
    newElem.className = 'block_list-elem';
    newElem.textContent = text;
    blockList.appendChild(newElem)


    let deleteSpan = document.createElement('span');
    deleteSpan.className = "block_list-delete";
    deleteSpan.textContent = 'delete';
    newElem.appendChild(deleteSpan)

    deleteSpan.addEventListener('click', function() {
    	blockList.removeChild(newElem)
    })
}


btn.addEventListener('click', function(e){
	e.preventDefault();

	if(!(input.value === 'enter:' || input.value === '')) {
		addElem(input.value)

	}
});

input.addEventListener('focus', function() {
	input.value = "";
});
input.addEventListener('blur', function(){
	if(input.value === '')
		input.value = 'enter:'
})