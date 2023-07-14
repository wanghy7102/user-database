import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbumPhotosUrl } from "./URL";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Album from "./Album";

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [albumPhotos, setAlbumPhotos] = useState([]);

  useEffect(() => {
    const url = getAlbumPhotosUrl(albumId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setAlbumPhotos(json));
  }, []);

  return (
    <Box sx={{ bgColor: "background.paper", pt: 8, pb: 6 }}>
      <Album albumId={albumId} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {albumPhotos.map((albumPhoto) => (
            <Grid item key={albumPhoto.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ pt: "56.25%" }}
                  image={albumPhoto.thumbnailUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {albumPhoto.title}
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

export default AlbumPhotos;
