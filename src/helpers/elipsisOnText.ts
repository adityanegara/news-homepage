const elipsisOnText = (text: string, maxString: number): string => {
  if (text.length > maxString) {
    return text.substring(0, maxString) + "...";
  }
  return text;
};

export default elipsisOnText;
