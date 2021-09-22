
const data = `{ "title": "Nikita Fomichev", "description": "I am a junior js programmer. I am engaged in front-end development. Also trying to learn English"}`

document.addEventListener('DOMContentLoaded', event => {
    if(data === undefined) return;

    const titleElem = document.querySelector('.title');
    const descriptionElem = document.querySelector('.description');

    const {title, description} = JSON.parse(data);

    titleElem.innerHTML   = title;
    descriptionElem.innerHTML = description;

});

