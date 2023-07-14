import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostCommentsUrl } from "./URL";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Post from "./Post";

const PostComments = () => {
  const { postId } = useParams();
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const url = getPostCommentsUrl(postId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPostComments(json));
  }, []);

  return (
    <Box sx={{ bgColor: "background.paper", pt: 8, pb: 6 }}>
      <Post postId={postId} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {postComments.map((postComment) => (
            <Grid item key={postComment.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {postComment.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {postComment.email}
                  </Typography>
                  <Typography variant="body2">{postComment.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PostComments;
