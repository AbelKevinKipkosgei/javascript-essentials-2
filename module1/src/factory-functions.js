let createColoredPoint = function (x, y, color) {
  let _info = "...object under construction";
  let _color = color;
  console.log(_info);
  return {
    x,
    y,
    getColor() {
      return _color;
    },
  };
};

let coloredPoint1 = createColoredPoint(1, 1, "Red");
let coloredPoint2 = createColoredPoint(2, 2, "Green");

console.log(coloredPoint1.getColor());
console.log(coloredPoint2.getColor());
