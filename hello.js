function load(e) {
    if (e === "secret") {
        window.location.href = "secret";
    } else if (e === "peter is stinky") {
        console.log("peter is stinky");
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e)}&safe=active`;
    }
}
