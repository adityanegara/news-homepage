import ChartArticleModel from "../../../model/IChartArticle";
import RetroComputerImage from "../../../assets/image-retro-pcs.jpg";
import KeyboardImage from "../../../assets/image-top-laptops.jpg";
import JoyconImage from "../../../assets/image-gaming-growth.jpg";

const CHART_ARTICLES: ChartArticleModel[] = [
  {
    id: 1,
    title: "Reviving Retro PCS",
    description: "What happens when old PCs are given modern upgrades?",
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
