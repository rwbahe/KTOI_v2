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
            $("#nav-menu-button").css("background-image", "url(/images/nav-menu-cancel-mobile.png)")
        } else {
            $("#nav-dropdown-container").css("display", "none");
            $("#nav-menu-button").css("background-image", "url(/images/nav-menu-mobile.png)")
        }
    })
})