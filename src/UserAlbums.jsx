import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserAlbumsUrl } from "./URL";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import User from "./User";

const UserAlbums = () => {
  const { userId } = useParams();
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    const url = getUserAlbumsUrl(userId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUserAlbums(json));
  }, []);

  return (
    <Box sx={{ bgColor: "background.paper", pt: 8, pb: 6 }}>
      <User userId={userId} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {userAlbums.map((userAlbum) => (
            <Grid item key={userAlbum.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {userAlbum.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UserAlbums;
