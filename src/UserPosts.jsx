import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPostsUrl } from "./URL";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const UserPosts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const url = getUserPostsUrl(userId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {userPosts.map((userPost) => (
          <Grid item key={userPost.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {userPost.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {userPost.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserPosts;