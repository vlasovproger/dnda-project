import axios from "axios";
import faker from "faker";
import { loremIpsum } from "lorem-ipsum";

export default class ContentService {

  getImages = async step => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${step}&limit=5`
    );
    return res.data;
  };

  getImage = async id => {
    const res = await axios.get(`https://picsum.photos/id/${id}/info`);

    return res.data;
  };

  getTitle = async () => {
    const title = await faker.random.words(3);
    return title;
  };
  getDescription = async () => {
    const description = await loremIpsum({
      count: 1,
      format: "plain",
      sentenceLowerBound: 10,
      sentenceUpperBound: 15,
      units: "sentences"
    });
    return description;
  };

  getText = async () => {
    const text = await loremIpsum({
      count: 15,
      format: "plain",
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      units: "paragraphs"
    });
    return text;
  };

  getArticles = async (step = 1) => {
    const imgRes = await this.getImages(step);

    let articles = [];
    for (const image of imgRes) {
      const title = await this.getTitle();
      const description = await this.getDescription();
      const text = await this.getText();
      const author = await faker.name.findName();
      const date = faker.date.past();
      const category = faker.random.word();
      const id = image.id;
      const imageUrl = image.download_url.replace(/[0-9/]{4,9}$/, "966/755");
      articles.push({
        id,
        title,
        description,
        text,
        imageUrl,
        author,
        date,
        category
      });
    }
    return articles;
  };

  getArticle = async id => {
    const image = await this.getImage(id);
    const imageUrl = image.download_url.replace(/[0-9/]{4,9}$/, "1920/1080");
    const title = await this.getTitle();
    const description = await this.getDescription();
    const text = await this.getText();
    const author = await faker.name.findName();
    const date = faker.date.past();
    const category = faker.random.word();
    const article = {
      id,
      title,
      description,
      text,
      imageUrl,
      author,
      date,
      category
    };
    return article;
  };
}