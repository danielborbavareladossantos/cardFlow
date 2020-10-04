import api from '~/services/api';
import { store } from '~/store';

export async function getAllData(parametroSeqRevis){
    const { profile } = store.getState().user;
    return await api.get(
        `/revisaoacessos?`+
        `parametroSeqRevis=${parametroSeqRevis}&`+
        `parametroUser=${profile.dslogin}`,
        {}
    );
}

export async function getFiltroData(){
    const { profile } = store.getState().user;
    return await api.get(
        `/revisaoacessos/filtro?`+
        `parametroUser=${profile.dslogin}`,
        {}
    );
}

export async function put(aprovados,removidos){
    const { profile } = store.getState().user;
    const data = {
        listaRevisaoAcessoAprovados: (aprovados),
        listaRevisaoAcessoRemovidos: (removidos)
    };
    return await api.put(
        `/revisaoacessos?`+
        `parametroUser=${profile.dslogin}`
    , data);
}
