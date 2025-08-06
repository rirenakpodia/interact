$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 100) {
        $('.employeeStick').display();
    } 
    if (y > 2920) {
        $('.employeeStick').fadeOut();
    } 
    else {
        $('.employeeStick').fadeIn();
    }

});