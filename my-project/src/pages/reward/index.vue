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
.reward_input {
    width: 180rpx;
    margin: 0 auto;
    border: 1rpx solid #eee;
    font-size: 28rpx;
    padding-left: 20rpx;
    box-sizing: border-box;
}
</style>

<template>
    <div class="reward">
        <div class="reward_items">
            <div :class="kid == key ? 'reward_item_ff' : 'reward_item'" v-for="(item,key) in moneys" :key="key" @click="cut(key,item)">
                ￥{{item}}元
                <img v-if="kid == key" class="reward_item_img" src="/static/img/jexz.png" alt="">
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="reward_money">自定义金额</div>
        <input class="reward_input" type="text" placeholder="请输入金额" confirm-type="done" @confirm="inpu" maxlength="5">
        <div class="reward_give" @click="reward">打赏</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moneys:[
                '2','5','10','15','20','25','30','35','40'
            ],
            kid : null,
            oppid: null,
            // 价格
            item: null
        }
    },
    components: {

    },
    mounted() {
        // wx.setNavigationBarTitle({
        //     title: '打赏收益详情'
        // })
        this.oppid = this.$mp.query.oppid
        this.id = this.$mp.query.id
    },
    computed: {

    },
    methods:{
        inpu(e) {
            this.item = e.target.value
        },
        // 切换
        cut (id,item) {
            this.kid = id
            this.item = item
        },
        // 积分列表
        reward () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/article-reward/create',{
                reward_openid: opid,
                openid: _this.oppid,
                reward_amount : 0.01,
                aid: _this.id
            })
            .then(function (res) {
                if(res.success) {
                    console.log(res)
                    wx.requestPayment({
                        'timeStamp': res.data.timeStamp,
                        'nonceStr': res.data.nonceStr,
                        'package': res.data.package,
                        'signType': res.data.signType,
                        'paySign': res.data.paySign,
                    success:function(res){
                        console.log(res)
                    },
                    fail:function(res){
                        console.log(res)
                    }
                    })
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
