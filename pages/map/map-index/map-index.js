// pages/map/map.js
// 引用百度地图微信小程序JSAPI模块 
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height: wx.getSystemInfoSync().windowHeight-20,
    latitude: 31.806758834482746,
    longitude: 117.19289068329981,
    isDisabled: false,
    markers: [],
    polyline: [],
    pointsInfo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      markers: [{
        id: 1,
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        width: 25,
        height: 30,
      }],
      latitude: this.data.latitude,
      longitude: this.data.longitude,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})