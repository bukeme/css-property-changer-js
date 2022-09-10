const block = document.querySelector('.block')
const positionY = document.querySelector('.position-y')
const positionX = document.querySelector('.position-x')
const size = document.querySelector('.size')
const select = document.querySelector('select')
const ok = document.querySelector('.ok')
const rgba = document.querySelectorAll('.rgba')


positionY.addEventListener('change', function() {
	block.style.top = positionY.value + 'px'
})

positionX.addEventListener('change', function() {
	block.style.left = positionX.value + 'px'
})

size.addEventListener('change', function() {
	block.style.transform = `scale(${size.value})`
})

ok.addEventListener('click', function() {
	if(select.value == 'square') {
		block.style.borderRadius = '0'
	} else if(select.value == 'circle') {
		block.style.borderRadius = '50%'
	}
})

rgba.forEach(function(element) {
	element.addEventListener('change', function() {
		block.style.background = `rgba(${rgba[0].value}, ${rgba[1].value}, ${rgba[2].value}, ${rgba[3].value})`
		
	})
})
