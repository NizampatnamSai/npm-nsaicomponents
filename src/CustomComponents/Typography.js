import React from "react";

const variantMap = {
  h1: {
    tag: "h1",
    fontSize: "6rem",
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
  },
  h2: {
    tag: "h2",
    fontSize: "3.75rem",
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    tag: "h3",
    fontSize: "3rem",
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: "0em",
  },
  h4: {
    tag: "h4",
    fontSize: "2.125rem",
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  h5: {
    tag: "h5",
    fontSize: "1.5rem",
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  h6: {
    tag: "h6",
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    tag: "p",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    tag: "p",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    tag: "p",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  body2: {
    tag: "p",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
  },
  caption: {
    tag: "span",
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    tag: "span",
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
};

const Typography = ({
  variant = "body1",
  children,
  color = "#000",
  align = "left",
  fontWeight,
  gutterBottom = false,
  noWrap = false,
  as,
  style = {},
  ...rest
}) => {
  const fallback = {
    tag: "span",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0em",
  };

  const config = variantMap[variant] || fallback;
  const Component = as || config.tag;

  const combinedStyle = {
    margin: 0,
    padding: 0,
    color,
    fontSize: config.fontSize,
    fontWeight: fontWeight ?? config.fontWeight,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    lineHeight: config.lineHeight,
    letterSpacing: config.letterSpacing,
    textAlign: align,
    textTransform: config.textTransform || "none",
    marginBottom: gutterBottom ? "0.35em" : "0px",
    whiteSpace: noWrap ? "nowrap" : undefined,
    overflow: noWrap ? "hidden" : undefined,
    textOverflow: noWrap ? "ellipsis" : undefined,
    ...style,
  };

  return React.createElement(
    Component,
    { style: combinedStyle, ...rest },
    children
  );
};

export default Typography;
