import { InitialFormInputProps } from "./BookmarkFormTypes";

type BookmarkProps = InitialFormInputProps & {
  id: number;
};

type BookmarkState = {
  bookmarks: BookmarkProps[];
};

type AddBookmarkAction = {
  type: "ADD_BOOKMARK";
  title: string;
  url: string;
};

type RemoveBookmarkAction = {
  type: "REMOVE_BOOKMARK";
  id: number;
};

type BookmarkAction = AddBookmarkAction | RemoveBookmarkAction;

export type { BookmarkState, BookmarkAction };
