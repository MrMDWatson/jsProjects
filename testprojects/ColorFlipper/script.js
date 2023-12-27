function change() {
    const colors = ["green", "red", "sandyBrown", "gray"];
    const display = document.getElementById("textDisplay");
    const display2 = document.getElementById("textDisplay2");
    const color1 = document.querySelector("header");
    const name = document.getElementById("name").value;
    const color = colors[Math.floor(Math.random() * 4)];
    display.innerText = color;
    display2.innerText = name;
    color1.style.backgroundColor = color;
}