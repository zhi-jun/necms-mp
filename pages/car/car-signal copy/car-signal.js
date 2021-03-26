Page({
  data: {
    value: '',
    result: [
      { state: 1, no: 'WX000000001', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 0, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 1, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 0, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 1, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 1, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' },
      { state: 1, no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', driverTime: '驶时长', msgContent: '消息内容' }
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
    if (!this.data.value)
      return
    console.log('搜索' + this.data.value);
  }
})