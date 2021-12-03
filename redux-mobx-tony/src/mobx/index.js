import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export class Timer {
  second = 0;

  constructor() {
    // makeAutoObservable(this)
    makeObservable(this, {
      second: observable,
      increase: action,
      reset: action
    });
  }

  increase() {
    this.second += 1;
  }

  reset() {
    this.second = 0;
  }
}

const timer = new Timer();

export default timer;
