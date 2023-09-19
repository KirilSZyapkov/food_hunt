import React from 'react'

function recipe({params}: any) {

  console.log(params);
  
  return (
    <div>{params.id}</div>
  )
}

export default recipe