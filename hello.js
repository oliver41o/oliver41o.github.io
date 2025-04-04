function load(e) {
    if (e === "secret") {
        window.location.href = "secret";
    } else if (e === "peter is stinky") {
        console.log("peter is stinky");
    } else if (e.includes("https://")) {  // Fixed parentheses here
        window.location.href = e;
    } else if (e === "felix" && document.getElementById("clickerbox").value === "69") {  // Use string "69" for comparison
        document.getElementById("secretbox").style.display = "inline-block";  // Change `true` to "visible"
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e)}&safe=active`;
    }
}
