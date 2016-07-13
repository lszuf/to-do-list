var main = function () {

//Globals
var $blank_list_clone = $('.list-item-ttl').clone(true)
var $class_counter = 0

//New list item submitted
  $('.my-form').on('keydown', function(event) {
    
    var $new_list_item = $('#new-list-input').val()

    //If enter key is hit, and text has been entered
  	if (event.keyCode == 13 && ($new_list_item.length > 0)) {
    //Unique classes created for new list items
    var $divClass = 'list-item-ttl' + $class_counter
  	var $labelClass = 'list-label' + $class_counter
   
    //Determines if submitted item is the first
    if ($class_counter == 0) {
      //Changes text to submitted text
      $('.list-label').html($new_list_item)
      $('.list-item-ttl').addClass($divClass).show()
    } else {
      //Clones existing list item, adds unique classes, removes existing classes
      $('.list-item-ttl').clone(true).insertAfter($('.spacer')).addClass($divClass).removeClass($oldClass).removeClass('list-item-ttl')
      $('.' + $divClass).find('label').addClass($labelClass)
      //Changes text to submitted text
      $('.' + $labelClass).html($new_list_item)
    }

    event.preventDefault()
    $class_counter = $class_counter+1
    var $oldClass = $divClass
    $('form :input').val("")
  
    //If enter key is hit but not text was entered, prevent page reload
    } else if (event.keyCode == 13 && ($new_list_item < 1)) {
      event.preventDefault()
    }

  })

  //When list checkbox is toggled, change list item appearance
  $('.link').on('click', function(event) {
    if ($(this).children(":checkbox").is(":checked")){
      $(this).children('label').css({color:'#D3D3D3', 'text-decoration':'line-through'})
    } else {
      $(this).children('label').css({color: 'black', 'text-decoration':'none' })
    }
  })

  //When list item is clicked, create text box for editing
  $('label').on('click', function(event) {
    var $retain_class = $(this).attr('class')
    $(this).replaceWith('<input type="text" />').addClass($retain_class)
  })


  }

$(document).ready(main)