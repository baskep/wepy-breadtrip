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

// // 浮点型除法
// function div(a, b) {
//   let c, d, e, f
//   try {
//     e = a.toString().split('.')[1].length
//   } catch (g) {}
//   try {
//     f = b.toString().split('.')[1].length
//   } catch (g) {}
//   // [eslint] Return statement should not contain assignment. (no-return-assign)
//   c = Number(a.toString().replace('.', ''))
//   d = Number(b.toString().replace('.', ''))
//   return mul(c / d, Math.pow(10, f - e))
// }

// // 浮点型加法函数
// function accAdd(arg1, arg2) {
//   let r1, r2, m
//   try {
//     r1 = arg1.toString().split('.')[1].length
//   } catch (e) {
//     r1 = 0
//   }
//   try {
//     r2 = arg2.toString().split('.')[1].length
//   } catch (e) {
//     r2 = 0
//   }
//   m = Math.pow(10, Math.max(r1, r2))
//   return ((arg1 * m + arg2 * m) / m).toFixed(2)
// }

// // 浮点型乘法
// function mul(a, b) {
//   let c = 0
//   let d = a.toString()
//   let e = b.toString()
//   try {
//     c += a.toString().split('.')[1].length
//   } catch (f) {}
//   try {
//     c += b.toString().split('.')[1].length
//   } catch (f) {}
//   return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
// }

// //  去除字符串所有空格
// function sTrim(text) {
//   return text.replace(/\s/g, '')
// }

module.exports = {
  wxRequest: wxRequest,
  formatTime: formatTime,
  formatMileage: formatMileage
}
