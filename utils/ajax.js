const baseUrl = "http://60.168.131.134:9001"

// 封装request请求
const request = (options, cb, that) => {
  //url
  if (options.url.indexOf('http') != 0) {
    options.url = baseUrl + options.url;
  }

  //执行微信的请求
  wx.request(
    {
      ...options,
      header: {
        'tokenId': wx.getStorageSync('token')
      },
      success(res) {
        if (res.statusCode === 401) {
          wx.redirectTo({ url: '/pages/login/login' });
          return
        }
        if (cb)
          cb(res.data)
      },
      fail(res) {
        wx.showToast({ icon: 'error', title: '请求失败' })
      }
    }
  );
}

module.exports = {
  request
}