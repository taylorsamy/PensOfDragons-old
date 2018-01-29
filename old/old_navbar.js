/* global  document:true */

function dropdownMenu() {


    var x = document.getElementById("navbarUnorderedList");

    if (x.className === "nav") {
        x.className += " responsive";

    } else {
        x.className = "nav";
    }
}
