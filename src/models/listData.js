import * as listService from '../services/listService'

export default {

    namespace: 'listData',

    state: {
        list: []
    },

    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'fetch'})
        },
    },

    effects: {
        * fetch({payload}, {call, put}) {  // eslint-disable-line
            const data = yield call(listService.fetchList);
          console.log(data);
          yield put({type: 'save', payload: data});
        },
        * fetchRemoveItem({payload}, {call, put}) {
            const result = yield call(listService.removeListItem, payload);
            if (result) {
                yield put({type: 'removeItem', payload})
            }
        }
    },

    reducers: {
        save(state, {payload: {data}}) {
            state.list = data.subjects;
            return {...state}
        },

        removeItem(state, {payload: data}) {
            state.list = state.list.filter((item)=>item.id !== data);
            return {...state}
        }
    },

};
