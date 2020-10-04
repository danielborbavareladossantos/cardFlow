import React from 'react';
import { useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';

import { signOut } from '~/store/modules/auth/actions';

import img_logo_color from '~/assets/logo-color.png';
import img_logo_white from '~/assets/logo-white.png';

import { store } from '~/store';
import Languages from '~/config/languages'

import { MenuCss } from './styles';

const ResponsiveDrawer = (props) => {
    const classes = MenuCss();
    const dispatch = useDispatch();
    const { setting, profile } = store.getState().user;
    const path = process.env.REACT_APP_ROUTER_BASE || '';
    const imgLogo = (setting.cor.opcao === 1)?img_logo_color:img_logo_white;

    const handleSignOut = () => {
        dispatch(signOut());
    }

    const goto = (link) => {
        props.component.props.history.push(path+link);
    }

    const filterText = (text) => {
        if (text != null && text.length > 30) {
            return text.substring(0,30)+'...';
        } else {
            return text;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Typography variant="h6" noWrap>
                                {process.env.REACT_APP_NAME}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} align={'right'}>
                            <Grid container spacing={1}>
                                <Grid item xs={10}>
                                    <Link to="/profile">{filterText(profile.name)}</Link>
                                    <br/>
                                    <Link onClick={handleSignOut}>{'Sair'}</Link>
                                </Grid>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} align={'center'}>
                    <br/>
                    <img src={imgLogo} alt={'Logo'} width={80} heigth={50}/>
                </div>
                <Divider />
                <List>
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
                </List>
            </Drawer>
            <main className={classes.content}>
                {props.component}
            </main>
        </div>
    );
};

export default ResponsiveDrawer;
