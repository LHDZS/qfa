<script>
export default {
  created () {
    // wx.setStorageSync('openid',"121212")
    let _this = this
    wx.login({
      success: function(res) {
        if (res.code) {
            //发起网络请求
            _this.$post('/restapi/member/openid',{code: res.code})
            .then(function (res) {
              console.log(res)
                wx.setStorageSync('openid',res.data.openid)
            })
            .catch(function(res) {
                console.log(res)
            })
          } else {
            wx.showToast({
                title: res.errMsg,
                icon: 'success',
                duration: 1000
            })
          }
        }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.zhanweifu {
  width: 100%;
  height: 16rpx;
  background-color: #eee;
}
.zhanweifu_min {
  width: 100%;
  height: 8rpx;
  background-color: #eee;
}
.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; } */
.clearfix { zoom:1; }
.images {
    width: 100%;
    height: 100%;
}
button {
  position: static;
  font-size: 24rpx;
  line-height: 0rpx;
  background-color:transparent;
}
button:after{
  content: '';
  display: none;
}
</style>
