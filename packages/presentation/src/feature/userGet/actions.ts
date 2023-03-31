

  export enum REQUEST_GET_DATA {
    MAKE_REQUEST = 'MAKE_REQUEST',
    REQUEST_GET_DATA_SUCCESS = 'REQUEST_GET_DATA_SUCCESS',
    REQUEST_GET_DATA_FAILURE = 'REQUEST_GET_DATA_FAILURE'
  }
  
  export const userGetDataRequest = params => ({
    type: REQUEST_GET_DATA.MAKE_REQUEST,
    params
  })