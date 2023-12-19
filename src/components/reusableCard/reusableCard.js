import React from "react";
import "./reusableCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ReusableCard = ({ icon, title, description }) => {
  return (
    <Card className="reusable-card" sx={{ minWidth: 290, maxWidth: 290, boxShadow: 3 }}>
      <CardActionArea>
        <CardContent className="card-content">
          <span className="card-icon">
            {icon}
          </span>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ReusableCard;
