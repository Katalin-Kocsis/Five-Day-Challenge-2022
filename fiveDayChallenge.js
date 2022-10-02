console.log("Hello World"); //működik a fájlok összekötése

/* A kereső menüt teszem működőképessé: */
function myFunction() {
  //Declare variables:
  let input, filter, ul, li, i, a;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  //Loop through all list items, and hide those who don't match the search query:
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

