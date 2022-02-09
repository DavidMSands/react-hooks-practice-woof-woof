import React from 'react'

function Dog({ name, isGoodBoy, id, handleSlectedDog }) {
  return (
    <span onClick={() => handleSlectedDog(id)}>{name}</span>
  )
}

export default Dog