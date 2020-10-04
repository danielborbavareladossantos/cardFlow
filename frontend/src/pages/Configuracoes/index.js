import Languages from '~/config/languages'
import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import { Container, useStyles } from './styles';
import { store } from '~/store';

import { updateSettingRequest } from '~/store/modules/user/actions';

export default function Configuracoes() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [cabecario, setCabecario] = useState(1);
    const [cor, setCor] = useState(1);
    const [language, setLanguage] = useState(Languages.pt.id);
    const { version } = store.getState().setting;

    const handleChangeMenu = (event) => {
        setCabecario(event.target.value);
        var setting = {
            menu: event.target.value,
            cor: {
                opcao: cor,
                lista: null
            },
            idioma: language
        };
        dispatch(updateSettingRequest(setting));
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    };

    const handleChangeColor = (event) => {
        const val = parseInt(event.target.value);
        setCor(val);
        var setting = {
            menu: cabecario,
            cor: {
                opcao: val,
                lista: null
            },
            idioma: language
        };
        dispatch(updateSettingRequest(setting));
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    };

    const handleChangeLanguage = (event) => {
        const val = event.target.value;
        setLanguage(val);
        var setting = {
            menu: cabecario,
            cor: {
                opcao: cor,
                lista: null
            },
            idioma: event.target.value
        };
        dispatch(updateSettingRequest(setting));
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    };

    useEffect(() => {
        const loadData = async () => {
            const { setting } = store.getState().user;
            if (setting != null) {
                setCabecario(setting.menu);
                setCor(setting.cor.opcao);
                setLanguage(setting.idioma);
            } else {
                setCabecario(1);
                setCor(1);
                setLanguage(Languages.pt.id);
            }
        };
        loadData();
    }, []);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                {Languages[language].configuracoes.title}
            </Typography>
            <FormControl className={classes.formControl}>
                <FormLabel component="legend">{Languages[language].configuracoes.cabecalho}</FormLabel>
                    <Select
                        labelId="lb_cabecario"
                        id="id_select"
                        value={cabecario}
                        onChange={handleChangeMenu}
                    >
                    <MenuItem value={1}>{Languages[language].configuracoes.lateralEsquerda}</MenuItem>
                    <MenuItem value={2}>{Languages[language].configuracoes.acima}</MenuItem>
                    <MenuItem value={3}>{Languages[language].configuracoes.lateralDireita}</MenuItem>
                    <MenuItem value={4}>{Languages[language].configuracoes.lateralEsquerdaDinamico}</MenuItem>
                    <MenuItem value={5}>{Languages[language].configuracoes.esquerdaIcons}</MenuItem>
                    </Select>
                    <br/>
                <FormLabel component="legend">{Languages[language].configuracoes.idioma}</FormLabel>
                <Select
                    labelId="lb_language"
                    id="id_language"
                    value={language}
                    onChange={handleChangeLanguage}
                >
                    <MenuItem value={Languages.pt.id}>{Languages.pt.title}</MenuItem>
                    <MenuItem value={Languages.en.id}>{Languages.en.title}</MenuItem>
                    <MenuItem value={Languages.es.id}>{Languages.es.title}</MenuItem>
                </Select>
                <br/>
                <FormLabel component="legend">{Languages[language].configuracoes.corSistema}</FormLabel>
                <RadioGroup aria-label="cor" name="cor" value={cor} onChange={handleChangeColor}>
                    <FormControlLabel value={1} control={<Radio />} label={Languages[language].configuracoes.lightMode} />
                    <FormControlLabel value={2} control={<Radio />} label={Languages[language].configuracoes.darkMode} />
                    {/* <FormControlLabel value={3} disabled control={<Radio />} label={Languages[language].configuracoes.customizada} /> */}
                </RadioGroup>
            </FormControl>
            <Typography variant="h6" gutterBottom>
                {Languages[language].sobre.title}
            </Typography>
            <FormControl className={classes.formControl}>
                <FormLabel component="legend">
                    {Languages[language].sobre.versionText+version}
                </FormLabel>
            </FormControl>
        </Container>
    );
}
