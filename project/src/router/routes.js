const _import = require(`./_import_${process.env.NODE_ENV}`)
const layout = _import('layout/index')

/**
 *
 * meta 标签字段
 * @param {*} requiredUserInfo: [boolean]  该页面是否需要用户信息，如果需要store里没有用户信息将会去拉取用户信息
 * @param {*} white: [boolean]             白名单页面，路由拦截器不拦截，直接放行
 * @param {*} cache: [boolean]             是否缓存 配合keep-alive
 */

export default [{
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/home',
    component: layout,
    children: [{ //首页
        path: 'index',
        name: 'home',
        component: _import('home/index'),
        meta: {
          title: '活动测试',
          cache: true
        }
      },
      { //活动测试
        path: 'test',
        name: 'test',
        component: _import('home/test'),
        meta: {
          title: '活动测试',
          cache: false
        }
      },

    ]
  },
  {
    component: _import('404/index'),
    name: '404',
    path: '/404',
    meta: {
      cache: true
    }
  },

  {
    path: '*',
    redirect: '/404'

  },
]
