// boilerplate for a todos module

import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => JSON.parse(JSON.stringify(state.todos)),
};

const mutations = {
  setTodos: (state, todos) => (state.todos = JSON.parse(JSON.stringify(todos))),

  newTodo: (state, todo) => {
    const todosCopy = JSON.parse(JSON.stringify(state.todos));
    todosCopy.unshift(todo);
    state.todos = todosCopy;
  },

  removeTodo: (state , id) => {
    state.todos = state.todos.filter( todo => todo.id !== id)
  },
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // console.log("Got response , ", response.data);
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );

    console.log("posted ok", response);
    commit("newTodo", response.data);
  },
  async deleteTodo({commit}, id) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos");

    console.log("deleted ok", response.data);
    commit("removeTodo", id);
  },
  async filterTodos({commit}, event) {
    const limit = Number(event.target.value)
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
    console.log("filtered ok " , response.data.length)

    commit('setTodos', response.data)
  }
};

export default { state, getters, actions, mutations };
