// pages/addFunction/addFunction.js

const code = `// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

Page({

  data: {
    userInfo: {},
    result: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
  },

  onLoad: function(options) {
    console.log("=========onLoad function===========")

    wx.getUserInfo({
      success: res => {
        let userInfo = res.userInfo
        console.log("===============》获取到userInfo：《===============")
        console.log(userInfo)
        this.setData({
          userInfo: userInfo
        })
      }
    })
  },

  copyCode: function() {
    wx.setClipboardData({
      data: code,
      success: function() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  testFunction() {
    console.log("=========onLoad之后，缓存下来的data属性中的用户信息：=============")
    console.log(this.data.userInfo)
    let data = {
      a: 1,
      b: 2,
      userInfo: this.data.userInfo
    }

    wx.cloud.callFunction({
      name: 'sum',
      data: data,
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        let result = res.result
        this.setData({
          sum: result.sum,
          openid: result.openid,
          appid: result.appid
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [sum] 调用失败：', err)
      }
    })
  },

})