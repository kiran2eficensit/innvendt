
$(function() {

    $("#Search").click(function(){
        window.location = '../assetvision.html#feature_1';
        
      });
      $("#onestop").click(function(){
        window.location = '../assetvision.html#feature_2';
      });
      $("#digi_lay").click(function(){
        window.location = '../assetvision.html#feature_3';
      });
      $("#earthe5iiot").click(function(){
        window.location = '../earthe5.html#feature_1';
        
      });
      $("#earthe5leakage").click(function(){
        window.location = '../earthe5.html#feature_2';
      });
      $("#earthe5earthpit").click(function(){
        window.location = '../earthe5.html#feature_3';
      });
    
      $("#smartsearch").click(function(){
        window.location = '../smartloto.html#feature_1';
        
      });
      $("#smartsmart").click(function(){
        window.location = '../smartloto.html#feature_2';
      });
      $("#smartcloud").click(function(){
        window.location = '../smartloto.html#feature_3';
      });
    
 });
 $(document).ready(function(){
    stylesheet.appendTo("head");
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     
