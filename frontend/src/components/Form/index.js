import React, {useState, Fragment} from 'react';
import {TextField, makeStyles, } from '@material-ui/core';
import { KeyStroke } from '../Button/index'
import {connect} from 'react-redux';
import {register, login} from '../../redux/AccountReducer.js/Account.actions'
const useStyles = makeStyles((theme) => ({
   root : {
       display : 'flex',
       flexDirection : 'column'
   },
   text : {
     margin : "1em 0em"
   }

}))

const Form = (props) => {
    const classes = useStyles();
    const [data, setData] = useState({
        username : "", password : ""
    })
    const changeHandler = (e) => {
           setData({...data, [e.target.name] : e.target.value})
    }
    
    const submit = () => {
        if(!!data.username && !!data.password){
            props.dispatch(props.state === 'register'? register(data) : login(data));
        }
    }
    return (<Fragment>
            
            <div className={classes.root}>
            <div style={{margin : "1em"}}>{props.message}</div>
                <TextField label={'Username'} name="username" variant={'outlined'} 
                className={classes.text}
                onChange={(e)=> changeHandler(e)} value={data.username}/>
                <TextField label={'Password'} 
                name="password"
                className={classes.text}
                value={data.password}
                onChange={(e)=> changeHandler(e)}
                variant={'outlined'}/>
                <KeyStroke button={props.state} submit={submit}/>
            </div>
    </Fragment>)

}
const mapStateToProps = (state) => {
    let {message} = state;
    return ({
        message 
    })
}
export default connect(mapStateToProps)(Form);