function load(e) {
    if (!(e.value === "peter is stinky")) {
        console.log(window.location.href);
        console.log(e.value);
        window.location.href = `https://www.google.com/search?q=${e.value}&rlz=1CAQMZZ_enCA1152&oq=e&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIGCAIQRRg7MhAIAxAuGMcBGLEDGNEDGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQcxMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on`;
    } else if (e.value === "secret") {
        window.location.href = "secret";
    } else {
        console.log("peter is stinky");
    };
};
