

var subs = {};

function subscribe(key,$fn){
    let subsList = subs[key];
    if (!subsList){
        subsList = new Array();
        subs[key] = subsList;
    }
    let subscribtion = {
        fn:$fn
    }

    subsList.push(subscribtion);
    return ()=>{
        var subsList = subs[key];
        if (subsList){
            var i = subsList.indexOf(subscribtion);
            if (i>-1){
                subsList.splice(i,1);
            }
        }
    }
}



function emit(key,event){
    let subsList = subs[key];    
    if (subsList){    
        subsList.forEach(s=>s.fn(event));
    }
}


let eventbus =  {
    subscribe:subscribe,
    emit:emit
}

export default eventbus;
window.$eventbus = eventbus;