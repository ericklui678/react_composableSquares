import React from 'react';

const Square = ({style, text, color, backColor}) => {
  style.color = color;
  style.backgroundColor = backColor;
  return (
    <div style={style}>{text}</div>
  );
};

export default Square;
