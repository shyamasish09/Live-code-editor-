// Live Code Editor Script

function updatePreview() {
  const html = document.getElementById("htmlCode").value;
  const css = "<style>" + document.getElementById("cssCode").value + "</style>";
  const js = "<script>" + document.getElementById("jsCode").value + "<\/script>";
  const previewFrame = document.getElementById("preview").contentWindow.document;
  
  previewFrame.open();
  previewFrame.write(html + css + js);
  previewFrame.close();
}

// Add event listeners to all textareas
document.querySelectorAll("textarea").forEach(area => {
  area.addEventListener("input", updatePreview);
  
  // Add typing effect with glow
  area.addEventListener("keydown", function(e) {
    this.style.boxShadow = "inset 0 0 30px rgba(0, 242, 254, 0.2)";
    setTimeout(() => {
      this.style.boxShadow = "";
    }, 200);
  });
});

// Initial preview update
updatePreview();

// Add dynamic background effect
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  document.body.style.backgroundPosition = `${x}% ${y}%`;
});

// Add keyboard shortcut (Ctrl/Cmd + S to save)
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "s") {
    e.preventDefault();
    console.log("Save functionality - coming soon!");
  }
});