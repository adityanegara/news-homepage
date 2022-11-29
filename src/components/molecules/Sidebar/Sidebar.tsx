import styled from "@emotion/styled";
import { motion, Variants } from "framer-motion";

const SidebarContainer = styled(motion.ul)(
  {
    margin: "6vh 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    listStyleType: "none",
    padding: "0",
    marginLeft: "3vh",
    gap: "30px",
    fontWeight: 500,
    fontSize: "1.2em",
    cursor: "pointer",
  },
  ({ theme }) => ({
    color: theme.colors.neutral.black,
    ["li"]: {
      transition: "ease-in 0.2s",
      ["&:hover"]: {
        color: theme.colors.primary.second,
      },
    },
  })
);

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
  hidden: { opacity: 0 },
};

const item: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const Sidebar = (): JSX.Element => {
  return (
    <SidebarContainer initial="hidden" animate="visible" variants={list}>
      <motion.li variants={item}>
        <a>Home</a>
      </motion.li>
      <motion.li variants={item}>
        <a>New</a>
      </motion.li>
      <motion.li variants={item}>
        <a>Popular</a>
      </motion.li>
      <motion.li variants={item}>
        <a>Trending</a>
      </motion.li>
      <motion.li variants={item}>
        <a>Categories</a>
      </motion.li>
    </SidebarContainer>
  );
};

export default Sidebar;
