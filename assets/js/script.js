document.querySelector('.h0').classList.toggle('h200');
document.querySelector('.h200').classList.toggle('h0');

let ids = ['objective','skills','education']

window.onclick = ({target}) => {

    if(ids.includes(target.id)) {
        document.querySelectorAll('h2').forEach(el => {
            el.nextElementSibling.classList.toggle('h200', false)
            el.nextElementSibling.classList.toggle('h0', true)
        })

        target.nextElementSibling.classList.toggle('h0', false)
        target.nextElementSibling.classList.toggle('h200', true)

        console.log(target);
        
    }
};