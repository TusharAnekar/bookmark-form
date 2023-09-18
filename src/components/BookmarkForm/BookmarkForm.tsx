import { useState } from "react"
import { InitialFormInputProps } from "../../types/BookmarkFormTypes"
import { useBookmarksContext } from "../../contexts/BookmarkContext"

const BookmarkForm = ():JSX.Element => {
    const [formInput, setFormInput] = useState<InitialFormInputProps>({title: "", url: ""})
    const {handleAddBookmark} = useBookmarksContext()

    const handleInput: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        setFormInput({...formInput, [e.currentTarget.name]: e.currentTarget.value})
    }

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        handleAddBookmark(formInput.title, formInput.url)
        setFormInput({...formInput, title: "", url: ""})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title: 
                    <input type="text" name="title" value={formInput.title} required onChange={handleInput}/>
                </label>
                <label>
                    URL: 
                    <input type="url" name="url" value={formInput.url} required onChange={handleInput}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export {BookmarkForm}