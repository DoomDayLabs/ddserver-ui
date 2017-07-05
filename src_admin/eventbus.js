

var subs = {};

function subscribe(key,$fn){
    let subsList = subs[key];
    if (!subsList){
        subsList = new Array();
        subs[key] = subsList;
    }
    subsList.push($fn);
}



function emit(key,event){
    let subsList = subs[key];    
    if (subsList){    
        subsList.forEach(fn=>fn(event));
    }
}


let eventbus =  {
    subscribe:subscribe,
    emit:emit
}

export default eventbus;
window.$eventbus = eventbus;