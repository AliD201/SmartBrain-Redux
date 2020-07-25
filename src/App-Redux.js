import React , {useState} from 'react';
import './App.css';
import Navigation from './Compnents/Navigation/Navigation'
import Logo from './Compnents/Logo/Logo'
import ImageLinkForm from './Compnents/ImageLinkForm/ImageLinkForm'
import Rank from './Compnents/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './Compnents/FaceRecognition/FaceRecognition'
import SignIn from './Compnents/SignIn/SingIn'
import Register from './Compnents/Register/Register'
import 'tachyons'
import Clarifai from 'clarifai'
// import config from './particlesjs-config.json'
// redux
import { connect } from 'react-redux'
import {setInput, setimageUrl,setbox, setroute,  setisSignedIn} from './Redux/Actions'


var MyApp = {}; // Globally scoped object


const faceLocation = (faceBox) =>{
  const image = document.getElementById('inputimage')
  const width = Number(image.width);
  const height = Number(image.height);
  console.log(width, height);
  return {
    leftCol : faceBox.left_col *width,
    topRow : faceBox.top_row * height,
    rightCol : width - (faceBox.right_col*width),
    bottomRow: height - (faceBox.bottom_row * height)
  }

}



const mapStateToProps = (state) => {
  return{
      input: state.inputImage.input,
      imageUrl : state.inputImage.imageUrl,
      box: state.inputImage.box,
      route: state.route.route,
      isSignedIn: state.signIn.isSignedIn,

  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    onInputCHange: ( event ) => dispatch(setInput(event.target.value)),
    onSubmit: ( event ) =>{MyApp.faceBox(dispatch)} ,

    onRouteChange: (route) =>{
      dispatch(setroute(route))
      console.log(route)
      if ( route === 'signIn'){
        dispatch(setisSignedIn(false))
      }else if ( route === 'home'){
        dispatch(setisSignedIn(true))

      }
    }
  }
}


const particlesOptions = {
  particles: {
     number : {
       value: 120,
       density:{
         enable :true,
         value_area:800
       }
     },shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    }

 }
}

const app = new Clarifai.App({
 apiKey: 'ac2d398fd77a4f3cb512614926e846af'
});


function App(props) {

  MyApp.faceBox = (dispatch) =>{
      console.log("hey");
      console.log(props.input);
      dispatch(setimageUrl(props.input))
      app.models.predict(Clarifai.FACE_DETECT_MODEL, props.input).then(
      function(response) {
        // do something with response
        // response.outputs[0].data.regions[0].region_info.bounding_box
        dispatch(setbox(faceLocation(response.outputs[0].data.regions[0].region_info.bounding_box)))
        console.log( response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
        console.log(err);
      }
    );
      console.log('clicked');
  }



  // const onInputCHange = (event) =>{
  //   setInput(event.target.value)
  //   console.log(event.target.value);
  // }
  // const onSubmit = (event) =>{
  //   setimageUrl(input)
  //   app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
  //   function(response) {
  //     // do something with response
  //     // response.outputs[0].data.regions[0].region_info.bounding_box
  //     displayFaceBox(faceLocation(response.outputs[0].data.regions[0].region_info.bounding_box))
  //     console.log( response.outputs[0].data.regions[0].region_info.bounding_box);
  //   },
  //   function(err) {
  //     // there was an error
  //     console.log(err);
  //   }
  // );
  //   console.log('clicked');
  // }
  // const onRouteChange = (route) =>{
  //   setroute(route)
  //   if ( route === 'signin'){
  //     setisSignedIn (false);
  //   }else if ( route === 'home'){
  //     setisSignedIn (true);
  //   }
  // }

  return (
    <div className="App" >
      <Particles className = "particles"
                  params={particlesOptions} />

        <Navigation onRouteChange={props.onRouteChange} isSignedIn={props.isSignedIn}/>

          {
            (props.route === 'signIn')?
             <SignIn onRouteChange={props.onRouteChange}/>
          : (props.route === 'register')?
              <Register onRouteChange={props.onRouteChange} />
          :
              <div>
              <Logo />
              <Rank/>
              <ImageLinkForm onInputChange={props.onInputCHange} onSubmit ={props.onSubmit}/>
              <FaceRecognition imageUrl = {props.imageUrl} box= {props.box} />
              </div>
    }
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
