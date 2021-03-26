const { request } = require('../../../utils/ajax')
const { formatDate } = require('../../../utils/util')

Page({
  data: {
    type: wx.getStorageSync("dataCenterType"),
    showCalendar: false,
    minDate: new Date(2021, 0, 1).getTime(),
    maxDate: new Date().getTime(),
    dateRange: [new Date(new Date() - 7 * 24 * 3600 * 1000).getTime(), new Date().getTime()],
    value: '',
    pageNum: 1,
    pageSize: 6,
    size: 0,
    result: [],
    isLoading: false
  },
  onLoad() {
    this.onSearch()
  },
  onChange(e) {
    this.setData({ value: e.detail, pageNum: 1 });
  },
  onCalendarShow() {
    this.setData({ showCalendar: true });
  },
  onConfirm(e) {
    this.setData({
      dateRange: e.detail.map(date => new Date(date.valueOf()).getTime()),
      showCalendar: false
    });
  },
  onClosed() {
    this.setData({ showCalendar: false });
  },
  onSearch() {
    this.setData({ isLoading: true });
    if (this.data.pageNum == 1)
      this.data.result = []
    request({
      url: '/applets/report_day_run_duration/findReportDayMileagesByPage',
      data: {
        vehNo: this.data.value,
        currenPage: this.data.pageNum,
        pageSize: this.data.pageSize,
        startTime: formatDate(this.data.dateRange[0]),
        endTime: formatDate(this.data.dateRange[1])
      },
      method: 'get'
    },
      res => {
        this.setData({ isLoading: false });
        if (res.code != "00000000") {
          this.setData({ error: res.message })
          return
        }
        this.setData({
          result: this.data.result.concat(res.data.data),
          size: res.data.recordsFiltered
        });
      })
  },
  onReachBottom() {
    if (this.data.pageNum * this.data.pageSize < this.data.size) {
      this.setData({ pageNum: this.data.pageNum + 1 });
      this.onSearch()
    }
  }
})