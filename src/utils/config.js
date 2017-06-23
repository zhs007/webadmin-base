module.exports = {
  name: 'Holdem.Tech',
  prefix: 'holdemTech',
  footerText: 'HoldemTech © 2017',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  apiBaseURL: 'http://localhost:7001/api/v1',
  baseURL: 'http://localhost:8000/api/v1',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7001'],
  openPages: ['/login', '/reg'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: '/account/login',
    userReg: '/account/reg',
    userLogout: '/account/logout',
    userQuery: '/account/querywithtoken',
    mailGet: '/mail/get',
    
    userInfo: '/userInfo',
    users: '/users',
    posts: '/posts',
    user: '/user/:id',
    dashboard: '/dashboard',
  },

  lang: 'chs',
};