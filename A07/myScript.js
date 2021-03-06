function getClasses(elem) {
    var x = elem[0].className;
    var classes = new Array();
    var temp = "";
    for (var i = 0; i < x.length; i++) {
        if (x.charAt(i) != " " ){
            temp += x.charAt(i);
        }
        else {
            classes.push(temp);
            temp = "";
        }
    }
    classes.push(temp);
    return classes;
}

function addClasses(elem, className) {
    var x = elem[0].className;
    var y = getClasses(elem);
    for (var i = 0; i < y.length; i++) {
        if (y[i] == className ){
            return false;
        }
    }
    if (x == ""){
        elem[0].className = className;
    }
    else {
        elem[0].className = x.concat(" ".concat(className));
    }
    return false;
}