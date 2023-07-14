import { useState, useEffect } from "react";
import { getPostUrl } from "./URL";
import { Container, Typography } from "@mui/material";

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const url = getPostUrl(postId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      {post && (
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {post.body}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default Post;
