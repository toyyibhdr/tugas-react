import React from 'react'

const CardProduct = (props) => {
  return (
      <>

    <div style={{

       color : 'white',
       backgroundColor : 'maroon',
       width : '250px',
       textAlign : 'center',
       border : '5px solid white'
      }}
        onClick={props.myAlert}>
                <br/>
                <img src={props.urlImage} 
                style={{
                    width : '210px',
                    height : '210px'
                }} />

        <p>{props.productName}</p>
        <p>{props.productPrice}</p>
        
    </div>
    </>
  )
}

export default CardProduct