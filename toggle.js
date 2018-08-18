function show(id) {
    document.getElementById('first').classList.add('hidden')
    document.getElementById('second').classList.add('hidden')
    document.getElementById('third').classList.add('hidden')

    var divToShow = document.getElementById(id);
    divToShow.classList.remove("hidden");

}

// function hide() {
//     var element = document.getElementById("first");
//     element.classList.add("one");
// }