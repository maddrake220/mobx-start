import { action, makeObservable, observable } from "mobx";

export default class UserStore {
  @observable
  state = {
    users: [],
    loading: false,
    error: null,
  };

  constructor() {
    makeObservable(this);
  }

  @action
  pending() {
    this.state.loading = true;
    this.state.error = null;
  }

  @action
  success(users) {
    this.state.users = users;
    this.state.loading = false;
    this.state.error = null;
  }

  @action
  fail(error) {
    this.state.loading = false;
    this.state.error = error;
  }
}
