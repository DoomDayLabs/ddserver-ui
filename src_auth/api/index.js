import {request} from 'popsicle';

function tryLogin(login,passwd){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject(),2000);
    });
}
export default{
    login:tryLogin
}