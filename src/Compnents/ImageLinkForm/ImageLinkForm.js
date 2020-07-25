import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = (props) => {

  const onInputChange = props.onInputChange;
  const onSubmit = props.onSubmit;
  return (
    <div >
      <p>
          Dark magic happens bellow
      </p>
      <div  style = {{ display: 'flex', justifyContent:'center'}}>
        <div className=" shadow-2 pa4 w-60 form" >
          <input className="f4  w-70 pa2" type="text" onChange={onInputChange} defaultValue ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU"></input>
          <button className="f3 grow w-30 link white dib bg-light-purple ph3 pv2" onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
