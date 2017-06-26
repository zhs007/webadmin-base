import { login } from '../services/account'
import { routerRedux } from 'dva/router'
import { queryURL } from '../utils'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      // console.log(JSON.stringify(payload));
      yield put({ type: 'showLoginLoading' })
      const ret = yield call(login, payload)
      // console.log(JSON.stringify(ret));
      yield put({ type: 'hideLoginLoading' })
      if (ret.success && ret.data.isok) {
        // saveToken(ret.data.myuserinfo.token)

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
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
