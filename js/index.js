const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#search');
        console.log(input.value);
        const ghApiUrl = `https://api.github.com/users/${input.value}`
        console.log(ghApiUrl)
         fetch(ghApiUrl,{
           
            method: "GET",
            headers: {
              Accept: "application/vnd.github.v3+json" ,
              
            }
        },{
            username: 'USERNAME'
          })
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
        const text = json
        console.log(text.login)
        const loginName = text.login
        const avatarUrl = text.avatar_url
       const profileLink = text.html_url
       
      
  document.getElementById('user-list');

 display(loginName);

 const img = document.createElement('img');
  img.src = avatarUrl ;
 
  document.getElementById('user-list').appendChild(img);

 display (profileLink);
  
    const el = document.getElementById("github-container");
    el.addEventListener('click', () =>{
    console.log("Hello");
    const repoApiUrl = `https://api.github.com/users/${input.value}/repos`
    console.log(repoApiUrl)
     fetch(repoApiUrl,{
       
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json" ,
          
        }
    })
.then((resp) => resp.json())
.then((json) => {
    console.log(json)
    const repoData = json
    repoData.forEach(displayRepo);
   
})
   } )
 
          });
          
    })
    }
    
 function display (data) {
 
    let p = document.createElement('p');
    p.textContent = data;
    document.querySelector('#user-list').appendChild(p);
  }

  function displayRepo (repoData) {
    document.getElementById('repos-list');
    let p = document.createElement('p');
 p.textContent = `${repoData.name}`;
 document.querySelector('#repos-list').appendChild(p);
  }
 
// Bonus : not completed


document.addEventListener('DOMContentLoaded', init);
