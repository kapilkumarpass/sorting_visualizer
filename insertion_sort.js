



function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, speed*30);
    });
  }
        
  
  async function insertionfunction(){
    if(count==0){
    count=1;
    check=0;
    let speed=document.getElementById('arr_sz').value;


    for (let i = 1; i < arr_size; i++) {
        let current = arr[i];
        
        let j = i-1; 

        let di=document.createElement("DIV");
        let pivot=document.getElementsByClassName("pivot")[0];
        di.style.height=arr[i]+"px";
        di.style.backgroundColor="yellow";
        di.style.marginTop=200+"px";
        di.style.width="15px";
        // di.style.marginLeft=500+"px";
        di.style.display= "inline-block" ;
        di.style.backgroundColor = "red";
        di.style.border= "2px black solid";
        pivot.appendChild(di);
        while ((j > -1) && (current < arr[j])) {
    
    
            arr[j+1] = arr[j];
            
        

            div[j].style.backgroundColor="green";
            
            // await resolveAfter2Seconds(speed);
            div[j+1].style.height=arr[j]+"px";
            div[j+1].setAttribute("class", arr[j]);

          
        //   await resolveAfter2Seconds(speed);
          div[j+1].style.backgroundColor="orange";
          
          
          
          if(check!=1)
          await resolveAfter2Seconds(speed*0.3);
          
          j--;
         
          }
          
          arr[j+1] = current;
          div[j+1].style.height=current+"px";
          div[j+1].setAttribute("class", current);
          await resolveAfter2Seconds(speed);
          div[j+1].style.backgroundColor="orange";
          pivot.removeChild(pivot.childNodes[0]);
          if(check==1)
            {count=0;
                check=0;
                return ;
            }
            
     
          
      }
     
      
      
      
    }
   
  }
  
  
  let insertionbutto = document.getElementsByClassName('insertionclik');
  insertionbutto[0].addEventListener('click',insertionfunction);
  