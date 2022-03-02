
var arr_size=100;

var arr = new Array(arr_size);
var div = new Array(arr_size);
var count=0;
var check=0;
 function generate(){
  if(count==1)
  check=1;
  count=0;
  // let speed=document.getElementById('arr_sz').value;
  // await resolveAfter2Seconds(speed*0.5);
arr=Array.from({length: arr_size}, () => Math.floor(Math.random() * 200));
    

  let par=document.getElementsByClassName("parent")[0];
  par.innerHTML="";
  let pivot=document.getElementsByClassName("pivot")[0];
              pivot.innerHTML="";
    for(let i=0;i<arr_size;i++)
    {
    let a=document.createElement("DIV");
    
    par.appendChild(a);
    div[i]=a;
    let h=arr[i];
    div[i].style.height= h+"px";
    div[i].style.width="1vw";
    div[i].style.display= "inline-block" ;
    div[i].style.backgroundColor = "red";
    div[i].style.border= "1px black solid";
    div[i].setAttribute("class", h);
    
    }
    
}

document.getElementsByClassName("clk")[0].addEventListener("click", generate);


function resolveAfter2Seconds(speed) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, speed*0.3);
  });
}
      

async function myfunction(){
  if(count==0){
  count=1;
  check=0;
  let speed=document.getElementById('arr_sz').value;
 
    for(let i=0;i<arr_size;i++)
    {
      let ind=i;
     
      for(let j=i+1;j<arr_size;j++)
      {
        
        if(arr[j]<arr[ind])
        {
          div[ind].style.backgroundColor="red";
          div[j].style.backgroundColor="blue";
          ind=j;
        }
         else{
        div[j].style.backgroundColor="yellow";
        await resolveAfter2Seconds(speed);
        div[j].style.backgroundColor="red";
         }
        if(check==1)
        {count=0;
          check=0;
        return ;
        }
        
        
      }
      div[ind].style.backgroundColor="red";
      div[i].style.backgroundColor="green";
      let temp=arr[i];
      arr[i]=arr[ind];
      div[i].style.height=arr[ind]+"px";
      div[i].setAttribute("class", arr[ind]);
      arr[ind]=temp;
      div[ind].style.height=temp+"px";
      div[ind].setAttribute("class", temp);
    
    }
   
  }
 
}
document.getElementsByClassName("clearbtn")[0].addEventListener("click", function(){
  let clr=document.getElementsByClassName("parent")[0];
  clr.innerHTML="";
});

let butto = document.getElementsByClassName('clik');
butto[0].addEventListener('click',myfunction);









