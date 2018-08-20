<style>
.share {
    width: 100%;
    height: 1000rpx;
    background-color:  rgba(0, 0, 0, 0.5);
}
.share_bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 220rpx;
    background-color: #fff;
}
.share_head {
    width: 100%;
    height: 140rpx;
    border-bottom: 1rpx solid #eee;
}
.share_images {
    width: 100rpx;
    height: 100rpx;
    padding: 20rpx 40rpx;
    float: left;
}
.share_name {
    line-height: 140rpx;
    font-size: 34rpx;
    float: left;
}
.share_cancel {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 32rpx;
}
</style>

<template>
    <div class="share">
        <div class="share_bottom">
            <div class="share_head">
                <button open-type="share" catchtap="true">
                    <img class="share_images" src="/static/img/weixin.png" alt="">
                    <div class="share_name">发给微信好友</div>
                </button>
            </div>
            <div class="share_cancel" @click="quxiao">取消</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    watch: {

    },
    components: {
        
    },
    mounted() {
        console.log(this.$mp.query)
    },
    computed: {

    },
    methods:{
        quxiao() {
            wx.navigateBack({
                delta: 1
            })
        }
    },
    onUnload () {

    },
    onShareAppMessage (res) {
        console.log(this.$mp.query.id)
        var _this = this
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: this.$mp.query.id.name,
            path: '../indexitem/main?id=' + _this.$mp.query.id,
            success: function(res) {
                var opid = wx.getStorageSync('openid')
                _this.$post('/restapi/article-integral/create',{
                    openid: opid,
                })
                .then(function (res) {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 1000
                    })
                    setTimeout(function(){
                        wx.navigateBack({
                            delta: 1
                        })
                    },2000)
                })
                .catch(function (res) {
                    console.log(res)
                })
            },
            fail: function(res) {
                console.log('转发失败')
            }
        }
    },
    onReachBottom(){

    },
}
</script>
