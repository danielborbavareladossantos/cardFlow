import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
    margin: auto;
    width: 50%;
`;

export const useStyles = makeStyles((theme) => ({
    input: {
        padding: 5,
        width: '100%'
    },
}));
