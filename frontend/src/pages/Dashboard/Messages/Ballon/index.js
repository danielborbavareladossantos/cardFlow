import React from 'react';

import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';

export default (props) => {

    const classes = useStyles();

    return (
        <>
            {props.own &&
                <Paper className={classes.paperOwn}>
                    {props.message}
                </Paper>
            }
            {!props.own &&
                <Paper className={classes.paperOther}>
                    {props.message}
                </Paper>
            }
        </>
    );
};
