Page({
  data: {
    inputShowed: false,
    inputVal: "",
    carList: [1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.searchData()
        resolve()
      }, 200)
    })
  },
  selectResult: function (e) {
    wx.showToast({ title: this.detail })
  },
  searchData() {
    this.carList = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  }
});