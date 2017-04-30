import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'Root'
import 'styles/styles.scss'

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
)


function* generator() {
	yield 1
	yield 3
	yield 5
}

for (let item of generator()) {
	console.log('generators! woot!', item)
}

async function test() {
	return 73
}

test()
	.then(val => console.log('async functions woot!', val))