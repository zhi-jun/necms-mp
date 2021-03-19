Page({
  data: {
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    navActive: 0,
  },
  onNavChange(e) {
    this.setData({ navActive: e.detail });
    wx.navigateTo({ url: '/pages/info/info' });
  },
  onViewChange(e) {
    wx.navigateTo({ url: '/pages/info/info' });
  }
})
