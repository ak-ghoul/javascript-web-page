function ak(){
document.getElementById('tehe').innerHTML=Date();
}
function yo(ele){
document.getElementById('storm').innerHTML=ele.alt;
document.getElementById('storm').style.backgroundImage="url(" + ele.getAttribute('src') + ")";
}
function au(a){
document.getElementById('midoriya').innerHTML=a +" event.";
}
function disp(){
if(document.getElementById('nickname').checked){
document.getElementById('all').style.display="inline";
document.getElementById('inp').setAttribute('required',true);
}
else{
document.getElementById('all').style.display="none";
document.getElementById('inp').removeAttribute('required');
}
}
function submit(){
  var a=document.getElementById('ino');
  var b=document.getElementById('inp');
  if(a.value==b.value){
    alert("Name and nickname can't be same.");
    return false;
  }
}
