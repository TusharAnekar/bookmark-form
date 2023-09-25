import React, { ReactNode, useContext, createContext, useReducer } from "react";
import { BookmarkContextType } from "../types/BookmarkContextType";
import {
  bookmarksReducer,
  initialBookmarks,
} from "../reducers/bookmarkReducer";

const BookmarksContext = createContext<BookmarkContextType | undefined>(
  undefined
);

const BookmarksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useReducer(
    bookmarksReducer,
    initialBookmarks
  );

  const handleAddBookmark = (title: string, url: string) => {
    setBookmarks({ type: "ADD_BOOKMARK", title, url });
  };

  const handleRemoveBookmark = (id: number) => {
    setBookmarks({ type: "REMOVE_BOOKMARK", id });
  };
  return (
    <BookmarksContext.Provider
      value={{ bookmarks, handleAddBookmark, handleRemoveBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("use Bookmark must be used within a Bookmark Provider");
  }
  return context;
};

export { useBookmarksContext, BookmarksProvider };
