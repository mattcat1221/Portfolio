document.querySelector('.h0').classList.toggle('h200');
document.querySelector('.h200').classList.toggle('h0');

let ids = ['objective', 'skills', 'education'];

window.onclick = ({target}) => {
    if (ids.includes(target.id)) {
        document.querySelectorAll('h2').forEach(el => {
            el.nextElementSibling.classList.toggle('h200', false);
            el.nextElementSibling.classList.toggle('h0', true);
            el.classList.toggle('focus', false)
        });
        
        target.nextElementSibling.classList.toggle('h0', false);
        target.nextElementSibling.classList.toggle('h200', true);
        target.classList.toggle('focus', true)

        console.log(target);
    }
};

const skillIcon = document.querySelector('#skillIcon');
let icons = ['aws.png','api.png','beautifulSoup.png','bootstrap.png','colab.png','css2.png','d3.png','dashboaring.png','dataStructure.png','vba.png','etl.png','flask.png','geomapping.png','git.png','github.png','googleMaps.png','hadoop.png','html.png','heroku.png','javaScript.png','machineLearning.png','matplotlib.png','mysql.png','numpy.png','pandas.png','pyspark.png','splinter.png','tableau.png'];
let links = ['https://en.wikipedia.org/wiki/Amazon_Web_Services','https://en.wikipedia.org/wiki/API','https://en.wikipedia.org/wiki/Beautiful_Soup_(HTML_parser)','https://en.wikipedia.org/wiki/Bootstrapping_(disambiguation)', 'https://en.wikipedia.org/wiki/GoogleColab','']
if (skillIcon) {
    icons.forEach(icon => {
        skillIcon.innerHTML += `
        <figure>
            <img src="assets/images/skills/${icon}" alt="${icon}">
            <figcaption>${icon.slice(0, -4)}</figcaption>
        </figure>
        `;
    });
} else {
    console.error("skillIcon element not found");
}
