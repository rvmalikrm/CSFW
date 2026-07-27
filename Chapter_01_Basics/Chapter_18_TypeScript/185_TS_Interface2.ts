interface APIResponse {
    readonly statusCode: number,
    body: string,
    header?: number,

}

let response : APIResponse={
    statusCode:200,
    body:'{"user":"Admin"}',
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body)
console.log("Header")
console.log("===============================")

interface data {
    readonly items : readonly number[]
};





