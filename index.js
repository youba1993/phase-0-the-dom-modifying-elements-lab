// Write your code here!
document.getElementById("main").remove();
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
//document.body.append(newHeader) //when i use this method it's not passinf the test but in the navigator working well
newHeader.innerHTML = "<h1 id=\"victory\">Youba is the champion</h1>";

