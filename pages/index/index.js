
// const util = require('../../utils/util.js');
// const api = require('../../config/api.js');
// const user = require('../../services/user.js');



//获取应用实例
const app = getApp();
Page({
  data: {
    goodsCount: 0,
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: []
  },

  onShareAppMessage: function () {
    return {
      title: '天边无印',
      desc: '天边无印户外商城',
      path: '/pages/index/index'
    }
  },



  getIndexData: function () {
    wx.cloud.callFunction({
      name:"getBanners"
    }).
    then(res=>{
      this.setData({
        banner:res.result.data
      })
    });
    wx.cloud.callFunction({
      name:"getChannels"
    }).
    then(res=>{
      this.setData({
        channel:res.result.data
      })
    });
    wx.cloud.callFunction({
      name:"getBrand"
    }).
    then(res=>{
      this.setData({
        brands:res.result.data
      });
    });
    wx.cloud.callFunction({
      name:"getNewgood"
    }).
    then(res=>{
      this.setData({
        newGoods:res.result.data
      });
    });
    // wx.cloud.callFunction({
    //   name:""
    // })
    // let that = this;
    // util.request(api.IndexUrl).then( res =>{
    //   if (res.errno === 0) {
    //     that.setData({
    //       newGoods: res.data.newGoodsList,
    //       hotGoods: res.data.hotGoodsList,
    //       topics: res.data.topicList,
    //       brand: res.data.brandList,
    //       floorGoods: res.data.categoryList,
    //       banner: res.data.banner,
    //       channel: res.data.channel
    //     });
    //   }
    // });
  },
  onLoad: function (options) {
     this.getIndexData();
    // util.request(api.GoodsCount).then(res => {
    //   this.setData({
    //     goodsCount: res.data.goodsCount
    //   });
    // });

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
