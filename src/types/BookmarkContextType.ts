import { BookmarkState } from "./BookmarkListTypes";

type BookmarkContextType = {
  bookmarks: BookmarkState;
  handleAddBookmark: (title: string, url: string) => void;
  handleRemoveBookmark: (id: number) => void;
};

export type { BookmarkContextType };
