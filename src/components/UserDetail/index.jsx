import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Link } from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Grid item xs={11} sm={8} md={6}>
        <Card elevation={4}>
          <CardContent>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Avatar sx={{ bgcolor: "#1976d2", width: 56, height: 56 }}>
                {user.first_name[0]}
              </Avatar>
              <Typography variant="h4">
                {user.first_name} {user.last_name}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <WorkIcon
                sx={{ fontSize: 20, color: "#1976d2", verticalAlign: "middle" }}
              />
              <strong> Occupation: </strong> {user.occupation}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <PlaceIcon
                sx={{ fontSize: 20, color: "red", verticalAlign: "middle" }}
              />
              <strong> Location: </strong> {user.location}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {user.description}
            </Typography>
            <Button
              component={Link}
              to={`/photos/${userId}`}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              startIcon={<InsertPhotoIcon />}
            >
              View Photos
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserDetail;
