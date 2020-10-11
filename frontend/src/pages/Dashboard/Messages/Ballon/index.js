import React from 'react';
import {Typography, Paper} from '@material-ui/core';

import { useStyles } from './styles';

export default (props) => {

    const classes = useStyles();

    return (
        <>
            {props.own &&
                <Paper className={classes.paperOwn}>
                    <Typography variant="subtitle2" gutterBottom>
                        <b>{props.props.author}</b>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {props.props.message}
                    </Typography>
                    <Typography
                        className={classes.date}
                        variant="caption"
                        display="block"
                        gutterBottom
                    >
                        {props.props.date}
                    </Typography>
                </Paper>
            }
            {!props.own &&
                <Paper className={classes.paperOther}>
                    <Typography variant="subtitle2" gutterBottom>
                        <b>{props.props.author}</b>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {props.props.message}
                    </Typography>
                    <Typography
                        className={classes.date}
                        variant="caption"
                        display="block"
                        gutterBottom
                    >
                        {props.props.date}
                    </Typography>
                </Paper>
            }
        </>
    );
};
