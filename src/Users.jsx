import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersUrl } from "./URL";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = getUsersUrl();
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={(e) =>
                    navigate(`/user-database/users/${user.id}/posts`)
                  }
                >
                  Posts
                </Button>
                <Button
                  size="small"
                  onClick={(e) =>
                    navigate(`/user-database/users/${user.id}/albums`)
                  }
                >
                  Albums
                </Button>
                <Button
                  size="small"
                  onClick={(e) =>
                    navigate(`/user-database/users/${user.id}/todos`)
                  }
                >
                  Todos
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Users;
