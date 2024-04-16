import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function ExperienceCard({
  role,
  company,
  location,
  from,
  to,
}: {
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
}) {
  return (
    <Card  sx={{maxWidth:"10rem", boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}className="flex-col justify-center mb-10 w-auto mx-4 max-w-4xl">
      <CardContent className="w-72 max-h-60 min-h-36">
        <div className="flex justify-between px-4 py-4 flex-wrap gap-x-6 gap-y-8">
          <div className="flex-col items-left text-left">
            <Typography className="text-lg font-semibold">{role}</Typography>
            <div className="flex justify-between mt-4  gap-x-6">
              <div className="flex gap-x-2 items-center">
                <img
                  className="h-4 w-4 object-cover"
                  src="/company.png"
                  alt=""
                />
                <Typography color="text.secondary">{company}</Typography>
              </div>
              <div className="flex gap-x-2 items-center">
                <img
                  className="h-4 w-4 object-cover"
                  src="/location.png"
                  alt=""
                />
                <Typography color="text.secondary">{location}</Typography>
              </div>
            </div>
          </div>
          <div className="flex-col items-left text-left gap-y-4">
            <div className="flex gap-x-2 items-center">
              <img
                className="h-4 w-4 object-cover"
                src="/calendar.png"
                alt=""
              />
              <Typography className="text-sm font-semibold">
                {from} - {to}
              </Typography>
            </div>
            <Chip
              sx={{ color: "#22c55e", fontWeight: 800 }}
              label="Full Time"
              color="success"
              className="font-semibold bg-emerald-100 mt-4"
            />
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
