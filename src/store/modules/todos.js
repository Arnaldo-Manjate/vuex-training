// boilerplate for a todos module

const state = {
    todos : [
        { name : "Todo 1", id: 1},
        { name : "Todo 2", id: 2},
    ]
}


const getters = {
    allTodos : () => [...state.todos]
}

const mutations = {

}

const actions = {

}


export default {state , getters , actions , mutations}