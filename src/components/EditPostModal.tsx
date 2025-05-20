import React, { useState } from "react";
import type { Post } from "../types/Post";
import { updatePost } from "../api/api";

interface EditPostModalProps {
  post: Post | null;
  onClose: () => void;
  onPostUpdated: () => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({
  post,
  onClose,
  onPostUpdated,
}) => {
  const [content, setContent] = useState(post?.content || "");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl || "");

  if (!post) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost(post.id, { content, imageUrl });
    onPostUpdated();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (optional)"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose} style={{marginLeft:8}}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;