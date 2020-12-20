export default {
  pages: ['pages/index/index', 'pages/account/index', 'pages/reminds/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#91d1ff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '重要的人',
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
