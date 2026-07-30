let responseCodes = [200, 201, 400, 404, 500];
function getFailedcodes(codes) {
    return codes.filter(function (code) {
        return code >= 400;
    });
}
console.log("All Codes: ", responseCodes);
console.log("Failed Codes: ", getFailedcodes(responseCodes));
export {};
//# sourceMappingURL=183_Filter_Array.js.map