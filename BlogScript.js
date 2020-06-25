//changing background switcher with different images
function changeBackground(id) {
    var btnValue = document.getElementById(id).value;
    var body = document.getElementsByClassName("style")[0];

    if (id === "image1") {
        body.style.backgroundImage = "url(image-1.jpg)";
    } else if (id === "image2") {
        body.style.backgroundImage = "url(image-2.jpg)";
    } else {
        body.style.backgroundImage = "url(image-3.jpg)";
    }
}

/* setting up for the resizer button*/
function fontResizer(){
    document.getElementById("Heading").style.fontSize= "45px";
}

//global variables
var parts = ['blog1', 'blog2', 'blog3', 'blog4'];
var chose = 0;
var dur;

//stop slides for blogs on Index HTML
function stopSlides() {
    clearInterval(dur)
}

//play slides for blogs on Index HTML
function playSlides() {
    //setInterval takes in two parameters, the function and timer
    dur = setInterval(()=> {
        //setting current selected blog to show
        document.getElementById(parts[chose]).style.display = "block";
        switch (chose) {
            case 0:
                document.getElementById(parts[1]).style.display = "none";
                document.getElementById(parts[2]).style.display = "none";
                chose = 1
                break;
            case 1:
                document.getElementById(parts[0]).style.display = "none";
                document.getElementById(parts[2]).style.display = " none";
                chose = 2
                break;
            case 2:
                document.getElementById(parts[0]).style.display = "none";
                document.getElementById(parts[1]).style.display = "none";
                chose = 0
                break;
            default:
                break;
        }
    }, 5000);
}





