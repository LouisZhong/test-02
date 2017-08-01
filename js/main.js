
// 當靜態元素載入完畢，執行...
// function(){}
$(document).ready(function(){
    //當.toogle-chatroom被點擊時，執行function...
   $('.toogle-chatroom').click(function(){
      $('.chatroom').fadeToggle(); 
   });
});
