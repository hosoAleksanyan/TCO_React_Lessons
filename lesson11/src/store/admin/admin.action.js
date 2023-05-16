import {CHANGE_LIST} from "./admin.types";


export const changeAdminList = ( list ) => {
  return {
    type: CHANGE_LIST,
    payload: list
  }
}