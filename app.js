App({
  onLaunch: function () {
if(!wx.cloud){
  console.error("error")
}else{
  wx.cloud.init({
    traceUser:true,
  })
}
    try {
      this.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo'));
      this.globalData.token = wx.getStorageSync('token');

    } catch (e) {
      console.log(e);
    }
  },

  globalData: {
    userInfo: {
      nickname: '点击登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})