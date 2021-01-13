import React from 'react';
import { withFormik } from 'formik';
import {withContext} from '../AuthContext';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
export class Login extends React.Component {
    
  componentDidMount(){
    
  }

  render(){
        const {values,touched,errors,handleChange,handleBlur,handleSubmit} = this.props;
        return (
          <div className="App">
            <div className="container">
              <div className="row mt-5">
            <div className="col-sm-4">    
              </div>
          <div className="col-sm-4 mt-5">    
            <div className="panel mt-5">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                    <div className="form-group mt-5">
                      <input className="form-control" onChange={handleChange} value={values.email} name="email" type="text" placeholder="username"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" onChange={handleChange} type="password" value={values.password} name="password" placeholder="password"/>
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary" type="Submit" value="Login"/> 
                    </div>
                </form>
                </div>
          </div>
            <div className="col-sm-4">    
            </div>
            </div>
            </div>
            
          </div>
        )}
}

const mapDispatchToProps=(dispatch)=>{

  return {
    navigateToDashboard:()=>dispatch(push({pathname: '/dashboard', state: {stepIndex: 1, increment: true}}))
  }
}

export default connect(null,mapDispatchToProps)(withContext(withFormik({
    mapPropsToValues:(values)=>({
      email:'',
      password:''
    }),
    handleSubmit:(values, {props})=>{
       props.login(values).then((response)=>{
        if(response.status===200){
            props.gotoDashboard(props.history);
        }
       }); 
    }
  })(Login)));