import { BookmarkAction, BookmarkState } from "../types/BookmarkListTypes";

const initialBookmarks: BookmarkState = {
  bookmarks: [],
};

const bookmarksReducer = (
  state: BookmarkState,
  action: BookmarkAction
): BookmarkState => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks,
          { id: Date.now(), title: action.title, url: action.url },
        ],
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.id
        ),
      };

    default:
      return state;
  }
};

export { initialBookmarks, bookmarksReducer };
