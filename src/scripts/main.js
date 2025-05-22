import e from"lightgallery";
import l from"lightgallery/plugins/zoom";
import t from"lightgallery/plugins/thumbnail";
import"lightgallery/css/lightgallery.css";
import"lightgallery/css/lg-zoom.css";
import"lightgallery/css/lg-thumbnail.css";
document.addEventListener("DOMContentLoaded",()=>{let g=document.getElementById("lightgallery1");e(g,{selector:"a",plugins:[l,t],speed:500})}),
document.addEventListener("DOMContentLoaded",()=>{let g=document.getElementById("lightgallery2");e(g,{selector:"a",plugins:[l,t],speed:500})}),
document.addEventListener("DOMContentLoaded",()=>{let g=document.getElementById("lightgallery3");e(g,{selector:"a",plugins:[l,t],speed:500})});