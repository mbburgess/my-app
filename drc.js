function formreset() {
document.form.reset();
$(this).prop('checked',true);
}

function addHidden(theForm, key, value) {
    // Create a hidden input element, and append it to the form:
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;'name-as-seen-at-the-server';
    input.value = value;
    theForm.appendChild(input);

}


function mysubmit(tgt)     { 
   $('[name=target]').val(tgt); 
   console.dir($('form').serialize());
   $('form').submit(); 
   }

//$(document).unbind('click');
$(document).on('click', '.accordion-toggle', function(event) {
        event.stopPropagation();
        var $this = $(this);

        var parent = $this.data('parent');


        var actives  = parent && $(parent).find('.collapse.in');
        var actives2 = parent && $(parent).find('.active');
        console.log(parent);

        // From bootstrap itself
        if (actives && actives.length) {
            hasData = actives.data('collapse');
           // if (hasData && hasData.transitioning) return;
            actives.collapse('hide');
        }

        var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
        $(target).collapse('toggle'); 

           console.log(actives2);
           $(actives2).removeClass('active'); 

           var x = $this.closest("label");
           console.dir(x);
           x.addClass('active');
console.dir($('form').serialize()); 

});




  $( ".selector" ).on( "collapsibleexpand", function( event, ui ) {
     var theForm = document.forms['form'];

     var parent = event.target;
     var child = parent.childNodes[0];
     var childval = child.getAttribute("c_state");

     var arr = childval.split(':');
     console.dir(arr);
     addHidden(theForm,arr[0],arr[1]);
  });



