

var deps = {};

function configFactory(depends){
    Object.assign(deps,depends);
}

class Injector{
    constructor(deps){        
        var localdeps = deps;        

        this.get = name=>localdeps[name]; 
        this.new = (deps)=>{
            let newDeps = {...localdeps};
            Object.assign(newDeps,deps);
            return new Injector(newDeps);
        }
    }
}


function newInjector(depends){
    let localDeps = {...deps};
    Object.assign(localDeps,depends);
    return new Injector(localDeps);
}


export default{
    config:configFactory,
    new:newInjector
};