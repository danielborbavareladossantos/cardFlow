import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
    margin: auto;
    width: 50%;
`;

export const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 20,
        width: 600,
        position: 'absolute',
        height: '80%'
    },
    input: {
        padding: 5,
        width: '100%'
    }
}));
