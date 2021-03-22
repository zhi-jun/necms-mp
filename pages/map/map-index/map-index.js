// pages/map/map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 31.806758834482746,
    longitude: 117.19289068329981,
    isDisabled: false,
    markers: [],
    polyline: [],
    mapInfo:{
      cardNo:'LZWADDDSS1235555543',
      type:'2014款 1.5LS豪华型',
      lat:31.806758834482746,
      lng:117.19289068329981,
      status:'ACC关闭,GPS已经定位',
      lastTime:'2021-3-22 20:41:43',
      address:'安徽省合肥市高新区望江路1号'
    }
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
        callout: {
          content: this.data.mapInfo.address,
          padding: 10,
          borderRadius: 2,
          display: 'ALWAYS',
          bgColor:'#1989fa',
          color:'#fff'
        },
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
  refresh(){
    console.log('刷新数据')
  }
})