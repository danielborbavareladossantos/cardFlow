import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Error from '~/components/Error';
// import * as serviceWorker from './serviceWorker';
import ls from 'local-storage';
import api from '~/services/api';

const permissao = () => {
    return new Promise(async (resolve,reject)=>{
        const obj = ls.get('persist:frontend');
        if (obj && obj.user && obj.auth) {
            const user = JSON.parse(obj.user);
            const auth = JSON.parse(obj.auth);

            if (user.profile && user.profile.dslogin && auth.token) {
                try{
                    const response = await api.get(
                        `/permissoes?parametroUser=${user.profile.dslogin}`,
                        {headers: {'Authorization': auth.token}});
                    if (response.status === 200) {
                        const data = response.data.data;
                        const pRevisaoAcesso = data.filter(element => element.nm_prog === "DAC104PM");
                        const pConfiguracoes = data.filter(element => element.nm_prog === "DAC100PP");

                        //define permissoesFuncionalidades
                        window.permissoes = {
                            revisaoAcesso: pRevisaoAcesso.length>0,
                            configuracoes: pConfiguracoes.length>0
                        };
                    }
                } catch (e){
                    window.permissoes = null;
                }
            }
        }
        resolve();
    });
};

var run = async () => {
    try {
        await permissao();
        ReactDOM.render(<App />, document.getElementById('root'));
    } catch (error) {
        ReactDOM.render(<Error message={error.message}/>, document.getElementById('root'));
    }

};

run();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
