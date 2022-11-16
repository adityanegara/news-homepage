import ArticleModel from "./IArticle";

interface HeaderModel extends ArticleModel {
  mobileImage: string;
  desktopImage: string;
}

export default HeaderModel;
