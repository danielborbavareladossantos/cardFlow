import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export const MenuCss = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginTop: '60px'
    },
    button: {
        textDecoration: `none`,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
        border: 'none'
    },
    perfil: {
        marginTop: '20px'
    }
}));
