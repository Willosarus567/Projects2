var sx = document.getElementById('sx');               // Element to hold screenX
var sy = document.getElementById('sy');               // Element to hold screenY
var px = document.getElementById('px');               // Element to hold pageX
var py = document.getElementById('py');               // Element to hold pageY
var cx = document.getElementById('cx');               // Element to hold clientX
var cy = document.getElementById('cy');               // Element to hold clientY

function showPosition(event) {                            //Declare function
  sx.value = event.screenX;                               //Update element with ScreenX
  sy.value = event.screenY;                               //Update element with ScreenY
  px.value = event.pageX;                                 //Update element with pageX
  py.value = event.pageY;                                 //Update element with pageY
  cx.value = event.clientX;                               //Update element with clientX
  cy.value = event.clientY;                               //Update element with clientY
} 

var el = document.getElementById('body');                 //Get Body Element
el.addEventListener('mousemove', showPosition, false);    //Moves update position
  



$(function() {
 
  // SETUP 
  var $list, $newItemForm, $newItemButton;
  var item = '';                              // item is an empty string
  $list = $('ul');                            // Cache the unordered list
  $newItemForm = $('#newItemForm');           // Cache form to add new items
  $newItemButton = $('#newItemButton');        // Cache button to show form 
  
  $('li').hide().each(function(index) {       // Hide list items
    $(this).delay(450 * index).fadeIn(1500);  // Then fade them in 
  });
  
  // Item Counter 
  function updateCount() {                      // Declare function
  var items = $('li[class!=complete]').length /* Number of items in list, class being not equal too can be any 
                                                 name attached to said class, its in quotes so it won't affect it
                                                 what does matter is the.length which counts it and then the next line 
												 with counter having the number of the variables reported back to it.*/
	$('#counter').text(items);                  // Added into counter circle
  $('#TotalBox p').text('Total : $' +(5000 + 1500 * items));
  }
  
  // Submit Order
  $('#submitOrder').on('click', submitOrder); 
  function submitOrder() {
	if(confirm('are you sure?')) {
	   window.location.href = 'https://www.amazon.com/amazonprime/146-2165056-4003856?_encoding=UTF8&hvadid=275306224794&hvdev=c&hvexid=&hvnetw=g&hvpone=&hvpos=1t1&hvptwo=&hvqmt=e&hvrand=1179803684882760189&hvtargid=kwd-3151046130&ref=pd_sl_34qfrygf2i_e&tag=googhydr-20';	
	}
	}
  
  updateCount();                                // Call the function 
  
  /* SETUP FORM FOR NEW ITEMS, thats the initial button you see with newItemButton being shown and newItemForm being hidden. and when its clicked, 
     newItemButton is hidden and newItemForm is shown. */  
  $newItemButton.show();                        //Show the button
  $newItemForm.hide();                          //Hide the form 
  $('#showForm').on('click', function() {       //When the new item clicked
    $newItemButton.hide();                      //Hide the button
	$newItemForm.show();                        //Show the form
  });
  
  // ADDING A NEW LIST Item
  $newItemForm.on('submit', function(e) {       //When a new item is submitted
    e.preventDefault();                       //Prevent form from being submitted, when removed the new item created will reset the entire form. 
	var text = $('#newItemForm input:text').val();           //Get value of text input
    $list.append('<li class="purchase">' + text + '</li>');      //Add item to end of the list
    $('#newItemForm input:text').val('');                    //Empty the text input 
    updateCount();                              //Update the count
  });

  
  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
   $list.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    var complete = $this.hasClass('complete');  // Is item complete
	
    if (complete === true) {           // Check if item is complete
      $this.animate(
	  {                                // If so, animate opacity + padding
        opacity: 0.0,
        paddingLeft: '+=180',
      }, 500, 
	  'swing', 
	  function() {    // Use callback when animation completes
      	  $this.remove();                // Then completely remove this item
           updateCount();                   // Update the counter
	  });
  	   
    } else {                           // Otherwise indicate it is complete
      item = $this.text();             // Get the text from the list item
      $this.remove();                  // Remove the list item
      $list                            // Add back to end of list as complete
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);           // Hide it so it can be faded in
      
    }                                  // End of else option
  });                                  // End of event handler

});