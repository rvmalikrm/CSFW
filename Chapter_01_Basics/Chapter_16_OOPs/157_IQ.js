class APIClient {
    constructor(base_url) {
        this.base_url=base_url;
    }
    get(path){
        return this.base_url+path
    }
}

    let staging = new APIClient("https://staging.example.com");
    let production = new APIClient("https://api.example.com");

    console.log(staging.get("/users"));
    console.log(production.get("/users"));

