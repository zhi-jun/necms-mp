Page({
  data: {
    imgUrls: [
      '/images/banner/1.jpg',
      '/images/banner/2.jpg',
      '/images/banner/3.jpg'
    ],
    navActive: 0,
  },
  onLoad: function () {
    let userInfo = wx.getStorageSync("userInfo")
    if (!userInfo)
      wx.redirectTo({ url: '/pages/login/login' });
  }
})
