"use strict";

fetch("news.json")
  .then((response) => {
    return response.json();
  })
  .then((news) => {
    const blogNews = document.querySelector(".blog-news");
    news
      .forEach(({ img, theme, name, date }) => {
        const newsItem = `
            <div class="blog-news__item">
                <img class="blog-news__item_img" src="${img}" alt="news_photo">
                <p class="blog-news__item_theme">${theme}</p>
                <a href="#" class="blog-news__item_title">${name}</a>
                <div class="blog-news__item_date">
                    <p class="blog-news__item_datetext">${date}</p>
                    <a href="#" class="blog-news__item_next"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </a>
                </div>
            </div>
            `;
        blogNews.insertAdjacentHTML("beforeend", newsItem);
      })
      .catch((error) => {
        console.log(error);
      });
  });
