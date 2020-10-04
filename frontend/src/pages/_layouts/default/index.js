import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';

import Menu1 from '~/components/Menu1';
import Menu2 from '~/components/Menu2';
import Menu3 from '~/components/Menu3';
import Menu4 from '~/components/Menu4';
import Menu5 from '~/components/Menu5';

import { Wrapper } from './styles';

import { store } from '~/store';
import theme from '~/styles/palette';

export default function DefaultLayout({ children }) {
    const { setting } = store.getState().user;
    const temaPrivate = theme(setting);

    const MenuDecide = () => {
        if (setting.menu === 2) {
            return (<Menu2 component={children}/>);
        } else if (setting.menu === 3) {
            return (<Menu3 component={children}/>);
        } else if (setting.menu === 4) {
            return (<Menu4 component={children}/>);
        } else if (setting.menu === 5) {
            return (<Menu5 component={children}/>);
        }
        else {
            return (<Menu1 component={children}/>);
        }
    }

    return (
        <Wrapper>
            <ThemeProvider theme={temaPrivate}>
                <MenuDecide/>
            </ThemeProvider>
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
