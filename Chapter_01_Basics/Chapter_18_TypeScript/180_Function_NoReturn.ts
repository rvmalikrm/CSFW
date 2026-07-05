function sayHello(msg: string): void {
    console.log(msg);
}

// function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never -functionn never returns a value and never completes(throws  or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {

    }
}