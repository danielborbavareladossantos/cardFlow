import React from 'react';

import { store } from '~/store';

import Paper from '@material-ui/core/Paper';

import Ballon from './Ballon';

import { useStyles } from './styles';

export default (props) => {

    const { profile } = store.getState().user;

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {
                props.arrayMessages.map((item, i) => {
                    return (
                        <Ballon
                            key={i}
                            message={item.message}
                            author={item.author}
                            own={(item.author===profile.name)}
                        />
                    );
                })
            }
        </Paper>
    );
};
