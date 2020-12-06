export default {
  pages: ['pages/index/index', 'pages/account/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#D1AF7C',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '激励列表',
        iconPath: './static/images/index.png',
        selectedIconPath: './static/images/index_active.png'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的',
        iconPath: './static/images/account.png',
        selectedIconPath: './static/images/account_active.png'
      }
    ],
    color: '#8a8a8a',
    selectedColor: '#D1AF7C',
    backgroundColor: '#ffffff',
    borderStyle: 'white'
  }
};
