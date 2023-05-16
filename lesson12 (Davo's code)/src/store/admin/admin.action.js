
export const CHANGE_LIST = 'CHANGE_LIST'

export const changeAdminList = ( list ) => {
  return {
    type: CHANGE_LIST,
    payload: list
  }
}
