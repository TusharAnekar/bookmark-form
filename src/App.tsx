import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BookmarkForm } from "./components/BookmarkForm/BookmarkForm";
import { BookmarkList } from "./components/BookmarkList/BookmarkList";

function App() {
  return (
    <div className="App">
      <Header title={"Bookmark App"} />
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}

export default App;
