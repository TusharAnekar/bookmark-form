import { useState } from "react";

import "./bookmarkForm.css"
import { InitialFormInputProps } from "../../types/BookmarkFormTypes";
import { useBookmarksContext } from "../../contexts/BookmarkContext";

const BookmarkForm = (): JSX.Element => {
  const [formInput, setFormInput] = useState<InitialFormInputProps>({
    title: "",
    url: "",
  });
  const { handleAddBookmark } = useBookmarksContext();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormInput({
      ...formInput,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleAddBookmark(formInput.title, formInput.url);
    setFormInput({ ...formInput, title: "", url: "" });
  };

  return (
    <div className="bookmark-form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Title:
          <input
            type="text"
            name="title"
            value={formInput.title}
            required
            className="input"
            onChange={handleInput}
          />
        </label>
        <label className="label">
          URL:
          <input
            type="url"
            name="url"
            value={formInput.url}
            required
            className="input"
            onChange={handleInput}
          />
        </label>
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
};

export { BookmarkForm };
