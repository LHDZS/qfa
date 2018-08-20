<style>
.conversion {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
}
.conversion_header {
    width: 100%;
    text-align: center;
}
.conversion_header_img {
    width: 340rpx;
    height: 263rpx;
}
.conversion_header_name {
    width: 100%;
    height: 100rpx;
    font-size: 70rpx;
    color: #e0282a;
}
/* 输入兑换 */
.conversion_import {
    margin-top: 60rpx;
    width: 100%;
    height: 85rpx;
    line-height: 85rpx;
    border-bottom: 1rpx solid #eee;
}
.conversion_import_left {
    float: left;
    font-size: 30rpx;
    color: #666;
}
.conversion_import_right {
    float: left;
    width: 70%;
    color: #999;
    margin: 18rpx 0rpx;
    padding-left: 20rpx;
    box-sizing: border-box;
    font-size: 24rpx;
}
/* 确认 */
.conversion_grid {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 24rpx;
    color: #ccc;
    text-align: center;
}
.conversion_affirm {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    background-color: #52b0ff;
    color: #fff;
    border-radius: 10rpx;
}
/* 弹出层 */
.conversion_popups {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
}
.conversion_popups_div {
    width: 421rpx;
    height: 275rpx;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 10rpx;
}
.conversion_popups_img {
    width: 112rpx;
    height: 112rpx;
    padding: 20rpx 155rpx;
}
.conversion_popups_item {
    width: 100%;
    height: 54rpx;
    font-size: 38rpx;
    text-align: center;
}
.conversion_popups_item_img {
    width: 32rpx;
    height: 32rpx;
}
</style>

<template>
    <div class="conversion">
        <div class="conversion_header">
            <img class="conversion_header_img" src="/static/img/jf.png" alt="">
            <div class="conversion_header_name">{{totalpoints}}分</div>
        </div>
        <div class="conversion_import">
            <div class="conversion_import_left">输入兑换积分：</div>
            <input class="conversion_import_right" type="number" placeholder="请输入100~20000之间的整数" maxlength="5" @blur="impor">
        </div>
        <div class="conversion_grid">
            <span v-if="strbol">可兑换{{money}}元</span>
        </div>
        <!-- 遮罩层提示 -->
        <div class="conversion_popups" v-if="popupsbol">
            <div class="conversion_popups_div">
                <img class="conversion_popups_img" src="/static/img/dui.png" alt="">
                <div class="conversion_popups_item">
                    <img class="conversion_popups_item_img" src="/static/img/jf1.png" alt="">
                    积分-{{text}}
                </div>
                <div class="conversion_popups_item">
                    <img class="conversion_popups_item_img" src="/static/img/jf2.png" alt="">
                    余额+{{text/100}}元
                </div>
            </div>
        </div>
        <div class="conversion_affirm" @click="convertibility">确认兑换</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            totalpoints: 0,
            text: 0,
            // 兑换倍率
            power: null,
            opid: null,
            strbol: false,
            money: null,
            popupsbol: false
        }
    },
    components: {
        
    },
    mounted() {
        this.opid = wx.getStorageSync('openid')
        this.integral()
    },
    onShow () {

    },
    computed: {
        
    },
    methods:{
        // 输入监听事件
        impor (e) {
            let str = e.target.value
            if(e.target.value%this.power == 0) {
                this.text = str
                this.strbol = true
                this.money = str/this.power
            }else {
                this.strbol = false
                wx.showToast({
                    title: '请输入'+this.power+'的倍数',
                    icon: 'none',
                    duration: 1000
                }) 
            }
            
        },
        // 积分兑换
        convertibility () {
            if (!this.strbol) {
                return 
            }
            var _this = this
            this.$post('/restapi/article-integral-count/create',{
                openid: this.opid,
                integral_count: this.text
            })
            .then(function (res) {
                if(res.success) {
                    _this.popupsbol = true
                    setTimeout(() => {
                        _this.integral()
                        _this.popupsbol = false
                    }, 3000)
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
        // 积分获取
        integral () {
            var _this = this
            this.$get('/restapi/article-integral-count',{
                openid: this.opid
            })
            .then(function (res) {
                if(res.success) {
                    _this.totalpoints = res.data.items[0].integral_count
                    _this.power = res.data.items[0].lowest_integral
                }else {
                    wx.showToast({
                        title: '失败',
                        icon: 'success',
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
