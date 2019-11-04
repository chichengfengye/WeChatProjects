// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    console.log("前段控制台打印输出：")
    console.log("openid:" + getApp().globalData.openid)
    console.log(JSON.stringify(options))

    this.setData({
      openid: getApp().globalData.openid
    })
  }
})