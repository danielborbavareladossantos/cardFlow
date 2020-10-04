import React from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';

import { signOut } from '~/store/modules/auth/actions';

import { store } from '~/store';
import Languages from '~/config/languages'

import { MenuCss } from './styles';

const ResponsiveDrawer = (props) => {
    const classes = MenuCss();
    const dispatch = useDispatch();
    const path = process.env.REACT_APP_ROUTER_BASE || '';
    const { setting, profile } = store.getState().user;

    const handleSignOut = () => {
        dispatch(signOut());
    }

    const goto = (link) => {
        props.component.props.history.push(path+link);
    }

    const filterText = (text) => {
        if (text != null && text.length > 27) {
            return text.substring(0,27)+'...';
        } else {
            return text;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={0}>
                        <Grid item xs={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    <Avatar
                                        src={
                                            profile.avatar
                                            ? profile.avatar.url
                                            : `https://api.adorable.io/avatars/50/${profile.email}.png`
                                        }
                                        alt={profile.name}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <Link to="/profile">{filterText(profile.name)}</Link>
                                    <br/>
                                    <Link onClick={handleSignOut}>{'Sair'}</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <ListItem button divider onClick={(e) => {goto('/dashboard')}}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={Languages[setting.idioma].dashboard.title} />
                    </ListItem>
                    <ListItem button divider onClick={(e) => {goto('/configuracoes')}}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={Languages[setting.idioma].configuracoes.title} />
                    </ListItem>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                {props.component}
            </main>
        </div>
    );
};

export default ResponsiveDrawer;
