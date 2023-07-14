import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserTodosUrl } from "./URL";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import User from "./User";

const UserTodos = () => {
  const { userId } = useParams();
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    const url = getUserTodosUrl(userId);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUserTodos(json));
  }, []);

  return (
    <Box sx={{ bgColor: "background.paper", pt: 8, pb: 6 }}>
      <User userId={userId} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {userTodos.map((userTodo) => (
            <Grid item key={userTodo.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {userTodo.title}
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

export default UserTodos;
