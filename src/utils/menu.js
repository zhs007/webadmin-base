const DEF_MENU_NORMAL = [
  {
    id: 1,
    icon: 'laptop',
    name: 'Dashboard',
    router: '/dashboard',
  },
  {
    id: 2,
    bpid: 1,
    name: 'Users',
    icon: 'user',
    router: '/user',
  },
  {
    id: 21,
    mpid: -1,
    bpid: 2,
    name: 'User Detail',
    router: '/user/:id',
  },  
  {
    id: 7,
    bpid: 1,
    name: 'Posts',
    icon: 'shopping-cart',
    router: '/post',
  },
  {
    id: 3,
    bpid: 1,
    name: 'Request',
    icon: 'api',
    router: '/request',
  },
  {
    id: 4,
    bpid: 1,
    name: 'UI Element',
    icon: 'camera-o',
  },
  {
    id: 41,
    bpid: 4,
    mpid: 4,
    name: 'IconFont',
    icon: 'heart-o',
    router: '/UIElement/iconfont',
  },
  {
    id: 42,
    bpid: 4,
    mpid: 4,
    name: 'DataTable',
    icon: 'database',
    router: '/UIElement/dataTable',
  },
  {
    id: 43,
    bpid: 4,
    mpid: 4,
    name: 'DropOption',
    icon: 'bars',
    router: '/UIElement/dropOption',
  },
  {
    id: 44,
    bpid: 4,
    mpid: 4,
    name: 'Search',
    icon: 'search',
    router: '/UIElement/search',
  },
  {
    id: 45,
    bpid: 4,
    mpid: 4,
    name: 'Editor',
    icon: 'edit',
    router: '/UIElement/editor',
  },
  {
    id: 46,
    bpid: 4,
    mpid: 4,
    name: 'layer (Function)',
    icon: 'credit-card',
    router: '/UIElement/layer',
  },
  {
    id: 5,
    bpid: 1,
    name: 'Recharts',
    icon: 'code-o',
  },
  {
    id: 51,
    bpid: 5,
    mpid: 5,
    name: 'LineChart',
    icon: 'line-chart',
    router: '/chart/lineChart',
  },
  {
    id: 52,
    bpid: 5,
    mpid: 5,
    name: 'BarChart',
    icon: 'bar-chart',
    router: '/chart/barChart',
  },
  {
    id: 53,
    bpid: 5,
    mpid: 5,
    name: 'AreaChart',
    icon: 'area-chart',
    router: '/chart/areaChart',
  },
  {
    id: 6,
    bpid: 1,
    name: 'Test Navigation',
    icon: 'setting',
  },
  {
    id: 61,
    bpid: 6,
    mpid: 6,
    name: 'Test Navigation1',
    router: '/navigation/navigation1',
  },
  {
    id: 62,
    bpid: 6,
    mpid: 6,
    name: 'Test Navigation2',
    router: '/navigation/navigation2',
  },
  {
    id: 621,
    bpid: 62,
    mpid: 62,
    name: 'Test Navigation21',
    router: '/navigation/navigation2/navigation1',
  },
  {
    id: 622,
    bpid: 62,
    mpid: 62,
    name: 'Test Navigation22',
    router: '/navigation/navigation2/navigation2',
  },

  {
    id: 8,
    bpid: 1,
    name: 'Range',
    icon: 'database',
    router: '/range',
  },  
  {
    id: 10,
    bpid: 1,
    name: 'Mails',
    icon: 'mail',
    router: '/mail',
  },
];

const DEF_MENU_ADMIN = [
  {
    id: 9,
    bpid: 1,
    name: 'UserMgr',
    icon: 'user',
    router: '/usermgr',
  },
  {
    id: 91,
    mpid: -1,
    bpid: 9,
    name: 'UserMgr Detail',
    router: '/usermgr/:id',
  },
  {
    id: 11,
    bpid: 1,
    name: 'SendMails',
    icon: 'bars',
    router: '/sendmail',
  },    
];

function getMyMenu(permissions) {
  if (permissions.indexOf('root') >= 0) {
    let arr = [];
    for (let i = 0; i < DEF_MENU_NORMAL.length; ++i) {
      arr.push(DEF_MENU_NORMAL[i]);
    }

    for (let i = 0; i < DEF_MENU_ADMIN.length; ++i) {
      arr.push(DEF_MENU_ADMIN[i]);
    }

    arr.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      }

      return 1;
    });

    return arr;
  }

  return DEF_MENU_NORMAL;
}

module.exports = {
  getMyMenu: getMyMenu
}
