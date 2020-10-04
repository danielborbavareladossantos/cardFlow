import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`

`;

export const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
