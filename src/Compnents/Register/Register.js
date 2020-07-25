import React from 'react';

const Register = (props) => {
  return (
    <div className="ba br2 center w-100 w-25-l w-50-m shadow-5 ">
    <main className="  pa4 black-80">
<form className="measure center">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f1 fw6 ph0 mh0">Register</legend>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
    </div>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
      <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
    </div>
  </fieldset>
  <div className="">
    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register & Sign in"
    onClick={()=>props.onRouteChange('home')}
    />
  </div>
</form>
</main>

    </div>
  )
}

export default Register;
