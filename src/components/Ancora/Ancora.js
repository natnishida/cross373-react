import React from 'react'
import './Ancora.css'

function Ancora(props){
    return (
      <div id={props.id} className="parallaxAncora">
          <div className="textoAncora">
              <h2>{props.textoh2}</h2>
              <hr/>
              <p>{props.textoh3}</p>
          </div>
      </div>
  )


}

export default Ancora
