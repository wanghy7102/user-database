import { useState, useEffect } from "react";
import { getUserUrl } from "./URL";
import { Container, Typography } from "@mui/material";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = getUserUrl(userId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <>
      {user && (
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {user.name}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {user.email}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default User;
