import React from "react";
import type { Post } from "../types/Post";

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="post-list">
      {posts.slice().reverse().map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <strong>{post.author}</strong>
            <span className="timestamp">
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="post-content">{post.content}</div>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post" className="post-image" />
          )}
          <div className="post-actions">
            <button onClick={() => onEdit(post)}>Edit</button>
            <button onClick={() => onDelete(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;