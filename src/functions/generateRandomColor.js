const generateRandomColor = (both) => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  if (both === true) {
    const lowerOpacityColor = color + "50";
    return [lowerOpacityColor, color];
  }

  return color;
};

export default generateRandomColor;
