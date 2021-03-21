Page({
  data: {
    value: '',
    result: [
      { no: 'WX000000001', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' },
      { no: 'WX000000002', org: '企业+下级', group: '所属分组：', carType: '小轿车', cardNo: '皖A12345', totalDriverTime: '总行驶时长', intervalDriverTime: '区间行驶时', todayDriverTime: '今日行驶时长' }
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