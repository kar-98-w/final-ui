import React, { useState } from "react";
import { createPost } from "../api/api";

interface PostFormProps {
  onPostCreated: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ author, content, imageUrl });
    setAuthor("");
    setContent("");
    setImageUrl("");
    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;