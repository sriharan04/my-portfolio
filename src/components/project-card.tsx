import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard({
  name,
  image,
  description,
}: {
  name: string;
  image: string;
  description: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow:1,
        height:"100%",
        maxWidth:"20rem",
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
      className="flex-col justify-center items-center"
    >
      <img className="h-40 w-40 object-contain " src={image} alt="" />
      <CardContent className="bg-slate-50 text-black">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-center"
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
