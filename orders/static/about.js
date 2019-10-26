window.onload=function(){
	
	setInterval(changeInnerText,6000);

    

}
lUser = document.querySelector('#log2').innerHTML
if(window.localStorage.getItem(lUser)!=undefined){
    document.querySelector('#shoppingCart').style.display="block"}
    
    var quotes=['You can order  our meals online', 'register and leave your adress', 'Please visit our Orders page to continue']
   
    function changeInnerText(){
	
	
    var url=quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('pText').classList.add('opaque')
      setTimeout(function(){document.getElementById('pText').classList.remove('opaque')}, 4000)
      document.getElementById('pText').innerHTML=url
      
  
      
      }


    function zip(){
        
        this.style.transformOrigin="50% 50%";
        if(this.id=='ch1'){this.style.transform ="translate(-10px,  -10px)";}
        else if(this.id=='ch2'){this.style.transform ="translate(10px,  -10px)";}
        else if(this.id=='ch3'){this.style.transform ="translate(-10px,  10px)";}
        else{this.style.transform ="translate(10px,  10px)";}
        
        this.style.transition="all 1s";
        
    }
    function zipOut(){
        this.style.transformOrigin="50% 50%";
        this.style.transform ="translate(0px, 0px)";
        this.style.transition="all 1s";
        
    }
   

     var menu1 = document.querySelector(".leftUpper")
     //menu1.style.zIndex="3"
     var ch1 = document.querySelector('#ch1')
     var text1 =document.createElement('p')
     text1.innerHTML="Home";
     text1.style.verticalAlign="middle"
     text1.style.margin="0 0 0 0"
     text1.style.width="100%"
     text1.style.height="auto"
     ch1.appendChild(text1);
     text1.style.position="absolute"
     text1.style.textOverflow="ellipsis"
     text1.style.top="40%"
     text1.style.left="15%"
     text1.style.zIndex="2"
     text1.style.margin="0"
     
     
     ch1.style.backgroundPosition="0% 0%"
     ch1.onmouseover=zip;
     ch1.onclick=index
     ch1.onmouseout=zipOut;
     ch1.style.borderRadius="100%  0 0 0 "
     ch1.style.boxShadow= "0px 0px 5px 5px white inset";
    
     
     var ch2 = document.querySelector('#ch2')
     var menu2 = document.querySelector(".rightUpper")
     ch2.style.backgroundPosition="100% 0"
     ch2.onmouseover=zip;
     ch2.onmouseout=zipOut;
     ch2.onclick=visibleMenu.bind(this, menu2);
     ch2.style.borderRadius="0  100% 0 0 "
     ch2.style.boxShadow= "0px 0px 5px 5px white inset";
     
     var text2 =document.createElement('p')
     ch2.appendChild(text2);

     text2.innerHTML="Pizza Crust";
     text2.style.position="absolute"
     text2.style.textOverflow="ellipsis"
     text2.style.top="40%"
     text2.style.left="5%"
     text2.style.zIndex="2"
     text2.style.margin="0"
     
     
     
     
     var ch3 = document.querySelector('#ch3')
     var menu3 = document.querySelector(".leftBottom")
     ch3.style.backgroundPosition="0% 100% "
     ch3.onmouseover=zip;
     ch3.onmouseout=zipOut;
     ch3.onclick=visibleMenu.bind(this, menu3);
     ch3.style.borderRadius="0  0  0 100%"
     ch3.style.boxShadow= "0px 0px 5px 5px white inset";
     
     var text3 =document.createElement('p')
     ch3.appendChild(text3);
     text3.innerHTML="Directions";
     text3.style.position="absolute"
     text3.style.textOverflow="ellipsis"
     text3.style.top="5%"
     text3.style.left="15%"
     text3.style.zIndex="2"
     text3.style.margin="0"
    
    
    
     var ch4 = document.querySelector('#ch4')
     var menu4 = document.querySelector(".rightBottom")
     ch4.style.backgroundPosition="100% 100%"
     ch4.onmouseover=zip;
     ch4.onmouseout=zipOut;
     ch4.onclick=visibleMenu.bind(this, menu4);
     ch4.style.borderRadius="0  0 100% 0  "
     ch4.style.boxShadow= "0px 0px 5px 5px white inset";
    
     var text4 =document.createElement('p')
     ch4.appendChild(text4);
     text4.innerHTML="Contact Us";
     text4.style.position="absolute"
     text4.style.textOverflow="ellipsis"
     text4.style.top="5%"
     text4.style.left="5%"
     text4.style.zIndex="2"
     text4.style.margin="0"

     const images=[
"https://media1.tenor.com/images/ce4476d7267ab4fda6371b5def13b02a/tenor.gif?itemid=7255450",


"https://i.makeagif.com/media/1-26-2016/TU7-bI.gif",
"https://media1.tenor.com/images/09c376c8f04037475dde155683ccce9e/tenor.gif?itemid=12756381",
"https://media.giphy.com/media/eeYtwiYHARla8/giphy.gif",
"https://media0.giphy.com/media/Q8l3aVDWxDHHi/source.gif"
]
function index(){
    location.href='/';
}

function changeBackground(n1, n2, n3, n4){
	
	setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
    n1.style.backgroundImage = 'url('+url+')'
	n2.style.backgroundImage = 'url('+url+')'
	n3.style.backgroundImage = 'url('+url+')'
	n4.style.backgroundImage = 'url('+url+')'
},5000);}
changeBackground(ch1, ch2, ch3, ch4)

function visibleMenu(el){
  var arr=document.querySelectorAll('.menuList')
  
 arr.forEach(my_function)
 
 function  my_function(item){
 
 item.classList.remove('visible')
 item.classList.add('hidden')}
 
 el.classList.remove('hidden')
 el.classList.add('visible')
 
 
 }