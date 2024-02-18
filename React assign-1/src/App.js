import React from 'react'
import Person from './components/Person'
import Button from './components/Button'
import Header from './components/Header'
import List from './components/List'

export default function App() {
  return (
	<div>
	  <Person name="Gaurav" age="22" />

	  <Button text="Click Here" onClick={() => console.log("Button Clicked")} />

	  <Header title="This is Main Heading!" />

	  <List items={ ["item1", "item2", "item3", "item4", "item5"] } />
	</div>
  )
}
