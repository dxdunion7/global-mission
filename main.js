
// *********************Animated Counters***************************************//

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
};
  //


  function myButton() {
    document.getElementById("amount").value = "50";
  }
  function myButton2() {
    document.getElementById("amount").value = "100";
  }
  function myButton3() {
    document.getElementById("amount").value = "500";
  }
  function myButton4() {
    document.getElementById("amount").value = "1200";
  }



  
// ******************************//

$(document).ready(function () {
    $("#button1").click(function (event) {
      event.preventDefault();
      $("#button1").addClass('border-primary');
      $("#button2").removeClass('border-primary');
      $("#item1").show();
      $("#item3").show();
      $("#item2").hide();
      $("#item4").hide();
    });
    $("#button2").click(function (event) {
      event.preventDefault();
      $("#button2").addClass('border-primary');
      $("#button1").removeClass('border-primary');
      $("#item2").show();
      $("#item4").show();
      $("#item1").hide();
      $("#item3").hide();
    });
  });
