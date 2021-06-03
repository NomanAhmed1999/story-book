


var story1 = document.getElementById('story1');
story1.style.display = "block";

var story2 = document.getElementById('story2');
story2.style.display = "none";

var story3 = document.getElementById('story3');
story3.style.display = "none";

var story4 = document.getElementById('story4');
story4.style.display = "none";

var story5 = document.getElementById('story5');
story5.style.display = "none";

var story6 = document.getElementById('story6');
story6.style.display = "none";

var story7 = document.getElementById('story7');
story7.style.display = "none";

var story8 = document.getElementById('story8');
story8.style.display = "none";

var story9 = document.getElementById('story9');
story9.style.display = "none";

var story10 = document.getElementById('story10');
story10.style.display = "none";







var next = _ => {
    if(story1.style.display == "block"){
    story1.style.display = "none";
    story2.style.display = "block";


}else if(story2.style.display == "block"){
    story2.style.display = "none";
    story3.style.display = "block";  


}else if(story3.style.display == "block"){
    story3.style.display = "none";
    story4.style.display = "block";  


}else if(story4.style.display == "block"){
    story4.style.display = "none";
    story5.style.display = "block";  


}else if(story5.style.display == "block"){
    story5.style.display = "none";
    story6.style.display = "block";  


}else if(story6.style.display == "block"){
    story6.style.display = "none";
    story7.style.display = "block";  


}else if(story7.style.display == "block"){
    story7.style.display = "none";
    story8.style.display = "block"; 


}else if(story8.style.display == "block"){
    story8.style.display = "none";
    story9.style.display = "block";  


}else if(story9.style.display == "block"){
    story9.style.display = "none";
    story10.style.display = "block";  
}
}

var pre = _ => {
    if(story10.style.display == "block"){
    story10.style.display = "none";
    story9.style.display = "block";


}else if(story9.style.display == "block"){
    story9.style.display = "none";
    story8.style.display = "block";  


}else if(story8.style.display == "block"){
    story8.style.display = "none";
    story7.style.display = "block";  


}else if(story7.style.display == "block"){
    story7.style.display = "none";
    story6.style.display = "block";  


}else if(story6.style.display == "block"){
    story6.style.display = "none";
    story5.style.display = "block";  
    
    
}else if(story5.style.display == "block"){
    story5.style.display = "none";
    story4.style.display = "block";  
    
    
}else if(story4.style.display == "block"){
    story4.style.display = "none";
    story3.style.display = "block"; 
    
    
}else if(story3.style.display == "block"){
    story3.style.display = "none";
    story2.style.display = "block";  
    
    
}else if(story2.style.display == "block"){
    story2.style.display = "none";
    story1.style.display = "block";  
}
}


var imgSize = _ => {
    var image = document.getElementsByClassName('img-size');
    image[0].setAttribute('class','size-up');
    var closeBtn = document.getElementById('close-btn');
    closeBtn.style.display = "block";
}

var closeBtn = document.getElementById('close-btn');
var cancel = _ => {
    var image = document.getElementsByClassName('img-size');
    var img1 = document.getElementById("img-size1");
    var img2 = document.getElementById("img-size2");
    var img3 = document.getElementById("img-size3");
    var img4 = document.getElementById("img-size4");
    var img5 = document.getElementById("img-size5");
    var img6 = document.getElementById("img-size6");
    var img7 = document.getElementById("img-size7");
    var img8 = document.getElementById("img-size8");
    var img9 = document.getElementById("img-size9");
    var img10 = document.getElementById("img-size10");
    
    if(story1.style.display == "block"){
        img1.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
    }else  if(story2.style.display == "block"){
        img2.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story3.style.display == "block"){
        img3.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story4.style.display == "block"){
        img4.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
    }else  if(story5.style.display == "block"){
        img5.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story6.style.display == "block"){
        img6.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story7.style.display == "block"){
        img7.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story8.style.display == "block"){
        img8.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else  if(story9.style.display == "block"){
        img9.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
        
    }else if (story10.style.display == "block"){
        img10.setAttribute('class','size-down')
        console.log(img1)
        closeBtn.style.display = "none";
    }




}