import React from 'react'

export default function List(props) {
  return (
    <ul>
        {
           props.items.map((i) => (<li key={i}> {i} </li>))
        }
    </ul>
  )
}
