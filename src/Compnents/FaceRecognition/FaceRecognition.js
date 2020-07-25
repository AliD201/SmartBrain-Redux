import React from 'react';
import './FaceRecognition.css'
const FaceRecognition = (props) => {
const box = props.box;
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className= "absolute pa2 " style={{width:'500px',height:'auto'}}>
        <img id = "inputimage" src={props.imageUrl} alt="to recognize" />
        <div className="boundingBox" style={{top:box.topRow , right:box.rightCol , bottom:box.bottomRow , left:box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition;
