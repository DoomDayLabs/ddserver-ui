import React from 'react';
import ReactDOM from 'react-dom';
import {Layout,Panel,AppBar,Button,Input,FontIcon,ProgressBar} from 'react-toolbox';
import theme from './auth.css';
import Api from './api';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            login:'',
            passwd:'',
            error:'',
            progress:false,
        };
    }
    handleLoginChange(login){
        this.setState({login,error:''});
    }
    handlePasswordChange(passwd){
        this.setState({passwd,error:''});
    }
    handleLoginClick(){
        this.setState({progress:true});
        Api.login(this.state.login,this.state.passwd)
        .then(()=>{

        })
        .catch(()=>{
            let error = 'Incorrect login or password';
            this.setState({error,progress:false});
        });
        
    }
    render(){  
           
        return <div className={theme.authWrapper}>
                <form>
                <FontIcon value='account_circle' style={{fontSize:'100px',color:'rgb(63, 81, 181)'}}/>
                <Input label='Login' 
                        type='text' 
                        value={this.state.login} 
                        onChange={login=>this.handleLoginChange(login)}
                        error={this.state.error} />
                <Input label='Password' 
                        type='password' 
                        value={this.state.passwd} 
                        onChange={login=>this.handlePasswordChange(login)}
                        error={this.state.error} />
                <Button icon='arrow_forward' 
                        label='Login' 
                        onClick={()=>this.handleLoginClick()}
                        raised primary/>
                
                {this.state.progress==true?<ProgressBar  />:null}
                </form>
            </div>
    }
}

ReactDOM.render(<App />,document.getElementById('root'));