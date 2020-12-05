export default {
  pages: ['pages/index/index', 'pages/account/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '激励列表'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的'
      }
    ],
    color: '#8a8a8a',
    selectedColor: '#2d8cf0',
    backgroundColor: '#ffffff',
    borderStyle: 'white'
  }
};
