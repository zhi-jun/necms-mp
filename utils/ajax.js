//接口地址host
const baseUrl = "http://60.168.131.134:9001"

var isLoading = false //防止重复提交

function loading(isShow) {
  isLoading = isShow
  if (isShow)
    wx.showLoading({ title: '加载中' })
  else
    wx.hideLoading()
}

// 封装request请求
const request = (options, cb) => {
  if (isLoading)
    return

  let isShowLoading = options.method.toLowerCase() == 'post'
  loading(isShowLoading)

  //url
  if (options.url.indexOf('http') != 0) {
    options.url = baseUrl + options.url;
  }

  //执行微信的请求
  wx.request(
    {
      ...options,
      header: {
        'tokenId': wx.getStorageSync('tokenId')
      },
      success(res) {
        loading(false)
        if (res.statusCode === 401) {
          wx.redirectTo({ url: '/pages/login/login' });
          return
        }
        if (cb)
          cb(res.data)
      },
      fail(res) {
        loading(false)
        wx.showToast({ icon: 'error', title: '请求失败' })
        if (cb)
          cb(res)
      }
    }
  );
}

module.exports = {
  request
}