function iframe_search(e) {
    const iframe = document.createElement("iframe");
    iframe.width = "500x";
    iframe.height = "400px";
    
    const br = document.createElement("br");

    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(iframe);

    if (e === "secret") {
        iframe.src = "https://olivery4.github.io/secret";
    } else if (e === "peter is stinky") {
        console.log("peter is stinky");
    } else if (e.includes("https://")) {
        iframe.src = e;
    } else if (e === "felix" && document.getElementById("clickerbox").value === "69") {
        document.getElementById("secretbox").style.display = "inline-block";
    } else if (e === "music") {
        iframe.src = "https://olivery4.github.io/music";
    } else {
        iframe.remove();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(e)}&safe=active`, "_blank");
    };
};
