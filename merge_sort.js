let flag=0;
async function merge(arr, l, m, r)
{
	const n1 = m - l + 1;
	const n2 = r - m;
  let speed=document.getElementById('arr_sz').value;
	let L = new Array(n1);
	let R = new Array(n2);
  if(check==1)
        {count=0;
            check=0;
            flag=1;
        return ;
        }
	for (let i = 0; i < n1; i++)
		{L[i] = arr[l + i];
      div[l+i].style.backgroundColor="orange";
      await resolveAfter2Seconds(speed);
      if(check==1)
      {count=0;
          check=0;
          flag=1;
      return ;
      }}
	for (let j = 0; j < n2; j++)
		{R[j] = arr[m + 1 + j];
      div[m+j+1].style.backgroundColor="yellow";
      await resolveAfter2Seconds(speed);
      if(check==1)
      {count=0;
          check=0;
          flag=1;
        return ;
      }}


	let i = 0;
	let j = 0;
	let k = l;

	while (i < n1 && j < n2) {
    if(check==1)
        {count=0;
            check=0;
            flag=1;
        return ;
        }
		if (L[i] <= R[j]) {
			arr[k] = L[i];
      div[k].style.height=L[i]+"px";
      div[k].style.backgroundColor="blue";
      await resolveAfter2Seconds(speed);
			i++;
      
		}
		else {
			arr[k] = R[j];
      div[k].style.height=R[j]+"px";
      div[k].style.backgroundColor="blue";
      await resolveAfter2Seconds(speed);
			j++;
		}
		k++;
	}

	while (i < n1) {
    if(check==1)
        {count=0;
            check=0;
            flag=1;
        return ;
        }
		arr[k] = L[i];
    div[k].style.height=L[i]+"px";
    div[k].style.backgroundColor="blue";
    await resolveAfter2Seconds(speed);
		i++;
		k++;
	}


	while (j < n2) {
    if(check==1)
        {count=0;
            check=0;
            flag=1;
        return ;
        }
		arr[k] = R[j];
    div[k].style.height=R[j]+"px";
    div[k].style.backgroundColor="blue";
    await resolveAfter2Seconds(speed);
		j++;
		k++;
	}
  
}


async function mergeSort(arr,l, r){
	if(l>=r){
		return;
	}
  if(check==1)
          {count=0;
              check=0;
              
          return ;
          }
	var m =l+ parseInt((r-l)/2);
  
	await mergeSort(arr,l,m);
  if(flag==1)
    {
      return}
  
  await mergeSort(arr,m+1,r);
  if(flag==1)
  {
    
    return ;}
  
	await merge(arr,l,m,r);
  if(flag==1)
  {
    return ;}

    
  
}


  let merg=document.getElementsByClassName("mergeclik");
   merg[0].addEventListener("click",function(){
       if(count==0){
           count=1;
           check=0;
       mergeSort(arr,0,99);
       flag=0;
       }
   });

