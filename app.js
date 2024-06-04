var img=['images/image1.jpg','images/image2.jpg','images/image3.jpg'];
var z=0;
document.getElementById('a').src=img[0];

function next(){
    z+=1;
    if(z>=img.length){
        z=0;
    }
    document.getElementById('a').src=img[z];
}

function pre(){
    z-=1;
    if(z<0){
        z=img.length-1;
    }
    document.getElementById('a').src=img[z];
}

