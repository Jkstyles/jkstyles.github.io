function show(id) {

    // var divsToHide = document.getElementsByClassName('bioBox')

    // if(divsToHide.length > 0){
    //     //divsToHide.classlist.add("hidden")

    //     divsToHide.forEach((div, index) => {

    //         div.classList.add("hidden")

    //     })

    // }

    document.getElementById('first').classList.add('hidden')
    document.getElementById('second').classList.add('hidden')
    document.getElementById('third').classList.add('hidden')

    var divToShow = document.getElementById(id);
    divToShow.classList.remove("hidden");

}

function hide() {
    var element = document.getElementById("first");
    element.classList.add("one");
}