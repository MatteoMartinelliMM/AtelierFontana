var path = window.location.pathname;
var page = path.substring(path.lastIndexOf('/') + 1).split(".")[0];
let sectionsDiv = document.getElementById('sectionsDiv');
Array.from(sectionsDiv.children).forEach(function (sec) {
    console.log(sec.id);
    console.log(page);
    console.log(sec.id !== page)
    if (sec.id !== page) {
        sec.href = `../html/${sec.id}.html`;
        console.log(sec.href);
    }
});

function menuBuilding() {

}