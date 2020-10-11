import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paperOwn: {
        padding: 10,
        margin: 10,
        marginLeft: 50,
        backgroundColor: '#25D366',
        color: 'black'
    },
    paperOther: {
        padding: 10,
        margin: 10,
        marginRight: 50,
        backgroundColor: '#666666',
        color: 'white'
    },
    date: {
        textAlign: 'right'
    }
}));
