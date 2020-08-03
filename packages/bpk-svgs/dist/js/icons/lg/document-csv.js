import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 2h-7.94a2.885 2.885 0 0 0-1.992.786l-4.242 4.04A2.622 2.622 0 0 0 3 8.724v10.419A2.932 2.932 0 0 0 6 22h12a2.932 2.932 0 0 0 3-2.857V5a3.226 3.226 0 0 0-3-3zM5.77 7.042l2.344-2.315a.3.3 0 0 1 .51.213v2.316a.3.3 0 0 1-.3.3H5.98a.3.3 0 0 1-.21-.514zm1.638 9.991a1.328 1.328 0 0 0 1.395-1.125c.015-.058.045-.083.089-.083h.746c.059 0 .089.025.081.108A2.252 2.252 0 0 1 7.408 18C6.24 18 5 17.1 5 15s1.24-3 2.408-3a2.245 2.245 0 0 1 2.311 2.092c.008.066-.022.083-.081.083h-.746c-.044 0-.074-.025-.09-.083a1.329 1.329 0 0 0-1.394-1.125c-.71 0-1.448.658-1.448 2.033s.738 2.033 1.448 2.033zm4.814.967a1.96 1.96 0 0 1-2.001-1.967c0-.058.022-.083.073-.083h.776c.052 0 .066.025.074.083a1.012 1.012 0 0 0 1.122 1c.628 0 1.02-.316 1.02-.775 0-.416-.465-.683-1.175-.883-1.108-.317-1.765-.758-1.765-1.717A1.68 1.68 0 0 1 12.156 12a1.818 1.818 0 0 1 1.905 1.742c0 .058-.022.083-.074.083h-.783c-.052 0-.066-.025-.073-.083a.903.903 0 0 0-.99-.775c-.48 0-.864.208-.864.641 0 .492.568.717 1.226.925.879.275 1.713.692 1.713 1.617A1.778 1.778 0 0 1 12.222 18zm6.771-5.825l-1.773 5.658c-.015.05-.036.084-.096.084h-.886c-.059 0-.08-.034-.096-.084l-1.773-5.658a.13.13 0 0 1-.007-.042c0-.033.022-.05.066-.05h.857a.095.095 0 0 1 .104.084l1.197 4.17a.096.096 0 0 0 .19 0l1.197-4.17a.094.094 0 0 1 .104-.084h.856c.045 0 .067.017.067.05a.13.13 0 0 1-.007.042z" /></svg>);