import { createReducer } from './utils/createReducer'

export const DATA = 'hope/modal/DATA'
export const PARAMS = 'hope/modal/PARAMS'

const initialStates = {
  data: {
    name: '',
    open: false,
  },
  params: {},
}

export default createReducer(initialStates, {
  [DATA]: (state, data) => ({
    ...state,
    data,
  }),
  [PARAMS]: (state, params) => ({
    ...state,
    params,
  }),
})

export const setOpen = data => ({
  type: [DATA],
  payload: data,
})

export const setParams = data => ({
  type: [PARAMS],
  payload: data,
})
