"use strict";

fetch("projects.json")
    .then((response) => {
        return response.json();
    })
    .then((projects) => {
        const projectBox = document.querySelector('.projects__box');
        projects.forEach(({item, img, name, desc}) => {
            const projectEl = `
                <div class="project">
                        <img class="${item}" src="${img}" alt="project_img">
                        <div class="project__desc">
                            <a href="#" class="project__name">${name}</a>
                            <p class="project__text">${desc}</p>
                        </div>
                        <a href="#" class="next"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                        
                </div>
            `;
            projectBox.insertAdjacentHTML("beforeend", projectEl);
        });

    })