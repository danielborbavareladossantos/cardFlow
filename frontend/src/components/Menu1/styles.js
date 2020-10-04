import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
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
        paddingTop: theme.spacing(10),
        height: '100%'
    },
    button: {
        textDecoration: `none`,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
        border: 'none'
    }
}));
