const KEY_SERVTOKEN = 'webadminserv_token';

let myUserInfo = {uid: -1, token: localStorage.getItem(KEY_SERVTOKEN)};

function onMyUserInfo(myuserinfo) {
    for (let key in myuserinfo) {
        myUserInfo[key] = myuserinfo[key];

        if (key == 'token') {
            localStorage.setItem(KEY_SERVTOKEN, myuserinfo[key]);
        }
    }
}

module.exports = {
  onMyUserInfo: onMyUserInfo,
  myUserInfo: myUserInfo,
}
