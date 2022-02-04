function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  
var arr_size=100;
console.log(arr_size);
var arr = new Array(arr_size);
var div = new Array(arr_size);
arr=Array.from({length: arr_size}, () => Math.floor(Math.random() * 200));

for(let i=0;i<arr_size;i++)
{
 let a=document.createElement("DIV");
 document.getElementsByClassName("parent")[0].appendChild(a);
 div[i]=a;
 let h=arr[i];
 div[i].style.height= h+"px";
 div[i].style.width="1%";
 div[i].style.display= "inline-block" ;
 div[i].style.backgroundColor = "red";
 div[i].style.border= "2px black solid";
 div[i].setAttribute("class", h);
 
}





    function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 0);
        });
      }
    //await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
async function myfunction(){
    for(let i=0;i<arr_size;i++)
    {
      let ind=i;
      await resolveAfter2Seconds();
      for(let j=i+1;j<arr_size;j++)
      {
        
        if(arr[j]<arr[ind])
        {ind=j;
          
        }
        
      }
     
      let temp=arr[i];
      arr[i]=arr[ind];
      div[i].style.height=arr[ind]+"px";
      div[i].setAttribute("class", arr[ind]);
      arr[ind]=temp;
      div[ind].style.height=temp+"px";
      div[ind].setAttribute("class", temp);

      
      
      div[ind].style.backgroundColor="red";
      div[i].style.backgroundColor="green";

      

    }
  

}
let butto = document.getElementsByClassName('clik');
butto[0].addEventListener('click',myfunction);





