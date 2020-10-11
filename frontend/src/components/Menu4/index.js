import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';

import { signOut } from '~/store/modules/auth/actions';
import { store } from '~/store';
import Languages from '~/config/languages'

import img_logo_color from '~/assets/logo-color.png';
import img_logo_white from '~/assets/logo-white.png';

import { MenuCss } from './styles';

const ResponsiveDrawer = (props) => {
    const classes = MenuCss();
    const { setting, profile } = store.getState().user;
    const dispatch = useDispatch();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const imgLogo = (setting.cor.opcao === 1)?img_logo_color:img_logo_white;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        dispatch(signOut());
    }

    const goto = (link) => {
        props.component.props.history.push(link);
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
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                            <Typography variant="h6" noWrap style={{marginLeft:20}}>
                                {process.env.REACT_APP_NAME}
                            </Typography>
                        </IconButton>
                        <Typography variant="h6" noWrap className={clsx(!open && classes.hide)}>
                            {process.env.REACT_APP_NAME}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} align={'right'}>
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <Link onClick={()=>{goto('/profile')}}>{filterText(profile.name)}</Link>
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
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={11}>
                    <div className={classes.toolbar} align={'center'}>
                        <br/>
                        <img src={imgLogo} alt={'Logo'} width={80} heigth={50}/>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
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
        <main
            className={clsx(classes.content, {
            [classes.contentShift]: open,
            })}
        >
            {props.component}
        </main>
        </div>
    );
};

export default ResponsiveDrawer;
