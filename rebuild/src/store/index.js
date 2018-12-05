import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable */
const state = {
    token: 'empty',
    url: 'https://sdk.medavie.bluecross.ca/rainforest/',
}

const actions = {
    updateToken(context, tokenString){
        console.log('Token in store actions is currently: '+ tokenString );
        context.commit('userToken', tokenString);
    }
}

const mutations ={
    userToken(state, tokenString){
        console.log('Token in store mutations is currently: '+ tokenString );
        state.token = tokenString;
    }
}

const getters = {
    token(state){
        console.log('Token in store getters is currently: '+ state.token );
        return state.token;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});



// const state = {
//     selectedExercise: undefined
//   }
// const actions = {
//     selectActiveExercise(context, exercise){
//         console.log('selecting exercise action, ' + exercise.name)
//         context.commit('selectExercise', exercise);
//     }
// }
// const mutations = {
//     selectExercise(state, exercise){
//         console.log('selecting exercise mutation, ' + exercise.name)
//         state.selectedExercise = exercise
//     }
// }
// const getters = {
//     selectedExercise(state){
//       console.log('getting selected exercise')
//       return state.selectedExercise
//     }
// }