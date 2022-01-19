var numnames = 0;
var names = new Array();

function sortNames() {
    thename = document.theform.newname.value;
    names[numnames] = thename.toUpperCase();
    numnames++;
    names.sort();
    document.theform.sorted.value = names.join("\n");
}
