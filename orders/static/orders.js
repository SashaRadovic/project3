window.onload=function(){
	
	

    lUser = document.querySelector('#orderListInput').value
    console.log(lUser)
    document.querySelector('#shoppingCart').style.display="none"
    if(window.localStorage.getItem(lUser)!=undefined){
        document.querySelector('#shoppingCart').style.display="block"
	//alert(lUser)
	let string=window.localStorage.getItem(lUser)
    console.log(string)
	let array= JSON.parse(string)
	for (var a=0;a<array.length;a++){
	var inputKart=Object.keys(array[a])
	
	for(var i =0;i<inputKart.length;i++){
		addToList(inputKart[i])
		if(array[0][inputKart[i]] !=[]){
		for (var j=0;j<array[a][inputKart[i]].length;j++){
			let topp =array[a][inputKart[i]]
			
			addToListTopp(topp[j])
		}
		}
	}
}	
}


setInterval(changeInnerText,6000);


}

        placement=[]
        topp=[]


function orderConfirm1(){
 
 var final = document.querySelector('#finalInput')
 
 document.querySelector('#orderConfirm').style.display="none"
 document.querySelector('#orderSubmit').style.display="inline-block"
 document.querySelector('#orderCancel').style.display="inline-block"
 

var confirmList=document.querySelector('.orderlist').children
	
for(var i =0;i<confirmList.length;i++){
console.log(confirmList[i])
toppingsPlacement=[]
var testing = confirmList[i].firstChild.value
placement.push({[testing]:toppingsPlacement})
console.log(testing)
if(confirmList[i].lastChild.classList.contains('topping')){
	var toppingsList=confirmList[i].children
    console.log(toppingsList)
	for(var j=0;j<toppingsList.length;j++){
	if(toppingsList[j].classList.contains('topping')){
	var toppings = toppingsList[j].lastChild.value
	toppingsPlacement.push(toppings)
	console.log(JSON.stringify(toppingsPlacement))}}
	}

console.log(JSON.stringify(placement)); 
}

 final.value=JSON.stringify(placement)
 window.localStorage.setItem(lUser, final.value)
 

}

function cancelOrder(){
    window.localStorage.clear()
    document.querySelector('#shoppingCart').style.display="none"
    placement=[]
    topp=[]
    document.querySelector('.orderlist').innerHTML=""
    location.reload(true);
}

function showPost(){ 

placement=[]
topp=[]
window.localStorage.clear()
//document.querySelector('.orderlist').innerHTML=""
var final = document.querySelector('#finalInput');
document.querySelector('#shoppingCart').style.display="none"



}
    function click(e){
        e.preventDefault()
        var final=document.getElementById('finalorder')
        final.value=JSON.stringify(placement)
        document.getElementById('submitButton').style.display="none"
        document.getElementById('submit').style.display="block"
        
    }
    val=0


    function addToList(el){
        let div = document.createElement('div')
        var li =document.createElement('textarea')
        var a =document.createElement('a')
        let x=document.getElementsByClassName('toppings')
            
        Array.prototype.forEach.call(x, function(item){
            item.style.visibility="visible"
        })
        div.style.marginTop="0.1em"
        a.innerText ="-"//String.fromCodePoint(0x1F355)
      
        a.href="#"
        a.style.cursor="pointer"
        li.value=el//+" "+type+" "+price  /*"<a href=\"#\" onclick=gone(this)>-</a>"*/
        var liTopp=document.querySelector('.topp')
        if(el.slice(0, 4) !="Chee" && el.indexOf('Pizza')!==-1 ){//&& el.slice(4)!="B"
        
        liTopp.style.display="block"}
        document.querySelector('.orderlist').appendChild(div)
        li.style.width="90%"
        
        div.appendChild(li)
        div.appendChild(a)
        name=el
       var price= el.slice(-5)
       
        var tot =document.querySelector('#total')
       val-=  -Math.round(price*100)/100
       tot.value=val.toFixed(2)
	   
       
       
       
        a.style.position="absolute"
	    a.style.right="2%"
        a.title="Remove"
        a.onclick = gone
        if(el.slice(0, 4) !="Chee"&& el.indexOf('Pizza')!==-1 ){
            document.querySelector('.pizzaList').style.visibility="hidden"}
            document.querySelector('#orderConfirm').style.display="block"
            document.querySelector('#shoppingCart').style.display="block"
     
    }


    function visibleMenu(el){
	 var arr=document.querySelectorAll('.menuList')
	 
	arr.forEach(my_function)
	
	function  my_function(item){
	
	item.classList.remove('visible')
	item.classList.add('hidden')}
	
	el.classList.remove('hidden')
	el.classList.add('visible')
	
	
	}



    function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


    function gone(){
        console.log()
        let x=document.getElementsByClassName('toppings')
                console.log(x)
        Array.prototype.forEach.call(x, function(item){
            item.style.visibility="visible"
        })
                var liTopp=document.querySelector('.topp')
        liTopp.style.display="none"
        
        var tot =document.querySelector('#total')
        let inputValue=this.parentNode.firstChild.value
        let price = inputValue.slice(inputValue.length -5)
        document.querySelector('.pizzaList').style.visibility="visible"
        this.parentNode.parentNode.removeChild(this.parentNode)
       
        val-=  Math.round(price*100)/100
        tot.value=val.toFixed(2)

        
    }
    
    function goneTopp(){
       
        let x=document.getElementsByClassName('toppings')
         //       console.log(x)
        
                var liTopp=document.querySelector('.topp')
        
        if(!this.parentNode.parentNode.nextSibling){
        this.parentNode.parentNode.removeChild(this.parentNode)
        liTopp.style.display="block"
        document.querySelector('.pizzaList').style.visibility="hidden"
        }
        console.log(this)
    }
    
    function addToListTopp(el){
        
        
        var di =document.querySelector('.orderlist').lastChild
        var li = di.getElementsByTagName('textarea')[0]
       
        let tp	= document.createElement('input')
        tp.name="topping"
        var a =document.createElement('a')
        let div = document.createElement('div')
        div.classList.add('topping')
        a.innerText = "-"//String.fromCodePoint(0x1F355)
        a.title="Remove"
        tp.value =el
        topp.push(el)
        tp.className="sublist"
        tp.style.width="80%"
        a.style.position="absolute"
	    a.style.right="4%"
       
        a.onclick = goneTopp
        
        
        a.href="#"


        di.appendChild(div)
        div.appendChild(a)
        div.appendChild(tp)

        if (li.value.slice(0,4)=="Chee"){var toppNumber=0}
        else if(li.value.slice(0,4)=="Spec"){var toppNumber=4}
        else{
        var toppNumber=li.value[0]}
        if (di.childElementCount-2 <=toppNumber){
            if(di.childElementCount-2 ==toppNumber){
                document.querySelector('.pizzaList').style.visibility="visible"
                var liTopp=document.querySelector('.topp')
                liTopp.style.display="none"
                }
            
            else{var liTopp=document.querySelector('.topp')
                liTopp.style.display="block"
                }
        

        }
    }

   
    
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
    
    //function visibleMenu(){
      //  var json={'name':1}
        //window.sessionStorage.setItem('json', JSON.stringify(json))
        //menu.style.display="block"
        //menu.style.transition="all 1s";
   // }

   




     var menu1 = document.querySelector(".leftUpper")
     //menu1.style.zIndex="3"
     var ch1 = document.querySelector('#ch1')
     var text1 =document.createElement('p')
     text1.innerHTML="Pizza";
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
     ch1.onclick=visibleMenu.bind(this, menu1);
     ch1.onmouseout=zipOut;
     ch1.style.borderRadius="100%  0 0 0 "
     ch1.style.boxShadow= "0px 0px 5px 5px white inset";
    
     
     var ch2 = document.querySelector('#ch2')
     var menu2 = document.querySelector(".rightUpper")
     //menu2.style.zIndex="-2"
     ch2.style.backgroundPosition="100% 0"
     ch2.onmouseover=zip;
     ch2.onmouseout=zipOut;
     ch2.onclick=visibleMenu.bind(this, menu2);
     ch2.style.borderRadius="0  100% 0 0 "
     ch2.style.boxShadow= "0px 0px 5px 5px white inset";
     
     var text2 =document.createElement('p')
     ch2.appendChild(text2);
     text2.innerHTML="Dinner <br>Platters";
     text2.style.position="absolute"
     text2.style.textOverflow="ellipsis"
     text2.style.top="30%"
     text2.style.left="5%"
     text2.style.zIndex="2"
     text2.style.margin="0"
     
     
     
     
     var ch3 = document.querySelector('#ch3')
     var menu3 = document.querySelector(".leftBottom")
     //menu3.style.zIndex="-3"
     ch3.style.backgroundPosition="0% 100% "
     ch3.onmouseover=zip;
     ch3.onmouseout=zipOut;
     ch3.onclick=visibleMenu.bind(this, menu3);
     ch3.style.borderRadius="0  0  0 100%"
     ch3.style.boxShadow= "0px 0px 5px 5px white inset";
     
     var text3 =document.createElement('p')
     ch3.appendChild(text3);
     text3.innerHTML="Salads &</br>Pasta";
     text3.style.position="absolute"
     text3.style.textOverflow="ellipsis"
     text3.style.top="5%"
     text3.style.left="15%"
     text3.style.zIndex="2"
     text3.style.margin="0"
    
    
    
     var ch4 = document.querySelector('#ch4')
     var menu4 = document.querySelector(".rightBottom")
     //menu4.style.zIndex="-4"
     ch4.style.backgroundPosition="100% 100%"
     ch4.onmouseover=zip;
     ch4.onmouseout=zipOut;
     ch4.onclick=visibleMenu.bind(this, menu4);
     ch4.style.borderRadius="0  0 100% 0  "
     ch4.style.boxShadow= "0px 0px 5px 5px white inset";
    
     var text4 =document.createElement('p')
     ch4.appendChild(text4);
     text4.innerHTML="Subs";
     text4.style.position="absolute"
     text4.style.textOverflow="ellipsis"
     text4.style.top="20%"
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

function changeBackground(n1, n2, n3, n4){
	
	setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
    n1.style.backgroundImage = 'url('+url+')'
	n2.style.backgroundImage = 'url('+url+')'
	n3.style.backgroundImage = 'url('+url+')'
	n4.style.backgroundImage = 'url('+url+')'
},5000);}
changeBackground(ch1, ch2, ch3, ch4)