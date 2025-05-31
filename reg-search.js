function reg_search(e) {
    document.getElementById("searchInputBox").value = "";
    if (e === "secret") {
        window.location.href = "secret";
    } else if (e === "peter is stinky") {
        console.log("peter is stinky");
    } else if (e.includes("https://")) {
        window.location.href = e;
    } else if (e === "felix" && document.getElementById("clickerBox").value === "69") {
        let a = document.getElementsByClassName('secretbox'); for (let i = 0; i < a.length; i++) {a[i].style.display='block'}
    } else if (e === "music") {
        window.location.href = "music";
    } else if (e === "hianime") {
        document.querySelector('#hianime').style.display = 'block';
    } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e)}&safe=active`;
    };
};
