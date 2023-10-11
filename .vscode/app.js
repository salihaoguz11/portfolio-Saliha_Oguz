const links=document.querySelectorAll('.link')
const sections=document.querySelectorAll('.section')

let activeLink=0;

links.forEach((link, i) => {
    link.addEventListener('click',()=>{
        if (active!=i) {
            links[activeLink].classList.remove('active')
            link.classList.add('active')
            sections[activeLink].classList.remove('active')
            setTimeout(() => {
                activeLink=i
                sections[i].classList.add('active')
            }, 1000);
        }
    })
})