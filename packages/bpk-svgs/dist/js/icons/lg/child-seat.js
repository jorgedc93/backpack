import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3.603 3.5c-.348 0-.696.35-.58.583L4.88 15.517A2.427 2.427 0 0 0 7 17.5h10a1 1 0 0 0 1-1v-1a2.15 2.15 0 0 0-2-2H9.724a1.003 1.003 0 0 1-.952-.685c-.468-1.39-1.566-4.58-2.453-6.632C5.854 4.55 5.229 3.5 3.603 3.5zM3 19.5a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" /></svg>);