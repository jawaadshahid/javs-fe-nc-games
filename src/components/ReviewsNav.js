import React from "react";

function ReviewsNav({ categories, category, setCategory, setSortby }) {
  const onCategoryChange = (event) => {
    setCategory(event.target.value === "all" ? null : event.target.value);
  };
  const onSortChange = (event) => {
    setSortby(event.target.value);
  };

  return (
    <>
      <nav>
        <ul>
          {categories.map(({ slug }) => {
            return (
              <li key={slug}>
                <label>
                  <span>{slug.split("-").join(" ")}</span>
                  <input
                    type="radio"
                    name="category"
                    value={slug}
                    checked={slug === category}
                    onChange={onCategoryChange}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </nav>
      <form>
        <label>
          <span>sort by:</span>
          <select onChange={onSortChange}>
            <option value="created_at">created at</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
          </select>
        </label>
      </form>
    </>
  );
}

export default ReviewsNav;
