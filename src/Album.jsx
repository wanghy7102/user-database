import { useState, useEffect } from "react";
import { getAlbumUrl } from "./URL";
import { Container, Typography } from "@mui/material";

const Album = ({ albumId }) => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const url = getAlbumUrl(albumId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setAlbum(json));
  }, []);

  return (
    <>
      {album && (
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {album.title}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default Album;
