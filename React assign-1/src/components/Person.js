import React from 'react'

export default function Person(props) {
  return (
    <div>
      <p> Name: {props.name} </p>
       <p> Age: {props.age} </p>
    </div>
  )
}
