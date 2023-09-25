import { NavLink } from "react-router-dom";

import "./bookmarkList.css";
import { useBookmarksContext } from "../../contexts/BookmarkContext";

const BookmarkList = () => {
  const {
    bookmarks: { bookmarks },
    handleRemoveBookmark,
  } = useBookmarksContext();
  return (
    <div className="bookmark-list-container">
      <h2>Bookmarks</h2>
      <ol>
        {bookmarks.map((item) => {
          const { id, title, url } = item;
          return (
            <li key={id} className="list-container">
              <NavLink to={url} className={"title-link"}>
                {title}
              </NavLink>
              <button
                className="remove-button"
                onClick={() => handleRemoveBookmark(id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export { BookmarkList };
