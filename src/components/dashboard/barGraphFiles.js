import React, {useEffect, PureComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const useStyle = makeStyles((theme) => ({
  graph: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    width: "95%",
  },
}));
const data = [
  {
    name: "Sept",
    Files: 4000,
    Suspicious: 2400,
    amt: 2400,
  },
  {
    name: "Oct",
    Files: 3000,
    Suspicious: 1398,
    amt: 2210,
  },
  {
    name: "Nov",
    Files: 2000,
    Suspicious: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    Files: 2780,
    Suspicious: 3908,
    amt: 2000,
  },
  {
    name: "Jan",
    Files: 1890,
    Suspicious: 4800,
    amt: 2181,
  },
  {
    name: "Feb",
    Files: 2390,
    Suspicious: 3800,
    amt: 2500,
  },
  {
    name: "Mar",
    Files: 3490,
    Suspicious: 4300,
    amt: 2100,
  },
];

const BarGraphFiles = () => {
  const classes = useStyle();
  const [graphFile,setGraph] = React.useState([])
  useEffect(() => {
    const config = {
      headers:{
          'Content-Type': 'application/json'
      }
  }
  try {
      axios.get('http://localhost:5000/api/dashboard/suspicous/report', config).then((data)=>{
        setGraph(data.data)
      })
  }
  catch (err) {
      console.log(err.response)
  }
  }, [])
  return (
    // <Paper className={classes.graph}>
      <BarChart
        width={450}
        height={400}
        data={graphFile}
        padding={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip cursor={{ fill: "none" }} />
        <Legend ayout="horizontal" verticalAlign="top" align="center" />
        <Bar dataKey="Suspicous" fill="#FFAF38" radius={[10, 10, 0, 0]} />
      </BarChart>
    // </Paper>
  );
  
};
export default BarGraphFiles;
