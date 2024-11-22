"use strict";
const search = document.getElementById('search');
console.log(search);
const main = document.querySelector('main');
search.addEventListener('keyup', () => {
    let searchInput = search.value.toLowerCase();
    const name = document.querySelectorAll('ul>li:nth-of-type(2)');
    // console.log(searchInput);
    name.forEach(val => {
        var _a;
        const nameText = (_a = val.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (nameText && nameText.indexOf(searchInput) >= 0) {
            if (val.parentElement) {
                val.parentElement.style.display = 'flex';
            }
        }
        else {
            if (val.parentElement) {
                val.parentElement.style.display = 'none';
            }
        }
    });
});
// search.addEventListener('keyup', () => {
//   let searchInput: string = search.value.toLowerCase();
//   // انتخاب همه li‌ها داخل ul
//   const name = document.querySelectorAll('ul > li:nth-of-type(2)') as NodeListOf<HTMLElement>;
//   name.forEach(val => {
//     const nameText = val.textContent?.toLowerCase();
//     if (nameText && nameText.indexOf(searchInput) >= 0) {
//       if (val.parentElement) {
//         val.parentElement.style.display = 'block'; // نمایش آیتم‌هایی که متن جستجو را شامل می‌شوند
//       }
//     } else {
//       if (val.parentElement) {
//         val.parentElement.style.display = 'none'; // مخفی کردن آیتم‌هایی که متن جستجو را شامل نمی‌شوند
//       }
//     }
//   });
// });
fetch('https://673fa428a9bc276ec4b93059.mockapi.io/signupform', {
    method: 'GET',
})
    .then(res => {
    if (res.ok) {
        return res.json();
    }
})
    .then((form) => {
    form.map((val) => {
        let ul = document.createElement('ul');
        ul.innerHTML = `
        <li> ${val.id}</li>
        <li> ${val.name}</li>
        <li> ${val.lastname}</li>
        <li> ${val.age}</li>
        <li> ${val.email}</li>
        <li> ${val.date}</li>
      `;
        main.appendChild(ul);
    });
})
    .catch(error => {
    console.error('Error:', error);
});
