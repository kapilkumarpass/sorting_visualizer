
// var arr_size=100;

// var arr = new Array(arr_size);
// var div = new Array(arr_size);
// var count=0;
// var check=0;
// async function ra(){
//   let speed=document.getElementById('arr_sz').value;
  
//   if(count==1)
//   check=1;
//   count=0;
// arr=Array.from({length: arr_size}, () => Math.floor(Math.random() * 200));
    

//   let par=document.getElementsByClassName("parent")[0];
//   par.innerHTML="";
//     for(let i=0;i<arr_size;i++)
//     {
//     let a=document.createElement("DIV");
    
//     par.appendChild(a);
//     div[i]=a;
//     let h=arr[i];
//     div[i].style.height= h+"px";
//     div[i].style.width="1%";
//     div[i].style.display= "inline-block" ;
//     div[i].style.backgroundColor = "red";
//     div[i].style.border= "2px black solid";
//     div[i].setAttribute("class", h);
    
//     }
//     await resolveAfter2Seconds(speed);
    
// }


// document.getElementsByClassName("clk")[0].addEventListener("click", ra);


function resolveAfter2Seconds(speed) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, speed*30);
  });
}
      

async function bubblefunction(){
  if(count==0){
  count=1;
  check=0;
  let speed=document.getElementById('arr_sz').value;
 
  for(let i = 0; i < arr_size; i++){
     
    
    for(let j = 0; j < ( arr_size - i -1 ); j++){
      
      if(check==1)
      {count=0;
          check=0;
          
      return ;
      }
        
        if(arr[j] > arr[j+1])
        {
          
        div[j].style.backgroundColor="blue";
        
        div[j+1].style.backgroundColor="yellow";
        await resolveAfter2Seconds(speed);
        div[j].style.backgroundColor="yellow";
        div[j+1].style.backgroundColor="blue";
        let temp=arr[j];
        arr[j]=arr[j+1];
        div[j].style.height=arr[j+1]+"px";
        div[j].setAttribute("class", arr[j+1]);
        arr[j+1]=temp;
        div[j+1].style.height=temp+"px";
        div[j+1].setAttribute("class", temp);
        if(check!=1)
        await resolveAfter2Seconds(speed*0.3);
        
        div[j].style.backgroundColor="red";
        div[j+1].style.backgroundColor="red";
      
       
        }
        
        
        
    }
    div[arr_size-i-1].style.backgroundColor="green";
    
    }
   
  }
 
}


let bubblebutto = document.getElementsByClassName('bubbleclik');
bubblebutto[0].addEventListener('click',bubblefunction);










  
 