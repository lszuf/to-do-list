var main = function () {

//Globals
var $blank_list_clone = $('.list-item-ttl').clone()
var $class_counter = 0

//New list item submitted
  $('.my-form').on('submit', function(event) {
    //Unique classes created for new list items
  	var $divClass = 'list-item-ttl' + $class_counter
  	var $labelClass = 'list-label' + $class_counter
    var $new_list_item = $('#new-list-input').val()

    //Determines if submitted item is the first
    if ($class_counter == 0) {
      $('.list-label').html($new_list_item)
      $('.list-item-ttl').addClass($divClass).show()
    } else {
      //Clones existing list item, adds unique classes, removes existing classes
      $('.list-item-ttl').clone().insertAfter($('.spacer')).addClass($divClass).removeClass($oldClass).removeClass('list-item-ttl')
      $('.' + $divClass).children('label').attr('class',$labelClass)
      //Changes text to submitted text
      $('.' + $labelClass).html($new_list_item)
    }

    event.preventDefault()
    $class_counter = $class_counter+1
    var $oldClass = $divClass
    $('form :input').val("")
  })
  
//Strikes out completed list items
  $('.my-form :checkbox').change(function () {
    if ($(this).is(':checked')) {
        $('.list-label').css({color:'#D3D3D3', 'text-decoration':'line-through'})
    } else {
        $('.list-label').css({color: 'black', 'text-decoration':'none' })
    }
  })
}

$(document).ready(main)