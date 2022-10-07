var count = 0; 
 var total = 0; 
 while (count < 5) { 
   let a = prompt("Enter marks of Subject "+(count+1)); 
   total += Number(a); 
   count++; 
 } 
 document.write("Total marks is " + total);