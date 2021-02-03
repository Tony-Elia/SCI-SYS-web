var system=navigator.userAgent.toLowerCase();
if(system.includes("android")){
  document.getElementById('side').style.display="initial";
}
var windows=navigator.userAgent.toLowerCase();
if(windows.includes("windows")){
  document.getElementById('site').style.display="initial";
}
  
  function opennav(){
document.getElementById('mysidenav').style.width="250px";
document.getElementById('main').style.width="250px";
  }
  function closenav(){
document.getElementById('mysidenav').style.width="0px";
document.getElementById('main').style.width="0px";
  }