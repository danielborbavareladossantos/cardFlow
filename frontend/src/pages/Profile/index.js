import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, TextField, Button, FormControl } from '@material-ui/core';
import api from '~/services/api';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, useStyles } from './styles';

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    const [name,setName] = useState(profile.name);
    const [email,setEmail] = useState(profile.email);
    const [passwordOld,setPasswordOld] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm] = useState('');

    const [file, setFile] = useState(profile.avatar==null?null:profile.avatar.id);
    const [preview, setPreview] = useState(profile.avatar==null?null:profile.avatar.url);

    const handleSubmit = () => {
        const data = {
            avatar_id: file,
            name: name,
            email: email,
            oldPassword: passwordOld,
            password: password,
            confirmPassword: passwordConfirm
        };
        dispatch(updateProfileRequest(data));
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    const handleChange = async (e) => {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Paper className={classes.paper} align={'center'}>
            <FormControl className={classes.form}>
                <Container>
                    <label htmlFor="avatar">
                        <img
                            src={
                                preview ||
                                `https://api.adorable.io/avatars/150/${profile.email}.png`
                            }
                            alt=""
                        />
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            data-file={file}
                            onChange={handleChange}
                        />
                    </label>
                </Container>
                <TextField
                    name="name"
                    placeholder="Nome completo"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <br/><br/>
                <TextField
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    disabled={true}
                />
                <br/><br/>
                <TextField
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                    value={passwordOld}
                    onChange={e=>setPasswordOld(e.target.value)}
                />
                <br/><br/>
                <TextField
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <br/><br/>
                <TextField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                    value={passwordConfirm}
                    onChange={e=>setPasswordConfirm(e.target.value)}
                />
                <br/><br/>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Atualizar perfil
                </Button>
            </FormControl>
        </Paper>
    );
};
