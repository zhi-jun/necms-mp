// pages/map/map.js
import Dialog from '@vant/weapp/dialog/dialog'
const { convert2TecentMap, compareVersion, formatDate } = require('../../../utils/util')
const { request } = require('../../../utils/ajax')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCalendar: false,
    minDate: new Date(2021, 0, 1).getTime(),
    maxDate: new Date().getTime(),
    dateRange1: [formatDate(new Date(new Date() - 24 * 3600 * 1000)), formatDate(new Date())],
    latitude: 0,
    longitude: 0,
    timer: null,
    isDisabled: false,
    markers: [],
    polyline: [], 
    jdata: [],
    isCollospae: false,
    interval: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryTrack()
  },
  /**
  * 开始
  */
  startTrack: function () {
    const version = wx.getSystemInfoSync().SDKVersion;
    if (compareVersion(version, '2.13.0') < 0) {
      wx.showToast({
        title: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        icon: 'none'
      });
      return;
    }

    const mapCtx = wx.createMapContext('map', this);
    if (this.data.isDisabled) {
      return;
    }
    this.setData({
      isDisabled: true
    });
    this.timer = setTimeout(() => {
      this.setData({
        isDisabled: false
      });
    }, 32 * 1000 / this.data.interval);
    mapCtx.moveAlong({
      markerId: 0,
      path: this.data.polyline[0].points,
      duration: 32 * 1000 / this.data.interval,
      autoRotate: true
    });
  },
  endTrack: function () {
    const version = wx.getSystemInfoSync().SDKVersion;
    if (compareVersion(version, '2.13.0') < 0) {
      wx.showToast({
        title: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        icon: 'none'
      });
      return;
    }

    const mapCtx = wx.createMapContext('map', this);
    mapCtx.moveAlong({
      markerId: 0,
      path: this.data.polyline[0].points,
      duration:  1 ,
      autoRotate: true
    });
    this.setData({
      isDisabled: false
    });
  },
  changeInterval: function () {
    let currentInterval = this.data.interval * 2
    if (currentInterval > 8) { currentInterval = 1 }
    this.setData({
      interval: currentInterval
    })
  },
  onCalendarShow() {
    this.setData({ showCalendar: true });
  },
  onConfirm(e) {
    this.setData({
      dateRange1: e.detail.map(date => formatDate(new Date(date.valueOf()))),
      showCalendar: false
    });
    this.queryTrack()
  },
  onClosed() {
    this.setData({ showCalendar: false });
  },
  handleCollspa(event) {
    if(!this.data.jdata||this.data.jdata.length==0)
    {
      Dialog.alert({message: '未查到轨迹数据'})
      return
    }
    this.setData({
      isCollospae: !this.data.isCollospae,
    });
  },
  queryTrack() {
    request({
      url: '/applets/monitor/findPlayback',
      data: { veh: wx.getStorageSync('vin'),startTime:this.data.dateRange1[0],endTime:this.data.dateRange1[1] }, //
      method: 'get'
    },
      res => {
        if (res.code != "00000000") {
          this.setData({
            isDisabled: true
          })
          Dialog.alert({
            message: res.message,
            confirmButtonText: '返回'
          }).then(() => {
            setTimeout(function () { wx.navigateBack({ delta: 1 }); }, 200);
          });
          return
        }

        this.setData({
          jdata:res.data
        })
        this.bindTrack()
      })
    this.bindTrack()
  },
  bindTrack() {
    const tecentMap = this.data.jdata.map(p => {
      let tp = convert2TecentMap(p.lng, p.lat)
      return { ...p, lat: tp.lat, lng: tp.lng }
    })

    this.setData({
      polyline: [{
        points: tecentMap.map(p => { return { latitude: p.lat, longitude: p.lng } }),
        color: "#3875FF",
        width: 6,
        dottedLine: false
      }],
      markers: [{
        id: 0,
        latitude: tecentMap[0].lat,
        longitude: tecentMap[0].lng,
        width: 16,
        height: 20,
        iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
      }],
      latitude: tecentMap[0].lat,
      longitude: tecentMap[0].lng, 
    })
  }
})