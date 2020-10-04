import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Content>
                <Paper elevation={3} style={{padding:'20px'}}>
                    {children}
                </Paper>
            </Content>
        </Wrapper>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
