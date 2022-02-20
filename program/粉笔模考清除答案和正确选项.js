for(var i = 0; i<document.getElementsByClassName('solu-detail').length;i++){
    i<document.getElementsByClassName('solu-detail')[i].remove();
}



for(var i = 0; i<document.getElementsByClassName('right-options').length;i++){
   var classVal = document.getElementsByClassName('right-options')[i].getAttribute('class').replace('right-options','');
   document.getElementsByClassName('right-options')[i].setAttribute('class',classVal);
}