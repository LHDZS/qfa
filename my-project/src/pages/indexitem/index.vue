<style>
    .indexitem {
        width: 100%;
    }
</style>

<template>
    <div class="indexitem">
        <web-view :src="url + '?id=' + id + '&&openid=' + opid" @message="WeChat"></web-view>
    </div>
</template>
<!-- <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script> -->
<script>
export default {
    data() {
        return {
            url:'http://www.wenzhang.xiaoniren.cn/word-info/index.html',
            // url: 'http://localhost:8080',
            id: '',
            opid: null
            
        }
    },
    components: {

    },
    mounted() {
        this.id = this.$mp.query.id
        this.opid = this.$mp.query.opid
        console.log(this.id)
        console.log(this.opid)
    },
    computed: {

    },
    methods:{
      WeChat(e) {
          console.log('gsh', e)
      },
    },
    onShareAppMessage(options) {
    //分享的类型为按键类型
    console.log(options)
      var that = this
      var return_url = options.webViewUrl
      var path = encodeURIComponent(return_url)
      console.log(path, options)
      return {
        title: '分享小程序',
        path: path,
        success: function (res) {
          that.url = return_url
          // 转发成功
          wx.showToast({
            title: "转发成功",
            icon: 'success',
            duration: 2000
          })
        },
        fail: function (res) {
          // 转发失败
        }
      }
    },
    // onUnload () {
    //     wx.navigateBack({
    //         delta: 0
    //     })
    // },
    onReachBottom(){

    },
}
</script>
