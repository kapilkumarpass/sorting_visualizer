async function partition(start, end){
    
    const pivotValue = arr[end];
    div[end].style.backgroundColor="yellow";
    let speed=document.getElementById('arr_sz').value;
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if(check==1)
        {count=0;
            check=0;
            
        return ;
        }
        if (arr[i] < pivotValue) {
       
        let temp=arr[i];
        
        div[i].style.backgroundColor="blue";
        div[pivotIndex].style.backgroundColor="green";
        await resolveAfter2Seconds(speed);
        div[i].style.height=arr[pivotIndex]+"px";
        div[pivotIndex].style.height=temp+"px";

        div[i].style.backgroundColor="green";
        div[pivotIndex].style.backgroundColor="blue";
        await resolveAfter2Seconds(speed);
        div[i].style.backgroundColor="red";
        div[pivotIndex].style.backgroundColor="red";
      

        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        
        pivotIndex++;
        }
    }
    
    
    await resolveAfter2Seconds(speed);
        let temp=arr[end];
        
        div[end].style.backgroundColor="blue";
        div[pivotIndex].style.backgroundColor="green";
        await resolveAfter2Seconds(speed);
        div[end].style.height=arr[pivotIndex]+"px";
        div[pivotIndex].style.height=temp+"px";

        div[end].style.backgroundColor="green";
        div[pivotIndex].style.backgroundColor="blue";
        await resolveAfter2Seconds(speed);
        div[end].style.backgroundColor="red";
        div[pivotIndex].style.backgroundColor="red";
      
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

async function quickSortRecursive(start, end) {
  
    
    if (start >= end) {
        return;
    }
    
    let index = await partition(start, end);
    
    await quickSortRecursive(start, index - 1);
    if(check==1)
          {count=0;
              check=0;
              
          return ;
          }
    await quickSortRecursive(index + 1, end);
    
}

let quick=document.getElementsByClassName("quickclik");
quick[0].addEventListener("click",function(){
    if(count==0){
        count=1;
        check=0;
    quickSortRecursive(0,99);
    }
});

