function tnOpen() {
let togglenav = document.createElement("div")
document.body.prepend(togglenav)
togglenav.classList.add("toggle-navbar")
togglenav.innerHTML = `
  <div id='web-name'>
    Coding <span style='color: #4c4ce6;'>Addict</span>
  </div>
<div class='list'>
<div class='list-item'>home</div>
<div class='list-item'>about</div>
<div class='list-item'>projects</div>
<div class='list-item'>contact</div>
</div>
    <div class="apps-icon-tn">
<img src="./pics/fb-bg.png" alt="" class="facebook">
<img src="./pics/in-bg.png" alt="" class="linkedin">
<img src="./pics/tw-bg.png" alt="" class="twiter">
    </div> 
`;
document.querySelector(".menubar").style.display = "none"
document.querySelector(".navbar").style.display = "none"
document.querySelector(".menubar-2").style.display = "flex"
document.body.classList.add("flex")
}

function tnClose() {
    document.querySelector(".toggle-navbar").style.display = "none"
    document.querySelector(".menubar").style.display = "flex"
document.querySelector(".navbar").style.display = "flex"
document.querySelector(".menubar-2").style.display = "none"
document.body.classList.remove("flex")

}