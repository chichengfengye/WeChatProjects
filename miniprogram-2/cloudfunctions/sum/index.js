// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  let wxcontext = cloud.getWXContext()

  console.log("服务端日志：")
  // console.log("context")
  // console.log(context)
  // console.log("wxcontext：")
  // console.log(JSON.stringify(wxcontext))

  console.log("appid="+ wxcontext.APPID)
  console.log("opneid=" + wxcontext.OPENID)
  console.log("unionid=" + wxcontext.UNIONID)

  console.log("=============用户信息：===============")
  console.log(event.userInfo)

  return {
    sum: event.a + event.b,
    appid: wxcontext.APPID,
    openid: wxcontext.OPENID,
  }
}