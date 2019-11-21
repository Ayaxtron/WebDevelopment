class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);


class ShowImage
{
    DisplayImage() {
        var myloc = new Image();
        myloc.useMap = "img/bulb_off.jpg";
        var img = document.createElement('img')
        img.setAttribute('src', myloc.useMap);
        img.setAttribute('style',"height:149px;width:180px;");
        document.body.appendChild(img);
    }
}
 
window.onload = () =>
{
    var button = document.createElement('button')
    button.innerText = "Show";
    button.onclick = function ()
    {
        var image = new ShowImage();
        image.DisplayImage();
    }
    document.body.appendChild(button);  
};

var image2 = new ShowImage();
image2.DisplayImage();
        

document.addEventListener('DOMContentLoaded', () => {
    var bttn = document.getElementById("show");
    bttn.onclick = function (){
        var txtid = (document.getElementById("txtID")as HTMLInputElement).value;
        morse(txtid);
        console.log(txtid);
    }
    
    function morse(texto?:string){
    
    
    }
});



    
    

  