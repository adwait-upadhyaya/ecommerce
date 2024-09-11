import React from "react";
import { IText } from "../interfaces/IText";
const Text = (props: IText) => {
  const { type, color, children } = props;
  const BaseComponent = type ?? "p";
  return React.createElement(BaseComponent, { style: { color } }, children);
};
export default Text;
