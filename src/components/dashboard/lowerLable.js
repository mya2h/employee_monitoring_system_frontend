import React, { PureComponent } from 'react';
import {
    AreaChart, Area, RadialBarChart, RadialBar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    all: {
        margin: theme.spacing(3, 3, 2, 2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0, 1, 1, 1),

            // marginTop: theme.spacing(5),
            width: '43%',
            height: theme.spacing(18),
        },
    },
    graph: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0, 1, 1, 1),

            // marginTop: theme.spacing(5),
            width: '100%',
            height: theme.spacing(18),
        },
    },
    count: {
        borderRadius: '4px'
    },
}));
const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
  };
const LowerLabel = () => {
    const radialData = [
        {
            name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
        },
        {
            name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
        },
        {
            name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
        },
        {
            name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
        },
        {
            name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
        },
        {
            name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
        },
        {
            name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
        },
    ];

    const data = [
        { name: 'Mon', uv: 1000 },
        { name: 'Tue', uv: 3000 },
        { name: 'Wed', uv: 2000 },
        { name: 'Thr', uv: 4000 },
        { name: 'Fri', uv: 3500 },
        { name: 'Sat', uv: 6000 },
    ];
    const classes = useStyles()
    return (
        <div className={classes.all}>
            <Grid container spacing={2}>
                <Grid item xs={4} className={classes.root}>
                    <Paper elevation={3} className={classes.count}>
                        data
              </Paper>
                    <Paper elevation={3} className={classes.count}>
                        data
              </Paper>
                    <Paper elevation={3} className={classes.count}>
                        data
              </Paper>
                    <Paper elevation={3} className={classes.count}>
                        data
              </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper>
                        <RadialBarChart width={300} height={300} cx={150} cy={150} innerRadius={10} outerRadius={100} barSize={10} data={data}>
                            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                            {/* <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
                        </RadialBarChart>
                    </Paper>

                </Grid>
                <Grid item xs={4} className={classes.graph}>
                    <Paper elevation={3} className={classes.count}>
                        <div>
                            <LineChart
                                width={300}
                                height={150}
                                data={data}
                                margin={{
                                    top: 10, right: 30, left: 20, bottom: 0,
                                }}
                            >
                                <XAxis dataKey="name" />
                                {/* <YAxis /> */}
                                <Tooltip />
                                <Line connectNulls type="monotone" dataKey="uv" stroke="#FF3D57" fill="#FF3D57" />
                            </LineChart>
                        </div>
                    </Paper>
                    <Paper elevation={3} className={classes.count}>
                        <AreaChart
                            width={300}
                            height={150}
                            data={data}
                            margin={{
                                top: 10, right: 30, left: 20, bottom: 0,
                            }}
                        >

                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#1976d2" />
                        </AreaChart>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default LowerLabel