import React, { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "./api/api";
import type { Post } from "./types/Post";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import EditPostModal from "./components/EditPostModal";
import "./App.css";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    setPosts(await getAllPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchPosts();
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleCloseEdit = () => {
    setEditingPost(null);
  };

  return (
    <div className="app-container">
      <h1>Marron Social Media</h1>
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      {editingPost && (
        <EditPostModal
          post={editingPost}
          onClose={handleCloseEdit}
          onPostUpdated={fetchPosts}
        />
      )}
    </div>
  );
};

export default App;