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
        const firstMerge = loginName.concat(avatarUrl)
        const finalMerge = firstMerge.concat(profileLink)
        console.log(finalMerge)
      //  const title = document.querySelector('section#movieDetails h4');
        //const summary = document.querySelector('section#movieDetails p');
        //title.innerText = data.title;
  //  summary.innerText = data.summary;
  document.getElementById('user-list');

 display(loginName);

 const img = document.createElement('img');
  img.src = avatarUrl ;
 // img.title = "avatar"
//'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
  document.getElementById('user-list').appendChild(img);


  
 // const link = document.createTextNode(profileLink)
  ///li.appendChild(link)
 // li.title = "Profile"
 // li.href = text.html_url
 // document.getElementById('user-list').appendChild(li)

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
 //  el.onclick = getRepos(loginName);



 
 // cdisplayLink (profileLink);
        
         
   

// const obj1 =JSON.stringify(json)
      ///  const deStringifiedUser = JSON.parse('')

     //console.log(deStringifiedUser)
  


     //   Object.entries(json).forEach(entry => {
       //     let key = entry[0];
         //   let value = entry[1];
           // console.log(key, value);

          
          });
          


       
          
    })
    }
    
             //  function display(json) {

      
        //user.forEach(data=>{
         //  const li = document.createElement('li')
         //  li.innerHTML = data.login
         //  list.appendChild(li) 
        
     //   })
  //  }
       
      // list.innerText = data.list;
    
   
   // console.log(response)
//}

//function displayavatar (){
 /////   console.log(avatarUrl)
    
//}

  //  function diplayName (){
    
///}

  /////  function displayLink (){
    
//}

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
 

document.addEventListener('DOMContentLoaded', init);
