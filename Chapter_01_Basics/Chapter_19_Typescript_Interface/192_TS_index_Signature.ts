interface StringDictionary {
    [key:string]: string;
}

const dict: StringDictionary={
    hello: "World",
    foo: "Bar"
}

console.log("Index Signature: "+ dict.key, " = "+ " dict.value")