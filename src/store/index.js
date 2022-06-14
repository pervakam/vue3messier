import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        messierAPI: [],
        defaultCount: 110,
        objectsToLearn: [],
        loading: false,
    },
    getters: {
        MESSIER_API(state) {
            return state.messierAPI;
        },
        objectsSum(state) {
            return state.messierAPI.length;
        },
        objectsToLearnLength(state) {
            return state.objectsToLearn.length;
        },
        objectsCount(state) {
            return state.defaultCount;
        },
        object(state) {
            return (id) => state.messierAPI.find((object) => object.recordid === id);
        },
    },
    mutations: {
        setLoader(state, value) {
            state.loading = value;
        },
        setObjectsToLearn(state, object) {
            state.objectsToLearn.push(object);
        },
        removeObjectToLearn(state, index) {
            state.objectsToLearn.splice(index, 1);
        },
        SET_API_TO_STATE: (state, messierAPI) => {
            state.messierAPI = messierAPI;
        },
    },
    actions: {
        async GET_DATA_FROM_API({commit}) {
            try {
                commit('setLoader', true);
                const result = await axios(`https://www.datastro.eu/api/records/1.0/search/?dataset=catalogue-de-messier&q=&rows=${this.getters.objectsCount}&sort=messier&facet=objet&facet=saison&facet=mag&facet=english_name_nom_en_anglais&facet=french_name_nom_francais&facet=latin_name_nom_latin&facet=decouvreur&facet=annee`, {
                    method: 'GET',
                });
                commit('SET_API_TO_STATE', result.data.records);
            } catch (error) {
                console.error(error);
            } finally {
                commit('setLoader', false);
            }
        },
    },
    modules: {}
})
