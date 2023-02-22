
$(function () {
  //desktop icons click event
  $("#assetvision").click(function () {
    window.location = '../innvendt/assetvision.html';
  });
  $("#earthe5").click(function () {
    window.location = '../innvendt/earthe5.html';
  });
  $("#smartloto").click(function () {
    window.location = '../innvendt/smartloto.html';
  });
  //asset tabs 
  $("#asset_tab_1").click(function () {
    window.location = '../innvendt/assetvision.html#feature_1';
  });
  $("#asset_tab_2").click(function () {
    window.location = '../innvendt/assetvision.html#feature_2';
  });
  $("#asset_tab_3").click(function () {
    window.location = '../innvendt/assetvision.html#feature_3';
  });
  //earthe5 tabs
  $("#earthe5_tab_1").click(function () {
    window.location = '../innvendt/earthe5.html#feature_1';
  });
  $("#earthe5_tab_2").click(function () {
    window.location = '../innvendt/earthe5.html#feature_2';
  });
  $("#earthe5_tab_3").click(function () {
    window.location = '../innvendt/earthe5.html#feature_3';
  });
  //smartloto tabs
  $("#smartloto_tab_1").click(function () {
    window.location = '../innvendt/smartloto.html#feature_1';
  });
  $("#smartloto_tab_2").click(function () {
    window.location = '../innvendt/smartloto.html#feature_2';
  });
  $("#smartloto_tab_3").click(function () {
    window.location = '../innvendt/smartloto.html#feature_3';
  });
  //mobile tabs
  

});
$(document).ready(function () {
  $('#menu').load('../menu/menu.html');

  stylesheet.appendTo("head");
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});     
