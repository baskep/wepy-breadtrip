import wepy from 'wepy';

const wxRequest = async(params = {}, url) => {
  let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: params.data || {},
      header: {     
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  });
  return res;
};

// 格式化时间
function formatTime(date, type) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let time = '';
  switch (type) {
    case 1:
      time = `${[year, month, day].map(formatNumber).join('.')}`;
      break;
    case 2:
      time = `${[year, month, day].map(formatNumber).join('.')} ${[hour, minute].map(formatNumber).join(':')}`;
      break;
    default:
      time = `${[year, month, day].map(formatNumber).join('.')} ${[hour, minute, second].map(formatNumber).join(':')}`;
  }
  return time;
}

function formatNumber(n) {
  const num = n.toString();
  return num[1] ? num : `0${num}`;
}

// 格式化旅行距离
function formatMileage (data) {
  return Math.floor(data / 1000);
};

// 获取当前时间
function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

module.exports = {
  wxRequest: wxRequest,
  formatTime: formatTime,
  formatMileage: formatMileage,
  getCurrentTime, getCurrentTime
}
