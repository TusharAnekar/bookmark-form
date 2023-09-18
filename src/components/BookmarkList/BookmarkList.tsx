import { NavLink } from "react-router-dom"
import { useBookmarksContext } from "../../contexts/BookmarkContext"

const BookmarkList = () => {
    const {bookmarks: {bookmarks}, handleRemoveBookmark} = useBookmarksContext()
    return(
        <div>
            {
                bookmarks.map((item) => {
                    const {id, title, url} = item
                    return(
                        <li key={id}>
                            <NavLink to={url}>{title}</NavLink>
                            <button onClick={() => handleRemoveBookmark(id)}>Remove</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export {BookmarkList}