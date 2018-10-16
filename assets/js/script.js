$(function(){
  $('input').focusin(function(){
    $(this).css('border','3px solid green');
  });
  $('input').focusout(function(){
    $(this).css('border','3px solid red');
  });
});
