import { API } from "../../API";

const trainings = {
    state: {
        training:{
            User_ID: "",
            TISI: false,
            I_Factory: false,
            E_Payment: false
        },
        usersTraining:[],
    },
    getters: {
        getTraining(state){
            return state.training
        },
        getUsersTraining(state){
            return state.usersTraining
        },
    },
    mutations: {
        SET_USERS_TRAINING(state, data){
            state.usersTraining = data
        },
        SET_USER_HID(state, data){
            state.training.User_ID = data
        },
    },
    actions: {
        async setTraining({commit}){
            commit('SET_USER_HID', this.getters.getUserID)
            let r = await API.post(`/training`,this.getters.getTraining)
            console.log('training', r.data),
            this.getters.getTraining.TISI = false,
            this.getters.getTraining.I_Factory = false,
            this.getters.getTraining.E_Payment = false
            return r.data
        },
        async setUsersTraining({ commit }){
            let r = await API.get(`/users-training`)
            console.log('SET_USERS_TRAINING', r.data)
            commit('SET_USERS_TRAINING', r.data)
            return r.data
        }
    }
}
export default trainings;