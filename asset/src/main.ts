
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

  const name = document.querySelectorAll('ul>li:nth-of-type(1)') as NodeListOf<HTMLElement>;

  // console.log(searchInput);

  name.forEach(val => {


    const nameText = val.textContent?.toLowerCase()
    if (nameText && nameText.indexOf(searchInput) >= 0) {
      if (val.parentElement) {
        val.parentElement.style.display = 'flex'
      }

    } else {
      if (val.parentElement) {
        val.parentElement.style.display = 'none'
      }
    }
  })
})



fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/', {
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
      <figure>
      <img src="asset/img/avatar.png" alt="">
      </figure>
    
        <li> ${val.id} ${val.name} ${val.lastname}</li>
        <li> AGE: ${val.age}</li>
        <li> ${val.email}</li>
        <li> ${val.date}</li>
        <div>
          <i title="Delete" onclick="Delete(${val.id})" class="bi bi-person-x-fill" id="delete"></i>
          <i title="Edit" onclick="Edit(${val.id})" class="bi bi-pencil-square" Id="edit"></i>
        </div>
      `;
      main.appendChild(ul)
      const del = ul.querySelector('div>i:nth-of-type(1)')
      // console.log(del);
      const edit = ul.querySelector('div>i:nth-of-type(2)')
      // console.log(edit);

      // console.log(val.id);


    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


function Edit(i: any) {
  console.log(i);
  if (confirm('Are Sure Change The Name??')) {
    fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/' + i, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: prompt('Enter New Name') })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })

      .then(task => {
        // Do something with updated task
        alert('Your User Updated')
        location.reload()
      }).catch(error => {
        // handle error
      })
  }

}

function Delete(i: number) {
  if (confirm('Are You Sure Delete This Account?')) {
    fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform/' + i, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      // Do something with deleted task
      location.reload()
    }).catch(error => {
      // handle error
    })
  }
}

const exit = document.getElementById('exit')
exit?.addEventListener('click',Exit)
function Exit(){
  alert('Good Luck Sir!')
  location.href='https://alikhazaeii.github.io/signupforAdminPanel-firstPart-/'
}