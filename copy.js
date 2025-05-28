function copy(content) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(content)
          .then(() => alert("Copied!"))
          .catch(err => {
            console.warn("Clipboard API failed:", err);
            fallbackCopy(content);      
          });
      } else {
        fallbackCopy(content);
      }
}

    // Fallback using a hidden textarea and execCommand
function fallbackCopy(content) {
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      
      textarea.select();
      textarea.setSelectionRange(0, 99999); // iOS support
      
      try {
        const successful = document.execCommand('copy');
        alert(successful ? "Copied (fallback)!" : "Fallback failed");
      } catch (err) {
        alert("Fallback copy failed: " + err);
      }
      
      document.body.removeChild(textarea);
}
