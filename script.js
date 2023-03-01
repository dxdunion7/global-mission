document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


  $(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}


function handleCopyTextFromParagraph() {
    alert("vkkk")
    // const cb = navigator.clipboard;
    // const paragraph = document.querySelector('p');
    // cb.writeText(paragraph.innerText).then(() => alert('Text copied'));
  }


  function handleCopyTextFromArea() {
    const area = document.querySelector('#clipboard-area')
    area.select();
    document.execCommand('copy')
    alert('Copied')
  }
  function handleCopyTextFromAreaBitcoin() {
    const area = document.querySelector('#clipboard-area-bitcoin')
    area.select();
    document.execCommand('copy')
    alert('Copied')
  }

  function handleCopyTextFromAreaEthereum() {
    const area = document.querySelector('#clipboard-area-ethereum')
    area.select();
    document.execCommand('copy')
    alert('Copied')
  }


  function handleCopyTextFromAreaCash() {
    const area = document.querySelector('#clipboard-area-cash')
    area.select();
    document.execCommand('copy')
    alert('Copied')
  }

  // Get the modal
	var modal = document.getElementById("myModal");
	
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}


    function myFunction() {
        var copyText = document.getElementById("address");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
      }
      
      function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }


      $(document).ready(function() {

		$('.second-panel').css('display' , 'none');
		$('#goback').css('display' , 'none');

		let amt20 = $('#amt20').html();
		let amt50 = $('#amt50').html();
		let amt100 = $('#amt100').html();
		let amt500 = $('#amt500').html();
		let amt1000 = $('#amt1000').html();
		$('#btn-20').click(function() {
            $('#amount').val(amt20);
		});
		$('#btn-50').click(function() {
            $('#amount').val(amt50);
		});
		$('#btn-100').click(function() {
            $('#amount').val(amt100);
		});
		$('#btn-500').click(function() {
            $('#amount').val(amt500);
		});
		$('#btn-1000').click(function() {
            $('#amount').val(amt1000);
		});
		$('#btn-custom').click(function() {
            $('#amount').val('');
		});

		$('#btn-continue').click(function() {
			if ( $('#amount').val() == '') {
				alert('Please Enter Amount to Donate');
			}
			else if ( $('#amount').val() < 5) {
				alert('Donation Amount should not be less than $5');
			} 
			else {
				$('.first-panel').css('display' , 'none');
				$('#goback').css('display' , 'block');
				$('#changehead').text('Add Your Information');
				$('.second-panel').css('display' , 'block').addClass('slide-in-right');
				$('#paid').html(parseFloat($('#amount').val()).toFixed(2));
		        $('#paid2').html(parseFloat($('#amount').val()).toFixed(2));
			}
		});

		$('#edit').click(function() {
			$('.first-panel').css('display' , 'block').addClass('slide-in-left');
				$('#goback').css('display' , 'none');
				$('#changehead').text('Choose Amount');
				$('.second-panel').css('display' , 'none');
		});

		$('#goback').click(function() {
			  $('.first-panel').css('display' , 'block').addClass('slide-in-left');
				$('#goback').css('display' , 'none');
				$('#changehead').text('Choose Amount');
				$('.second-panel').css('display' , 'none');
		});

		$('#supportukr').click(function() {
            $('#myModal').show();
		});

		$('#myBtn1').click(function() {
            $('#myModal').show();
		});

		$('#myBtn2').click(function() {
            $('#myModal').show();
		});
	});