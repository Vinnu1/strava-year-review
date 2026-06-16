import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  Cell,
} from "recharts";

type Activity = {
  title: string;
  data: {
    total?: number;
    chart: object[];
  };
  color?: string;
  datakey: { x: string; y: string };
};

export default function ActivityCard({ title, data, datakey }: Activity) {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 400, margin: 5, flex: "1 1 400" }}>
      <CardHeader title={title} sx={{ textAlign: "center" }} />
      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        {data.total ? `Total ${data.total} ${datakey.x}!` : null}
      </Typography>
      <CardContent sx={{ height: 280, width: 350 }}>
        {/* 
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.chart}>
            <XAxis dataKey={datakey.y} />
            <YAxis>
              <Label />
            </YAxis>
            <Bar dataKey={datakey.x} fill="#119d73" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
