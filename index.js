

function receivesAFunction(cb){
    cb()
}

function returnsANamedFunction(){
    return function sample(yoyo){console.log(yoyo)}
}

function returnsAnAnonymousFunction(){
    return function (yoyo){console.log(yoyo)}
}