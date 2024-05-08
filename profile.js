var imageID = 0;
function changeimage(every_seconds) {
  var images = ["p1.jpg","p2.jpg","p6.jpg","p7.jpg","p8.jpg"];
  document.getElementById("myimage").src = images[imageID];
  imageID = (imageID + 1) % images.length;
  setTimeout(function() {
    changeimage(every_seconds);
  }, every_seconds * 1000);
}

changeimage(10);

function scrollToProject() {
    var projectSection = document.getElementById("projectSection");
    projectSection.scrollIntoView({ behavior: "smooth" });
}
