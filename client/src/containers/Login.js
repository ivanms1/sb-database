import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from "react-router-dom";
import { successReq, sendLogin } from '../actions';


const renderInput = ({input, meta, name, label, type}) => (
    <div className="input-field">
        <input id={name} type={type} required="true" className="validate" {...input}/>
        <label htmlFor={name} >{label}</label>
        <span className="helper-text" data-error={`Invalid ${label}`} data-success=""></span>
    </div>
)

let Login = ({getContactData, redirect, handleSubmit, values, sendLogin}) => {
    function login(values){
      sendLogin(values)
    }
		return (
      <React.Fragment>
        <h3 className="login-title">SB Database</h3>
  			<form className="edit-form" onSubmit={handleSubmit((values) => login(values))}>
            <Field name='email' type="email" label="Email" component={renderInput} />
            <Field name="password" type="password" label="Password" component={renderInput}/>
        <div className="edit-buttons">
            <button className="btn waves-effect waves-light z-depth-5" type="submit">Submit</button>
          </div>
    </form>
    {
      redirect ? <Redirect to='/contacts'/>
      :
      null
    }
      </React.Fragment>
		);
};

Login = reduxForm({
  form: 'login',
  enableReinitialize: true
})(Login)

Login = connect(
  state => ({
    redirect: state.contactData.success
  }),
  { successReq, sendLogin }
  )(Login)

export default Login;
