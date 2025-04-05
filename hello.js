function load(e) {
    if (e === "secret") {
        window.location.href = "secret";
    } else if (e === "peter is stinky") {
        console.log("peter is stinky");
    } else if (e.includes("https://")) {
        window.location.href = e;
    } else if (e === "felix" && document.getElementById("clickerbox").value === "69") {
        document.getElementById("secretbox").style.display = "inline-block";
    } else if (e === "music") {
        window.location.href = "music";
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e)}&safe=active`;
    };
};
