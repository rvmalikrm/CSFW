let browser = "Safari";
switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Internet Explorer":
        console.log("Chromium  browser");
        break;
    case "Safari":
        console.log("Webkit browser");
        break;
    case "Opera":
        console.log("Blink browser");
        break;
    case "Firefox":
        console.log("Geecko browser");
        break;
    default:
        console.log("Unsupported browser");
}