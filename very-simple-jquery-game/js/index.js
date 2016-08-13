var counter = 0;
var seconds = 0;
document.getElementById("counter").getElementsByTagName("span")[0].innerHTML=counter;
document.getElementById("timer").getElementsByTagName("span")[0].innerHTML=seconds;

document.getElementById('start').hidden = true; 
document.getElementById('win').hidden = true;
document.getElementById('endScreen').hidden = true;

document.getElementById("startGame").onmouseover = function() {
  document.getElementById("startGame").hidden = true;
  var randWidth = Math.ceil(Math.random() * 350);
  var randHeight = Math.ceil(Math.random() * 350);
  
  document.getElementById("win").hidden = false;
  document.getElementById("win").style.top = randHeight + 'px';
  document.getElementById("win").style.left = randWidth + 'px';
  
   window.setInterval(function(){
      seconds = seconds + 1;
      document.getElementById("timer").getElementsByTagName("span")[0].innerHTML=seconds;
    }, 1000); 
};

document.getElementById('start').onmouseover = function() {
  
  var randWidth  = Math.ceil(Math.random() * 350);
  var randHeight  = Math.ceil(Math.random() * 350);
  
  document.getElementById('win').hidden = false;
  document.getElementById('win').style.top = randHeight + 'px';
  document.getElementById('win').style.left = randWidth + 'px';
  document.getElementById('start').hidden = true;
};

document.getElementById('win').onmouseover = function() {
  counter = counter + 1;
  document.getElementById("counter").getElementsByTagName("span")[0].innerHTML = counter;
  
  if(counter == 10){
  document.getElementById('endScreen').hidden = false;
    document.getElementById("endCount").innerHTML = counter;
    document.getElementById("endSeconds").innerHTML = seconds;
  }
  
  document.getElementById('win').hidden = true;
  document.getElementById('start').hidden = false;
  
};
