import React from 'react'

export const Footer = () => {
 let myStyle = {
    height:"44px"
  }
  return (
    <footer className='bg-dark text-light py-1' style={myStyle} >
      <p className='text-center'>      Copyright &copy; MyTodosList.com
</p>
    
    </footer>
  )
}