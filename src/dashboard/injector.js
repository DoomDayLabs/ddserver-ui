
var globals = {};

class Injector{
    
    constructor(locals){
        
        this.locals = locals||{};
    }
    
    require(name){
        return this.locals[name]||globals[name]||undefined;
    }
}

function makeInjector(locals){
    return new Injector(locals);
}

function append(objects){
globals = {...globals,...objects};    
}

export default {    
    get:makeInjector,
    append:append
}