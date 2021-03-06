import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M2.25 4.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3V6a4.5 4.5 0 0 1 0 9v4.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm15 7.5a1.5 1.5 0 0 0 0-3zm-12-6.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0z" /></svg>);