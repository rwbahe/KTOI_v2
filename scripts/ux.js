$(document).ready(function() {

    if (screen.width <= 414) {
        $("#nav-container").css("display", "none");
        $("#nav-dropdown-container").css("display", "none");
        $("#nav-container-mobile").css("display", "block");

    } else {
        $("#nav-container").css("display", "flex");
    }

    $("#nav-menu-button").click(function() {
        if ( $("#nav-dropdown-container").css("display") == "none" ) {
            $("#nav-dropdown-container").css("display", "block");
        } else {
            $("#nav-dropdown-container").css("display", "none");
        }
    })
})