jQuery(document).ready(function($){
    // Repeater Scripts
    $('.repeater').repeater({
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            if(confirm('Are you sute to delete this item?')) {
                $(this).slideUp(deleteElement);
            }
        },
        ready: function (setIndexes) {
        }
    });

    $('#menu-toggle').on('click', function(){
        $('#mobile-menu-items').toggle('fast');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#menu-toggle').length) {
            var mobile_menu = $('#mobile-menu-items');
            if (mobile_menu.css('display') == 'block') {
                mobile_menu.toggle('fast');
            }
        }        
      });
    // Delete Item
    $('.delete-item').on('click', function(e){
        e.preventDefault();
        var formId = $(this).data('form');
        var label = $(this).data('label');
        var confirmed = confirm(label);
        if(confirmed){
            $(formId).trigger('submit');
        }
    });

    // Search Icon
    $('.search-placeholder').on('click', '.search-icon', function(){
        $('#filter-wrap').slideToggle(400);
        $(this).addClass('hidden');
    });
});