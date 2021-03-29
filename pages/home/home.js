Page({
  data: {
    imgUrls: [
      '/images/banner/1.jpg',
      '/images/banner/2.jpg',
      '/images/banner/3.jpg'
    ],
    navActive: 0,
  },
  onLoad() {
    if (!wx.getStorageSync("tokenId"))
      wx.redirectTo({ url: '/pages/login/login' });
  },

  onClick(e) {
    wx.showToast({ title: '暂未开放' })
  }
})
