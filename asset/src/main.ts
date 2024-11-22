

const search: HTMLInputElement = document.getElementById('search') as HTMLInputElement;



console.log(search);


const main: HTMLElement = document.querySelector('main') as HTMLElement

interface form {
  
  id: string
  
  name: string;
  lastname: string;
  email: string;
  age: string;
  date: string;
}

search.addEventListener('keyup', () => {
  let searchInput: string = search.value.toLowerCase()
 
  const name = document.querySelectorAll('ul>li:nth-of-type(2)') as NodeListOf<HTMLElement>;

  // console.log(searchInput);

  name.forEach(val => {



    
    const nameText = val.textContent?.toLowerCase()
    if (nameText && nameText.indexOf(searchInput) >= 0) {
      if (val.parentElement) {
        val.parentElement.style.display = 'flex'
      }
    
    }   else {
      if(val.parentElement){
        val.parentElement.style.display='none'
      }
    }
  })
})









fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform', {
  method: 'GET',
})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((form: form[]) => {
    form.map((val: form) => {
      let ul: HTMLElement = document.createElement('ul');
      ul.innerHTML = `
        <li> ${val.id}</li>
        <li> ${val.name}</li>
        <li> ${val.lastname}</li>
        <li> ${val.age}</li>
        <li> ${val.email}</li>
        <li> ${val.date}</li>
      `;
      main.appendChild(ul)
    });
    
  })
  
  .catch(error => {
    
    console.error('Error:', error);
  });






