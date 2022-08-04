const menubar = document.querySelector('.menubar');
const profile_menubar = document.querySelector('.profile_menubar');
const menubar_close = document.querySelector('.menubar_close');
const profilebar_close = document.querySelector('.profilebar_close');
const sideBar = document.querySelector('#sidebar');
const navlist = document.querySelector('.nav_list');
const profile_navlist = document.querySelector('.profile_navlist');
const leftbar = document.querySelector('#leftbar');

menubar.addEventListener('click', () => {
    sidebar.style.width = '100%';
    navlist.style.opacity = '1';
});

// profile_menubar.addEventListener('click', () => {
//     leftbar.style.width = '100%';
//     profile_navlist.style.opacity = '1';
// });

menubar_close.addEventListener('click', () => {
    navlist.style.opacity = '0';
    sidebar.style.width = '0';
});

// profilebar_close.addEventListener('click', () => {
//     profile_navlist.style.opacity = '0';
//     leftbar.style.width = '0';
// });

//slider part
const movieContainers = [...document.querySelectorAll('.movie-container')];
const nextbtn = [...document.querySelectorAll('.nextbtn')];
const prevbtn = [...document.querySelectorAll('.prevbtn')];

movieContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;
    // let containerWidth = 390;
    
    nextbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });
    
    prevbtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});