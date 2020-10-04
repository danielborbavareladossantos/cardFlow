import { createMuiTheme } from '@material-ui/core/styles';

const Override = {
    overrides: {
        MuiLink: {
            root: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
    }
};

const Light = {
    palette: {
      primary: {
        main: '#be0303',
        light: 'rgba(255,255,255,1)',
      },
      secondary: {
        main: 'rgba(0,0,0,1)',
        light: '#f2f2f2',
      },
      text: {
        primary: '#666666'
      },
      type: 'light',
    },
    ...Override,
    overrides: {
        MuiLink: {
            root: {
                color: '#666666',
                cursor: 'pointer'
            }
        },
    }
};

const Dark = {
    palette: {
      primary: {
        main: '#303030',
        light: 'rgba(40,40,40,1)',
      },
      secondary: {
        main: 'rgba(255,255,255,1)',
        light: '#f2f2f2',
      },
      type: 'dark',
    },
    ...Override,
    overrides: {
        MuiLink: {
            root: {
                color: '#fff',
                cursor: 'pointer'
            }
        },
    }
};

const checkColor = (setting) => {
    var estilo = null;
    if (setting.cor.opcao === 1) {
        estilo = Light;
    } else {
        estilo = Dark;
    }
    return createMuiTheme(estilo);
};

export default checkColor;
