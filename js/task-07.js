const range = document.getElementById('font-size-control');
console.log(range);

let span = document.getElementById('text');
console.log(span);







range.addEventListener("input", () => {
  span.style.fontSize = `${range.value}px`
  });
    
  
        
