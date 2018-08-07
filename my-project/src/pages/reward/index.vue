<style>
.reward {
    width: 100%;
    padding: 0rpx 30rpx;
    box-sizing: border-box;
}
.reward_items {
    width: 100%;
    margin-top: 135rpx;
}
.reward_item {
    width: 169rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    margin: 30rpx;
    border: 1rpx solid #999;
    border-radius: 10rpx;
    float: left;
    color: #333;
    font-size: 40rpx;
    position: relative;
}
.reward_item_ff {
    width: 169rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    margin: 30rpx;
    border: 1rpx solid #52b0ff;
    border-radius: 10rpx;
    float: left;
    color: #333;
    font-size: 40rpx;
    position: relative;
}
.reward_item_img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45rpx;
    height: 45rpx;
}
.reward_money {
    width: 100%;
    height: 83rpx;
    line-height: 83rpx;
    text-align: center;
    color: #52b0ff;
    font-size: 30rpx;
}
.reward_give {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    margin-top: 70rpx;
    text-align: center;
    background-color: #52b0ff;
    color: #fff;
    font-size: 40rpx;
    border-radius: 10rpx;
}
</style>

<template>
    <div class="reward">
        <div class="reward_items">
            <div :class="kid == key ? 'reward_item_ff' : 'reward_item'" v-for="(item,key) in moneys" :key="key" @click="cut(key)">
                ￥{{item}}元
                <img v-if="kid == key" class="reward_item_img" src="/static/img/jexz.png" alt="">
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="reward_money">自定义金额</div>
        <div class="reward_give">打赏</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moneys:[
                '2','5','10','15','20','25','30','35','40'
            ],
            kid : null
        }
    },
    components: {

    },
    mounted() {
        // wx.setNavigationBarTitle({
        //     title: '打赏收益详情'
        // })
    },
    computed: {

    },
    methods:{
        // 切换
        cut (id) {
            this.kid = id
        },
        // 积分列表
        Integrallist () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/article-reward',{
                openid: opid,
                page: _this.currentPage,
                'per-page': _this.perPage
            })
            .then(function (res) {
                if(res.success) {
                    _this.loadingStatus = true
                    _this.$refs.loading.hide()
                    if(res.data.items.length == 0){
                        _this.requestStatus = 404
                        return
                    }else {
                        _this.requestStatus = ''
                    }
                    _this.maxPage = res.data._meta.pageCount
                    for (var i=0;i<res.data.items.length;i++) {
                        _this.ilarr.push(res.data.items[i])
                    }
                }else {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 1000
                    })
                }
            })
            .catch(function (res) {
                console.log(res)
            })
        },
    },
    onReachBottom(){

    },
}
</script>
