let responseCodes:number[] = [200, 201, 400, 404, 500];

function getFailedcodes(codes:number[]):number[]
{
    return codes.filter(function (code:number):boolean
    
    {
        return code >= 400; 
    }
);
}

console.log("All Codes: ", responseCodes);
console.log("Failed Codes: ", getFailedcodes(responseCodes));