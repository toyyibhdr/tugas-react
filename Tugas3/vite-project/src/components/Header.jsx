import React from 'react'

const name = 'Toyyib Hendrasto';

const Header = () => {
  return (
      <div style={{
          
        display : 'flex',
        color : 'white',
        fontSize : 40,
        backgroundColor : 'maroon',
        height : '60px',
        alignItems : 'center'

      }}>

    <header >
        {name}
    </header>

    </div>
  )
}

export default Header