function f(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback(null, "hello");
    }, 500);
}

function functionConverter(f){
    return function (...args){
        return new Promise((resolve, reject) => {
            f.call(this, ...args, (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }
}

const promisedFn = functionConverter(f);

promisedFn("test").then(console.log);

// test
// hello