/*
 * generates random colors from  https://ant.design/docs/spec/colors. <color-4> used.
 */
export const getRandomColorFromString = (text: string): string => {
  const colors: string[] = [
    "#ff85c0",
    "#ff7875",
    "#ffc069",
    "#ffd666",
    "#5cdbd3",
    "#69c0ff",
    "#fadb14",
    "#b37feb",
    "#95de64",
    "#85a5ff",
    "#ff9c6e",
  ];

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;

  return colors[hash];
};
