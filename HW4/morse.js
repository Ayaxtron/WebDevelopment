var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
var ShowImage = /** @class */ (function () {
    function ShowImage() {
    }
    ShowImage.prototype.DisplayImage = function () {
        var myloc = new Image();
        myloc.useMap = "img/bulb_off.jpg";
        var img = document.createElement('img');
        img.setAttribute('src', myloc.useMap);
        img.setAttribute('style', "height:149px;width:180px;");
        document.body.appendChild(img);
    };
    return ShowImage;
}());
window.onload = function () {
    var button = document.createElement('button');
    button.innerText = "Show";
    button.onclick = function () {
        var image = new ShowImage();
        image.DisplayImage();
    };
    document.body.appendChild(button);
};
var image2 = new ShowImage();
image2.DisplayImage();
document.addEventListener('DOMContentLoaded', function () {
    var bttn = document.getElementById("show");
    bttn.onclick = function () {
        var txtid = document.getElementById("txtID").value;
        morse(txtid);
        console.log(txtid);
    };
    function morse(texto) {
    }
});
