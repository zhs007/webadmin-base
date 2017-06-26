import { onMyUserInfo } from './logicevent';
import { message } from 'antd';

const errMsg = (errinfo) => {
  message.error(errinfo);
};

function onResponse(ret) {
  // console.log(ret)
  if (!ret.isok) {
    if (ret.errinfo) {
      errMsg(ret.errinfo.strinfo);
    }
  }
  else {
    if (ret.myuserinfo) {
      onMyUserInfo(ret.myuserinfo);
    }
  }
}

module.exports = {
  onResponse: onResponse
}
