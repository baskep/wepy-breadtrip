import special_wxRequest from '../util/special_wxRequest';

const apiMall = 'https://sujiefs.com/';

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => special_wxRequest(params, apiMall + "/api/wechat/jscode2session");

export default {
  wxJsCode2Session,
}
