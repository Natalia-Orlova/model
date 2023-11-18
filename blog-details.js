"use strict";

Vue.component("articles", {
  data() {
    return {
      sortedArticle: [
        {
          id: "kitchen",
          title: "Let’s Get Solution for Building Construction Work",
          src: "img/blog_details_article.jpg",
          alt: "article_img",
          date: "26 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],
      articles: [
        {
          id: "kitchen",
          title: "Let’s Get Solution for Building Construction Work",
          src: "img/blog_details_article.jpg",
          alt: "article_img",
          date: "26 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
        },
        {
          id: "bedroom",
          title: "Let’s Get Solution for Building Construction Work",
          src: "img/top_photo.jpg",
          alt: "article_img",
          date: "26 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
        },
        {
          id: "building",
          title: "Let’s Get Solution for Building Construction Work",
          src: "img/news2.jpg",
          alt: "article_img",
          date: "26 December,2022",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
        },
        {
            id: "architecture",
            title: "Let’s Get Solution for Building Construction Work",
            src: "img/projects2.jpg",
            alt: "article_img",
            date: "26 December,2022",
            text1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            text2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
          },
          {
            id: "kitchen-planning",
            title: "Let’s Get Solution for Building Construction Work",
            src: "img/news1.jpg",
            alt: "article_img",
            date: "26 December,2022",
            text1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            text2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
          },
        
      ],
      tags: [
        {
          id: "kitchen",
          text: "Kitchen",
        },
        {
          id: "bedroom",
          text: "Bedroom",
        },
        {
          id: "building",
          text: "Building",
        },
        {
          id: "architecture",
          text: "Architecture",
        },
        {
          id: "kitchen-planning",
          text: "Kitchen Planning",
        },
      ],
      title: "Tags",
      isActiveStyle: {
        color: "#fff",
        backgroundColor: "#292f36",
      },
    };
  },
  methods: {
    filterArticles(e) {
      this.sortedArticle = this.articles.filter((article) =>
          article.id === e.target.id
        );
    },
  },

  template: `
    <div class="blog-details">
      <div class="articles-box">
        <article class="article-item" v-for="article in sortedArticle" :key="article.id" :id="article.id">
            <h2 class="article-item__heading">{{article.title}}</h2>
            <img class="article-item__img" :src="article.src" :alt="article.alt">
            <div class="article-item__edition">
                <p class="article-item__edition_date">{{article.date}}</p>
                <nav class="article-item__edition_breadcrumbs">
                    <a href="#" class="article-item__edition_link">Interior </a>
                    <a href="#" class="article-item__edition_link">Home</a>
                    <a href="#" class="article-item__edition_link">Decore</a>
                </nav>
            </div>
            <p class="article-item__text">{{article.text1}}</p>
            <p class="article-item__text">{{article.text2}}</p>
        </article>
        <div class="quote">
            <img class="quote__quotes" src="img/quotes.svg" alt="quotes">
            <p class="quote__text"> The details are not the details. They make the design.</p>
        </div>
      </div>

      <aside class="sidebar">
        <h3 class="sidebar__heading">{{title}}</h3>
        <div class="sidebar__tags">
            <div v-for="tag in tags" :key="tag.id">
                <button @click="filterArticles" :id="tag.id" class="sidebar__tags_link">{{tag.text}}</button>
            </div>
        </div>
      </aside>
    </div>
      `,
});

const app = new Vue({
  el: "#blog-details",
  data: {},
});
