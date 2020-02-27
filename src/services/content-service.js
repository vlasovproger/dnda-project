import firebase from "../lib/db";

export default class ContentService {
  getArticles = async (step = 1) => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByKey()
      .startAt(`${step * 5}`)
      .limitToFirst(5);
    let result = await new Promise((resolve, reject) => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    return Object.values(result.val());
  };

  getArticle = async id => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByChild("id")
      .equalTo(id);
    let result = await new Promise((resolve, reject) => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    console.log(Object.values(result.val())[0]);
    const article = Object.values(result.val())[0];
    article.imageUrl = article.imageUrl.replace(/[0-9/]{4,7}$/, "1920/1080");
    return article;
  };
}
