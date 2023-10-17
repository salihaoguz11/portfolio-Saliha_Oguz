const links=document.querySelectorAll('.link')
const sections=document.querySelectorAll('section')
const hamburgerMenu=document.querySelector('.hamburger-menu')
const navbar=document.querySelector('.navbar')

let activeLink=0;

links.forEach((link, i) => {
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        sections[i].scrollIntoView({behavior:"smooth"})

        links[activeLink].classList.remove('active')
        link.classList.add('active')
        activeLink=i;

        // if (activeLink!=i) {
        //     links[activeLink].classList.remove('active')
        //     link.classList.add('active')
        //     sections[activeLink].classList.remove('active')
        //     setTimeout(() => {
        //         activeLink=i
        //         sections[i].classList.add('active')
        //     }, 1000);
        // }
    })
})
hamburgerMenu.addEventListener('click',()=>{
    if(window.getComputedStyle(navbar).display==='none'){
        navbar.style.display='block'
    }else{
        navbar.style.display='none'
    }
})