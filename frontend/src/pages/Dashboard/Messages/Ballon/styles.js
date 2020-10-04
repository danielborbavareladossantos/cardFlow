import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paperOwn: {
        padding: 10,
        margin: 20,
        backgroundColor: 'lightgreen',
        color: 'black'
    },
    paperOther: {
        padding: 10,
        margin: 10,
        backgroundColor: '#666666',
        color: 'white'
    },
}));
