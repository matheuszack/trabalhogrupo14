let menu = document.querySelector('#menu-bars');
let cabeçalho= document.querySelector('.cabeçalho-link');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  cabeçalho-link.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .cabeçalho-link a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  cabeçalho-link.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
