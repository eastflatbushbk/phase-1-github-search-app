const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#search');
        console.log(input.value);
         fetch(`https://api.github.com/search/users?q=${input.value}`,{
           
            method: "GET",
            headers: {
              Accept: "application/vnd.github.v3+json" ,
              
            }
        })
    .then(response => response.json())
    .then(response => {
         document.getElementById('user-list').innerHTML = response;
      //  response.forEach(()=>{
        //    const li = document.createElement('li')
          //  list.appendChild(li) 
        
      //  })
       
      // list.innerText = data.list;
    
   // console.log(li)
    console.log(response)
});
});
}

document.addEventListener('DOMContentLoaded', init);