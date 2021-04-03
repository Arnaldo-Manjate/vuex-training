import {createStore} from "vuex";
import todosModule from "./modules/todos";

// export the store
const store = createStore({
  // pass in all modules
  modules: {
    todosModule
  }
});

export default store
