import PersonStore from "./PersonStore";
import TodoStore from "./TodoStore";
import UserStore from "./UserStore";

export default class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.personStore = new PersonStore(this);
    this.userStore = new UserStore(this);
  }
}

export const personStore = "personStore";
export const todoStore = "todoStore";
export const userStore = "userStore";
