import { makeStyles } from '@material-ui/core/styles';

import bgDark from '~/assets/bg-con-dark.jpg';
import bgLight from '~/assets/bg-con-light.png';

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: 650,
        overflow: 'auto',
        marginBottom: 10,
        backgroundImage: `url(${theme.palette.type==='light'?bgLight:bgDark})`
    },
}));
