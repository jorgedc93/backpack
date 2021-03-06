import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M9 7.518a1.5 1.5 0 0 0 1.5 1.5h6.877l-1.939 1.94a1.5 1.5 0 0 0 2.122 2.12l5.56-5.56-5.56-5.56a1.5 1.5 0 0 0-2.158 2.084l.036.036 1.941 1.94H10.5a1.5 1.5 0 0 0-1.5 1.5zm6 9a1.5 1.5 0 0 0-1.5-1.5H6.62l1.94-1.94a1.5 1.5 0 0 0-2.123-2.12L.88 16.518l5.56 5.56a1.5 1.5 0 0 0 2.122-2.12l-1.942-1.94h6.88a1.5 1.5 0 0 0 1.5-1.5z" /></svg>);