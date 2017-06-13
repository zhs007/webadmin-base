import { reg } from '../services/reg'
import { routerRedux } from 'dva/router'
import { queryURL } from '../utils'

export default {
  namespace: 'reg',
  state: {
    regLoading: false,
  },

  effects: {
    *reg ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showRegLoading' })
      const data = yield call(reg, payload)
      yield put({ type: 'hideRegLoading' })
      if (data.success) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data
      }
    },
  },
  reducers: {
    showRegLoading (state) {
      return {
        ...state,
        regLoading: true,
      }
    },
    hideRegLoading (state) {
      return {
        ...state,
        regLoading: false,
      }
    },
  },
}
