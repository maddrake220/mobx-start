import PersonStore from "./PersonStore";
import TodoStore from "./TodoStore";

export default class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
  }
}

export const personStore = "personStore";
export const todoStore = "todoStore";
