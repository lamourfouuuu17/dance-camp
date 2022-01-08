import { makeAutoObservable } from "mobx";

export default class MasterclassStore {
  constructor() {
    this._masterclasses = [
      {
        id: 1,
        teacherName: "Anna@",
        teacherSurname: "Samsonenko#",
        style: "vogue%",
        styleDesc: "wjenwvn*",
        date: "12:12:2022$",
      },
    ];
    makeAutoObservable(this);
  }

  //actions

  setMaster(masterclasses) {
    this._masterclasses = masterclasses;
  }

  get masterclassGet() {
    return this._masterclasses;
  }
}
