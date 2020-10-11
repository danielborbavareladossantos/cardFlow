import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import io from "socket.io-client";
import { Form, Input } from '@rocketseat/unform';

import Typography from '@material-ui/core/Typography';

import Messages from './Messages';

import { store } from '~/store';

import { useStyles } from './styles';

const SOCKET_IO_URL = "http://localhost:3331";
const socket = io(SOCKET_IO_URL);

export default () => {

    const [arrayMessages, setArrayMessages] = useState([]);
    const [tfMessage, setTfMessage] = useState('');
    const { profile } = store.getState().user;

    const classes = useStyles();

    const handleSubmit = ({tf_message}) => {
        if (tf_message.length) {
            const messageObject = {
                author: profile.name,
                message: tf_message
            };
            socket.emit('sendMessage', messageObject);
            setArrayMessages(arrayMessages);
            setTfMessage('');
        }
    };

    const getMessages = () => {
        socket.on("previousMessages", data => {
            setArrayMessages(data);
        });
        socket.emit('loadMessage');
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <Container>
                {arrayMessages && arrayMessages.length>0 &&
                        <Messages arrayMessages={arrayMessages}/>
                    }
                {arrayMessages && arrayMessages.length===0 &&
                    <Typography variant="body1" gutterBottom>
                        Não há nenhuma mensagem!
                    </Typography>
                }

                <Form onSubmit={handleSubmit}>

                    <Input
                        name="tf_message"
                        placeholder="Deixei sua mensagem"
                        aria-describedby="tf_message"
                        value={tfMessage}
                        onChange={(e)=>{setTfMessage(e.target.value)}}
                        className={classes.input}
                    />

                </Form>
        </Container>
    );
}
