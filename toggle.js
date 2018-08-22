var i = 0;
var txt = 'Greenup Vermont Dashboard \n Written with HTML, CSS and javascript, we were tasked with finding a solution that would allow organizers of Greenup Day easy access to Greenup Vermont\'s collected app data.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()