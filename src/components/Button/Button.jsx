import React from "react";

const Button = ({
  title,
  width,
  height,
  margin,
  padding,
  border,
  borderRadius,
  background,
  color,
  fontSize,
  fontWeight,
  cursor,
  onClick,
  textTransform,
}) => {
  return (
    <button
      style={{
        width: width ? width : "auto",
        height: height ? height : "auto",
        margin: margin ? margin : "0px",
        padding: padding ? padding : "10px 20px",
        border: border ? border : "none",
        outline: "none",
        borderRadius: borderRadius ? borderRadius : "2px",
        background: background ? background : "#00715E",
        color: color ? color : "#fff",
        fontSize: fontSize ? fontSize : "1rem",
        fontWeight: fontWeight ? fontWeight : "400",
        cursor: cursor ? cursor : "pointer",
        textTransform: textTransform ? textTransform : "uppercase",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
