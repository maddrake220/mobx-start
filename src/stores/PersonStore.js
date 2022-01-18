import { action, computed, makeObservable, observable } from "mobx";

export default class PersonStore {
  @observable
  name = "Jake";

  @observable
  age = 79;

  // computed의 실제 결과물이 바뀌었을 때만 재랜더링 된다.
  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }
  constructor(rootStore) {
    makeObservable(this);

    this.rootStore = rootStore;
  }
  @action
  plus() {
    this.age++;
    this.rootStore.todoStore.todos = [];
  }

  @action
  testAction() {
    this.age = 44;
    this.name = "changedName";
  }
}
