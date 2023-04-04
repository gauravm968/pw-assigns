const pBar = document.getElementById("progress-bar")

window.addEventListener("scroll", () =>{
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    pBar.style.width = `${scrollPercent}%`;
    // pBar.textContent = ""+scrollPercent.toFixed(0)+"%";
});