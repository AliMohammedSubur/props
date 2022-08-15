import React from 'react'

function Todo({title,detetime}) {
  return (
    <div className='todo'>
          <h3>{title}</h3>
          <p>{detetime}</p>
    </div>
  )
}

export default Todo
