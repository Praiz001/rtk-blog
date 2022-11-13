import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";

import { postAdded } from "./postsSlice";


const AddPostsForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setuserId] = useState("");

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setuserId(e.target.value)
  const users = useSelector(selectAllUsers)

  const savePostHandler = () => {
    if ( title && content) {
      dispatch (
        postAdded( title, content, userId )
      )

      setTitle('')
      setContent('')
      setuserId('')
    }
  }
 

  const validateSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map( user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  )) 


  return (
    <section>
      <form>
        <h2>Add a new post</h2>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
            type="text"
            name='postTitle'
            id='postTitle'
            value={title}
            onChange= {onTitleChanged}
        />

        <label htmlFor="postId">Author:</label>
        <select  id="postId" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <input 
            type="text"
            name='postContent'
            id='postContent'
            value={content}
            onChange= { onContentChanged }
        />
        <button 
          type="button" 
          onClick={savePostHandler}
          disabled= {!validateSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
