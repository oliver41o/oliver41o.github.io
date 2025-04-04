function e() {
    if (!(e2.value === "peter is stinky")) {
        console.log(window.location.href);
        console.log(e2.value);
        window.location.href = `https://www.google.com/search?q=${e2.value}&rlz=1CAQMZZ_enCA1152&oq=e&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIGCAIQRRg7MhAIAxAuGMcBGLEDGNEDGIAEMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQcxMjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on`;
    } else if (e2.value === "secret") {
        window.location.href = "secret";
    } else {
        console.log("peter is stinky");
    };
};
