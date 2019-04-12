const arrOfPeople = [
	{
		name: 'Calvin Webster',
		bio: 'Calvin is a programmer that likes surfing',
		slug: 'calvin'
	},
	{
		name: 'Dominick Inglese',
		bio: 'Awesome teacher, good with working with all types of peop;el.',
		slug: 'dominick'
	}
]

$(document).ready(function() {
	$('#name').on('change', function(event) {
		event.preventDefault()

		$.get(`https://www.reddit.com/r/${event.target.value}.json`).then((aww) => {
			console.log(aww.data.children)
			let html = '<ul>'
			aww.data.children.forEach((item) => {
				html += `<li><img src="${item.data.thumbnail}" /><a href="${item.data.url}">${item.data.title}</a></li>`
			})
			html += "</ul>"
			$('#reddits').html(html)
		})
	})
})



// js intro
//1. datatypes booleans, strings, numbers, objects, arrays and functions

//make a calculator

function add() {
	console.log('add')
}
const myArray = [ 1, 2, 'hello' ]
myArray[0]

for (let i = 0; i < myArray.length; i++) {
	console.log('how many times?', i)
}
