import ChartArticleModel from "../../../model/IChartArticle";
import RetroComputerImage from "../../../assets/image-retro-pcs.jpg";
import KeyboardImage from "../../../assets/image-top-laptops.jpg";
import JoyconImage from "../../../assets/image-gaming-growth.jpg";

const CHART_ARTICLES: ChartArticleModel[] = [
  {
    id: 1,
    title: "Long Titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    description: "Long Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
    image: RetroComputerImage,
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    image: KeyboardImage,
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
    image: JoyconImage,
  },
];

export default CHART_ARTICLES;
