const { request } = require('../../../utils/ajax')

Page({
  data: {
    value: '',
    pageNum: 0,
    pageSize: 10,
    size: 13,
    result: [
      {
        "createTime": "2021-03-23 15:37:33.000",
        "creator": "leaduadmin",
        "updateTime": "2021-03-23 15:37:33.000",
        "updater": "leaduadmin",
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "a0d9b83d8baa11eb977e08002792b05d",
        "companyCode": "ZCKJ",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "1",
        "useTypeName": "出租车辆",
        "vin": "VG3323FSSS0001", // 车架号
        "licenseNo": "皖A18888", // 车牌号
        "vehicleType": "1",
        "vehicleTypeName": "工程车",
        "name": "王",
        "mobileNo": "",
        "spName": "",
        "vehicleInfoIds": null,
        "companyName": "智车科技", // 企业
        "groupCodes": null,
        "groupCode": "ZCKJ",
        "groupCodeName": "智车科技" // 下级机构
      },
      {
        "createTime": "2021-03-23 11:00:24.000",
        "creator": "leaduadmin",
        "updateTime": "2021-03-23 11:00:24.000",
        "updater": "leaduadmin",
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "e93ed6a38b8311eb977e08002792b05d",
        "companyCode": "BLD",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "1",
        "useTypeName": "出租车辆",
        "vin": "2321312321321321",
        "licenseNo": "321321312",
        "vehicleType": "2",
        "vehicleTypeName": "工程车",
        "name": "321321",
        "mobileNo": "13233332222",
        "spName": "321321",
        "vehicleInfoIds": null,
        "companyName": "博雷顿新能源汽车",
        "groupCodes": null,
        "groupCode": "group02",
        "groupCodeName": "工程小组02"
      },
      {
        "createTime": "2021-03-23 09:47:25.000",
        "creator": "leaduadmin",
        "updateTime": "2021-03-23 09:47:25.000",
        "updater": "leaduadmin",
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "b7ef4d048b7911eb977e08002792b05d",
        "companyCode": "leadu",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "1",
        "useTypeName": "出租车辆",
        "vin": "LBV7845T78S231",
        "licenseNo": "皖A34U98",
        "vehicleType": "1",
        "vehicleTypeName": "工程车",
        "name": "李小明",
        "mobileNo": "13456789876",
        "spName": "",
        "vehicleInfoIds": null,
        "companyName": "领友数据",
        "groupCodes": null,
        "groupCode": "leadu",
        "groupCodeName": "领友数据"
      },
      {
        "createTime": "2021-03-11 09:41:57.000",
        "creator": "leaduadmin",
        "updateTime": "2021-03-20 15:41:18.000",
        "updater": "byyzb",
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "f6601211820a11eb906831243124b05d",
        "companyCode": "BLD",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "1",
        "useTypeName": "出租车辆",
        "vin": "00102222",
        "licenseNo": "晥A80890",
        "vehicleType": "1",
        "vehicleTypeName": "工程车",
        "name": "nyy",
        "mobileNo": "15676583475",
        "spName": "合肥的经销商",
        "vehicleInfoIds": null,
        "companyName": "博雷顿新能源汽车",
        "groupCodes": null,
        "groupCode": "BLD",
        "groupCodeName": "博雷顿新能源汽车"
      },
      {
        "createTime": "2021-03-20 14:47:26.000",
        "creator": "byycsqy",
        "updateTime": "2021-03-20 14:47:26.000",
        "updater": "byycsqy",
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "21880c8c894811eb977e08002792b05d",
        "companyCode": "byycompay",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "0",
        "useTypeName": "出租车辆",
        "vin": "1111111",
        "licenseNo": "11111",
        "vehicleType": "1",
        "vehicleTypeName": "工程车",
        "name": "",
        "mobileNo": "",
        "spName": "",
        "vehicleInfoIds": null,
        "companyName": "鲍莹莹的企业",
        "groupCodes": null,
        "groupCode": "byygroup001",
        "groupCodeName": "测试部门001"
      },
      {
        "createTime": "2021-03-13 20:13:36.000",
        "creator": null,
        "updateTime": "2021-03-14 20:12:40.000",
        "updater": null,
        "currenPage": 1,
        "pageSize": 10,
        "start": 0,
        "length": null,
        "draw": null,
        "pageFlag": null,
        "excelDataMax": null,
        "totalFlag": null,
        "vehicleInfoId": "493264981",
        "companyCode": "BLD",
        "belongGroup": "0",
        "belongGroupName": "常规车",
        "useType": "1",
        "useTypeName": "出租车辆",
        "vin": "LSGJB84J5FY111112",
        "licenseNo": "皖A90909",
        "vehicleType": "1",
        "vehicleTypeName": "工程车",
        "name": "小于",
        "mobileNo": "18788887777",
        "spName": "大海经销商",
        "vehicleInfoIds": null,
        "companyName": "博雷顿新能源汽车",
        "groupCodes": null,
        "groupCode": "BLD",
        "groupCodeName": "博雷顿新能源汽车"
      }
    ]

  },

  onConfirm() {
    this.selectComponent('#item').toggle();
  },

  onSwitch1Change({ detail }) {
    this.setData({ switch1: detail });
  },

  onSwitch2Change({ detail }) {
    this.setData({ switch2: detail });
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    request({
      url: '/applets/vehicle_info/findVehicleInfosByPage',
      data: { vin: this.data.value, currenPage: this.data.pageNum, pageSize: this.data.pageSize },
      method: 'POST'
    },
      res => {
        console.log(res, '成功')
      })
  },
  onNavigateAdd() {
    wx.navigateTo({ url: '/pages/car/car-add/car-add' });
  },
  onNavigateDetail() {
    wx.navigateTo({ url: '/pages/car/car-detail/car-detail' });
  },
  onNavigateRepair() {
    wx.navigateTo({ url: '/pages/car/car-repair/car-repair' });
  },
  onNavigateDevice() {
    wx.navigateTo({ url: '/pages/car/car-device/car-device' });
  },
  onNavigateMap() {
    wx.navigateTo({ url: '/pages/map/map-track/map-track' });
  },
  onNavigateSignal() {
    wx.navigateTo({ url: '/pages/car/car-signal/car-signal' });
  },
  noop() { },
  onReachBottom() {
    this.setData({
      pageNum: this.data.pageNum + 1,
    });
  }
})