import { action, makeObservable, observable } from "mobx";

class TodoStore {
  @observable
  todos = [];

  @action
  add(text) {
    this.todos.push({ text, done: false });
  }

  constructor() {
    makeObservable(this);
  }
}

export default TodoStore;
