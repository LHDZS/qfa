<style>
body {
    width: 100%;
    height: 100%;
}
.clubcard {
    width: 100%;
    height: 100%;
    background-color: #eee;
}
.clubcard_header {
    width: 100%;
    height: 428rpx;
    text-align: center;
    background-color: #fff;
}
.clubcard_header_img {
    width: 590rpx;
    height: 370rpx;
    padding: 30rpx 0rpx;
}
.clubcard_main {
    width: 100%;
    padding-left: 30rpx;
    box-sizing: border-box;
    font-size: 30rpx;
    background-color: #fff;
}
.clubcard_main_item {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 1rpx solid #eee;
}
.clubcard_main_ite {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
}
.clubcard_main_iteml {
    float: left;
    color: #676767;
}
.clubcard_main_itemr {
    float: right;
    color: #999;
    padding-right: 30rpx;
}
/* 开卡 */
.clubcard_base {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rp;
    line-height: 98rpx;
    text-align: center;
    font-size: 34rpx;
    background: #58ad68;
    color: #fff;
}
/* 开卡充值页面 */
.clubcard_opencard {
    width: 100%;
    background-color: #fff;
}
.clubcard_opencard_header {
    width: 100%;
    padding: 30rpx;
    padding-bottom: 0rpx;
    box-sizing: border-box;
}
.clu_od_her_full {
    width: 100%;
    height: 40rpx;
    line-height: 40rpx;
    font-size: 34rpx;
    color: #676767;
}
/* 充值 */
.clubcard_opencard_sufficient {
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
}
.clu_od_sft_item {
    float: left;
    width: 216rpx;
    height: 116rpx;
    text-align: center;
    margin: 10rpx;
    padding: 20rpx;
    box-sizing: border-box;
    border-radius: 15rpx;
    border: 1rpx solid #58ad68;
    color: #58ad68;
}
.clu_od_sft_item_name {
    font-size: 34rpx;
}
.clu_od_sft_item_nams {
    font-size: 24rpx;
}
.clubcard_opencard_explain {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
    background-color: #fff;
}
.ccd_ocd_eln_name {
    font-size: 30rpx;
    color: #343434
}
.ccd_ocd_eln_state {
    margin-top: 30rpx;
    line-height: 40rpx;;
    font-size: 24rpx;
    color: #b7b7b7;
}
</style>

<template>
    <div class="clubcard">
        <div class="clubcard_header">
            <img class="clubcard_header_img" src="/static/img/huiyuanka.png" alt="">
        </div>
        <div class="zhanweifu"></div>
        <div class="clubcard_main" v-if="cluid == 0">
            <div class="clubcard_main_item">
                <div class="clubcard_main_iteml">卡类</div>
                <div class="clubcard_main_itemr">无</div>
            </div>
            <div class="clubcard_main_ite">
                <div class="clubcard_main_iteml">剩余天数</div>
                <div class="clubcard_main_itemr">0</div>
            </div>
        </div>
        <div class="clubcard_opencard" v-if="cluid == 1">
            <div class="clubcard_opencard_header">
                <div class="clu_od_her_full">充值</div>
            </div>
            <div class="clubcard_opencard_sufficient">
                <div class="clu_od_sft_item" v-for="(item,key) in money" :key="key">
                    <div class="clu_od_sft_item_name">{{item.name}}元</div>
                    <div class="clu_od_sft_item_nams">可用{{item.tit}}天</div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="zhanweifu"></div>
            <div class="clubcard_opencard_explain">
                <div class="ccd_ocd_eln_name">会员卡说明</div>
                <div class="ccd_ocd_eln_state">我是会员卡说明，我是会员卡说明，为什么今天会有小强，他妈的
                        还在我桌子上，干嘛，yao要和我抢饭吃？</div>
            </div>
        </div>
        


        <div class="clubcard_base" @click="opencard">{{calarr[cluid]}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            money:[
                {name:30,tit:30},
                {name:30,tit:30},
                {name:30,tit:30},
                {name:30,tit:30},
            ],
            calarr:[
                '开卡','确认开卡','续费'
            ],
            cluid:0

        }
    },
    components: {

    },
    mounted() {
        this.cluid = 0
    },
    computed: {

    },
    methods:{
        opencard () {
            this.cluid = 1
        }
    },
    onReachBottom(){

    },
}
</script>
