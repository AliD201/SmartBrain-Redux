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
          <input className="f4  w-70 pa2" type="text" onChange={onInputChange} defaultValue ="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"></input>
          <button className="f3 grow w-30 link white dib bg-light-purple ph3 pv2" onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
