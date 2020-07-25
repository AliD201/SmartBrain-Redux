import React from 'react';

const Navigation = (props) => {
  const isSignedIn = props.isSignedIn;

    if (isSignedIn){
      return (
        <nav style = {{ display :'flex', justifyContent:'flex-end'}}>
          <p onClick={()=>props.onRouteChange('signIn')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
        </nav>
      )
  }else {
    return (
        <nav style = {{ display :'flex', justifyContent:'flex-end'}}>
          <p onClick={()=>props.onRouteChange('home')} className='f3 link dim black underline pa3 pointer'> Sign In</p>

          <p onClick={()=>props.onRouteChange('register')} className='f3 link dim black underline pa3 pointer'> Register</p>
        </nav>
        )
  }

}

export default Navigation;
