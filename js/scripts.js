// active class in navbar  
$(document).ready(function() {
            
    $( ".nav-item" ).bind( "click", function(event) {
        $(".active").removeClass("active");
        event.preventDefault();
        var clickedItem = $( this );
        $( ".nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});

// date
$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();

    var tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1); //today + 1
    tomorrow_month = (tomorrow.getMonth() + 1);
    tomorrow_day = tomorrow.getDate();

    if (month < 10) //i.e. 01-05-2020
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;

    if (tomorrow_month < 10) 
    tomorrow_month = "0" + tomorrow_month;
    if (tomorrow_day < 10) 
    tomorrow_day = "0" + tomorrow_day;

    var today = now.getFullYear() + '-' + month + '-' + day;
    var nextday = tomorrow.getFullYear() + '-' + tomorrow_month + '-' + tomorrow_day;

    $('#check-in').val(today);
    $('#check-out').val(nextday);
});

// news letter buttun click effect
    function footer_mousedown() {
        document.getElementById('news-letter').style.backgroundColor = '#222736';
    }

    function footer_mouseup() {
        document.getElementById('news-letter').style.backgroundColor = '#dfa974';
    }
