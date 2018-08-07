<style>
body {
    width: 100%;
    height: 100%;
}
.home {
    width: 100%;
    /* min-height: 1020rpx; */
    height: 100%;
}
.home_header_tab {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 84rpx;
    line-height: 80rpx;
    display: flex;
    z-index: 1999;
    background-color: #fff;
}
.hpme_zhanweifu {
    position: fixed;
    top: 84rpx;
    left: 0;
    width: 100%;
    height: 8rpx;
    background-color: #eee;
    z-index: 1999;
}
.home_header_tab_item {
    flex: 1;
    height: 80rpx;
    font-size: 32rpx;
    text-align: center;
    color: #a9a9a9;
}
.home_header_tabcolor_item {
    flex: 1;
    height: 100%;
    font-size: 32rpx;
    text-align: center;
    color: #000;
}
.home_header_tabkey_item {
    width: 50%;
    transition: width 2s;
    height: 4rpx;
    background-color: #52b0ff;
    margin: 0 auto;
}
/* 内容 */
.home_content_tab {
    margin-top: 92rpx;
    width: 100%;
}
.home_content_tab_item {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
}
.home_content_tab_main {
    width: 100%;
    height: 299rpx;
    border-radius: 10rpx;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
}
.home_content_main_img {
    width: 100%;
    height: 100%;
}
.home_content_tab_mainfooter {
    width: 100%;
    height: 65rpx;
    line-height: 65rpx;
}
.home_content_mainfooter_left {
    float: left;
    color: #4a4a4a;
    font-size: 32rpx;
}
.home_content_mainfooter_right {
    float: right;
}
.home_content_mainfooter_right_item {
    float: left;
    width: 100rpx;
    font-size: 24rpx;
    color: #c0c0c0;
    text-align: right;
}
/* 关注 */
/* 未关注列表 */
.home_content_NoAttention{
    width: 100%;
}
.home_content_attention {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
}
.home_content_attention_no {
    width: 100%;
}
.home_content_attention_item {
    width: 100%;
    height: 162rpx;
    padding: 25rpx 30rpx;
    box-sizing: border-box;
}
.home_attention_item_left {
    float: left;
}
.home_attention_item_left_img {
    width: 111rpx;
    height: 111rpx;
    border-radius: 50%;
    float: left;
}
.home_attention_item_left_name {
    float: left;
    margin-left: 20rpx;
    line-height: 105rpx;
    /* padding: 18rpx 0rpx; */
}
.home_item_left_nametop {
    font-size: 30rpx;
}
.home_item_left_namebottom {
    font-size: 26rpx;
    color: #999;
}
.home_attention_item_right {
    float: right;
    margin-top: 30rpx;
    width: 120rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    font-size: 26rpx;
    border-radius: 30rpx;
}
/* 已关注 */
.home_content_OffAttention {
    width: 100%;
}
.home_content_OffAttention_item {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
}
.home_content_OffAttention_item_left {
    float: left;
    font-size: 34rpx;
}
.orderform_header_xuan_right {
    float: right;
    height: 100%;
    font-size: 24rpx;
    width: 100rpx;
    margin-top: 8rpx;
    color: #b5b5b5;
    text-align: left;
    position: relative;
    cursor:pointer;
}
.orderform_header_xiajian {
    width:25rpx;
    height:15rpx;
    position:absolute;
    top:10rpx;
    right:0rpx;
}
.home_content_OffAttention_can_auto {
    width: 100%;
    overflow-y: auto;
}
.home_content_OffAttention_can {
    white-space: nowrap;
    display: inline-block;
    transition: max-height .5s ease;
    max-height: 0;
    overflow: hidden;
}
.home_content_OffAttention_can_h {
    max-height: 205rpx;
}
.home_content_OffAttention_can_item {
    display: inline-block;
    width: 131rpx;
    height: 205rpx;
    text-align: center;
    padding: 0rpx 20rpx;
}
.home_OffAttention_item_img {
    width: 131rpx;
    height: 131rpx;
    border-radius: 50%;
}
.home_OffAttention_item_name {
    width: 131rpx;
    font-size: 26rpx;
    color: #999;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.fade-enter-active, .fade-leave-active {
  transition: height .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
/* 已关注 */
.home_attention_item_left_names  {
    float: left;
    margin-left: 20rpx;
    line-height: 45rpx;
    padding: 35rpx 0rpx;
}
.home_content_attention_article {
    width: 100%;
}
.home_content_attention_article_botton {
    width: 100%;
    padding: 0rpx 25rpx 25rpx 30rpx;
    box-sizing: border-box;
}
.home_article_botton_name {
    font-size: 28rpx;
    width: 700rpx;
    margin-bottom: 18rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.home_article_botton_img {
    width: 100%;
    height: 331rpx;
    background-position: center center;
    background-size: cover;
}
/* 身边 */
.home_content_tab_three {
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
}
.home_content_three_item {
    width: 47.1%;
    float: left;
    height: 426rpx;
    margin: 10rpx;
    /* border-radius: 10rpx; */
    /* overflow: hidden; */
}
.home_content_three_item_img {
    width: 100%;
    height: 325rpx;
    background-position: center center;
    background-size: cover;
    border-radius: 10rpx 10rpx 0px 0px;
}
.home_content_three_item_botton {
    width: 100%;
    height: 99rpx;
    box-shadow: 0rpx 3rpx 10rpx #ccc;
    box-sizing: border-box;
    border-radius: 0rpx 0rpx 10rpx 10rpx;
    position: relative;
}
.home_three_item_botton_img {
    width: 68rpx;
    height: 68rpx;
    border-radius: 50%;
    position: absolute;
    border: 1rpx solid #fff;
    top: -40rpx;
    left: 30rpx;
    overflow: hidden;
}
.home_three_item_botton_km {
    width: 100%;
    height: 35rpx;
    padding-right: 20rpx;
    box-sizing: border-box;
    text-align: right;
    color: #adadad;
    font-size: 22rpx;
}
.home_three_item_botton_name {
    width: 100%;
    height: 62rpx;
    line-height: 62rpx;
    font-size: 28rpx;
    padding: 0rpx 30rpx;
    box-sizing: border-box;
    color: #6e6e6e;
}
.home_swiper {
    width: 100%;
    height: 100%;
}
.home_zhanweifu {
    position: fixed;
    top: 84rpx;
    left: 0;
    width: 100%;
    height: 16rpx;
    background-color: #eee;
}
</style>

<template>
    <div class="home">
        <div class="home_header_tab">
            <div :class="tabkey == key ? 'home_header_tabcolor_item' : 'home_header_tab_item'" v-for="(item,key) in tabarr" :key="key" @click="dianji(key)">
                {{item}}
                <div v-if="tabkey == key" class="home_header_tabkey_item"></div>
            </div>
        </div>
        <div class="home_zhanweifu"></div>
        <swiper class="home_swiper" @change="swipers"  :current="tabkey">
            <swiper-item style="overflow: auto;">
                <scroll-view scroll-y="true" style="height: 100%" enable-back-to-top @scrolltolower="upsole()" class="home_content_tab" v-if="loadingStatus && !abnorType">
                    <div class="home_content_tab_item" v-for="(item,key) in items" :key="key" @click.stop="details(item.id)">
                        <div class="home_content_tab_main" :style="{ 'background-image': 'url('+ http + item.bgimage +')'}">
                            <!-- <img class="home_content_main_img" :src="item.bgimage" alt=""> -->
                        </div>
                        <div class="home_content_tab_mainfooter">
                            <div class="home_content_mainfooter_left">{{item.title}}</div>
                            <div class="home_content_mainfooter_right">
                                <div class="home_content_mainfooter_right_item">{{item.zan_type}}点赞</div>
                                <div class="home_content_mainfooter_right_item">{{item.read_quantity}}阅读</div>
                            </div>
                        </div>
                    </div>    
                </scroll-view >
            </swiper-item>
            <swiper-item style="overflow: auto;">
                <scroll-view scroll-y="true" style="height: 100%" enable-back-to-top @scrolltolower="upsole()" class="home_content_tab">
                    <div class="home_content_OffAttention">
                        <div class="home_content_OffAttention_item">
                            <div class="home_content_OffAttention_item_left">我的关注（{{careabouts.length}}）</div>
                            <div class="orderform_header_xuan_right" @click="shaixuan">
                                <span>收起</span>
                                <img class="orderform_header_xiajian" v-if="!meunshow" src="/static/img/xiajian.png" alt="">
                                <img class="orderform_header_xiajian" v-if="meunshow" src="/static/img/shangjian.png" alt="">
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <scroll-view scroll-x class="home_content_OffAttention_can" :class="meunshow ? 'home_content_OffAttention_can_h' : ''" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" scroll-into-view="red" scroll-top="100">
                            <div class="home_content_OffAttention_can_item" @click.stop="bieren(item.openid)" v-for="(item,key) in careabouts" :key="key">
                                <img class="home_OffAttention_item_img" :src="item.touxiang" alt="">
                                <div class="home_OffAttention_item_name">{{item.nickname}}</div>
                            </div>
                        </scroll-view>
                    </div>
                    <div class="zhanweifu_min"></div>
                    <div class="home_content_NoAttention">
                        <div class="home_content_attention">热门推荐</div>
                        <div class="home_content_attention_no">
                            <div class="home_content_attention_item" v-for="(item,key) in attentions" :key="key">
                                <div class="home_attention_item_left" @click.stop="bieren(item.openid)">
                                    <img class="home_attention_item_left_img" :src="item.touxiang || '/static/img/fabu.png'" alt="">
                                    <div class="home_attention_item_left_name">
                                        <div class="home_item_left_nametop">{{item.nickname}}</div>
                                    </div>
                                </div>
                                <div class="home_attention_item_right" @click="dotattention(item.openid)" :style="{backgroundColor:attnf[item.g_type].bgc,color:attnf[item.g_type].color}">
                                    {{attnf[item.g_type].name}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="zhanweifu_min"></div>
                    <div class="home_content_attention_article" v-for="(item,key) in followeds" :key="key">
                        <div class="home_content_attention_item">
                            <div class="home_attention_item_left" @click="bieren(item.openid)">
                                <img class="home_attention_item_left_img" :src="item.touxiang" alt="">
                                <div class="home_attention_item_left_names">
                                    <div class="home_item_left_nametop">{{item.nickname}}</div>
                                </div>
                            </div>
                            <div class="home_attention_item_right" @click="dotattention(item.openid)" :style="{backgroundColor:attnf[item.g_type].bgc,color: attnf[item.g_type].color}">
                                {{attnf[item.g_type].name}}
                            </div>
                        </div>
                        <div class="home_content_attention_article_botton" @click="details(item.id)">
                            <div class="home_article_botton_name">{{item.title}}</div>
                            <!-- <div class="home_article_botton_details">详情</div> -->
                            <div class="home_article_botton_img" :style="{ 'background-image': 'url('+ http + item.bgimage +')'}"></div>
                        </div>
                    </div>
                </scroll-view>
            </swiper-item>
            <swiper-item style="overflow: auto;">
                <scroll-view scroll-y="true" style="height: 100%" enable-back-to-top @scrolltolower="upsole()" class="home_content_tab">
                    <div class="home_content_tab_three">
                        <div class="home_content_three_item" v-for="(item,key) in nearbyarr" :key="key" @click="details(item.id)">
                            <div class="home_content_three_item_img" :style="{ 'background-image': 'url('+ http + item.bgimage +')'}"></div>
                            <div class="home_content_three_item_botton">
                                <div class="home_three_item_botton_img" @click.stop="bieren(item.openid)"><img class="images" :src="item.touxiang" alt=""></div>
                                <div class="home_three_item_botton_km">{{item.km}}</div>
                                <div class="home_three_item_botton_name">{{item.title}}</div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </scroll-view>
            </swiper-item>
        </swiper>

         <div v-if="loadingStatus && abnorType">
            <wk-abnor :type=" abnorType " @abnortap=" abnortap "></wk-abnor>
        </div>

        <wk-loading ref="loading"></wk-loading>
    </div>
</template>

<script>
import wkAbnor from '@/components/abnor'
import wkLoading from '@/components/loading'

var touchDot = 0;//触摸时的原点
var touchMove = 0
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动
var interval = "";// 记录/清理时间记录
export default {
    data() {
        return {
            tabarr:[
                '推荐',
                '关注',
                '身边'
            ],
            attnf:[
                {
                  name:'关注',
                  color:'#fff',
                  bgc:'#57a7fe'
                },
                {
                  name:'已关注',
                  color:'#999',
                  bgc:'#eee'
                }
            ],
            minhe:[
                {
                  img:'http://www1.xiaoniren.cn/upload/attachment/5/130/201805/15271328675784.jpg',
                  name:'锄禾日当午'
                },
                {
                  img:'/static/img/fabul.png',
                  name:'汗滴禾下土'
                },
                {
                  img:'/static/img/fabul.png',
                  name:'谁知盘中餐'
                },
                {
                  img:'/static/img/fabul.png',
                  name:'粒粒皆辛苦'
                },
                {
                  img:'/static/img/fabul.png',
                  name:'粒粒皆辛苦'
                },
            ],
            meunshow: false,
            tabkey:0,
            items:[],
            // 未关注
            attentions:[],
            // 已关注
            careabouts:[],
            // 
            followeds:[],
            followedshow:false,
            http:'',
            //   最大页数
            currentPage: 1,
            maxPage: 1,
            perPage: 10,
            //   组件需要
            loadingStatus: false,
            requestStatus: '',
            // 坐标
            latitude: null,
            longitude: null,
            // 附近列表
            nearbyarr:[],
            lastX: 0,
            lastY: 0,
            currentGesture: 0,
            // opid
            opid: null,
            // 禁止重复点击
            checkSubmitFlg:false
        }
    },
    components: {
        wkAbnor,
        wkLoading
    },
    mounted() {
        this.opid = wx.getStorageSync('openid')
        this.tabkey = 0
        this.$refs.loading.show()
        wx.setStorageSync('pShow','')
        this.items = []
        // this.items = []
        this.recommend()
        // 关注
        this.attentions = []
        this.followeds = []
        // 关注的人
        this.careabouts = []
        this.currentPage = 1
        // 身边
        this.nearbyarr = []
        // console.log(this.$mp.query.id)
        // this.tabkey = this.$mp.query.id || 0
        // 判断是那页 优化请求数量
        // if (this.tabkey == 0) {
        // }else if (this.tabkey == 1) {
        //     this.attention()
        //     this.followed()
        //     this.careabout()
        // }else if (this.tabkey == 2) {
        //     this.nearbyapi()
        // }
        this.http = this.url
    },
    watch: {
        tabkey(Val) {
            console.log('监听',Val)
            if (Val == 0) {
                this.$refs.loading.show()
                this.currentPage = 1
                this.items = []
                this.recommend()
            }else if (Val == 1) {
                this.currentPage = 1
                this.followedshow = false
                this.attentions = []
                this.followeds = []
                this.careabouts = []
                this.careabout()
                this.attention()
                this.followed()
            }else if (Val == 2) {
                this.$refs.loading.show()
                this.zuobiao()
                this.currentPage = 1
                this.followedshow = false
                this.nearbyarr = []
                this.nearbyapi()
            }
        }
    },
    onShow() {
        
    },
    computed: {
        abnorType(){
            // 0	网络错误
            // 1	请求超时
            // 2	文件下载成功，但保存失败，此错误只出现node环境下
            // >=200	http请求状态码
            if(this.requestStatus === 0 || this.requestStatus === 1){
                return 'REQUEST_ERROR'
            }else if(this.requestStatus === 404){
                return 'DATA'
            }
            return ''
        }
    },
    methods:{
        // 轮播触发事件 
        swipers (e) {
            if (e.target.source == 'touch') {
                this.tabkey = e.target.current
            }
        },
        // 触摸开始事件
            // touchstart 手指触摸
            // touchmove 手指触摸后移动
            // touchcancel 手指触摸动作被打断，如弹窗和来电提醒
            // touchend 手指触摸动作结束
            // touchStart(e) {
            //     this.lastX = e.touches[0].pageX
            //     this.lastY = e.touches[0].pageY
            //     // touchDot = e.touches[0].pageX; // 获取触摸时的原点
            //     // // 使用js计时器记录时间  
            //     // interval = setInterval(function () {
            //     //     time++;
            //     // }, 100);
            // },
            // 触摸移动事件
            // touchMove(e) {
            //     // 记录触摸方向点
            //     let currentX = e.touches[0].pageX
            //     let currentY = e.touches[0].pageY
            //     let tx = currentX - this.lastX
            //     let ty = currentY - this.lastY
            //     if (this.currentGesture != 0){
            //         return
            //     }
            //     if (Math.abs(tx) > Math.abs(ty)) {
            //         if (tx < 0) {
            //             console.log('向左')
            //             if (this.tabkey < 2) {
            //                 this.tabkey++
            //             }
            //             this.currentGesture = 1
            //         }
            //         else if (tx > 0) {
            //             console.log('向右')
            //             if (this.tabkey > 0) {
            //                 this.tabkey--
            //             }
            //             this.currentGesture = 2
            //         }
            //     }
            //     this.lastX = currentX
            //     this.lastY = currentY
            //     // 向左滑动  
            //     // if (touchMove - touchDot <= -40 && time < 10) {
            //     //     console.log('向左滑动')
            //     //     if (this.tabkey < 2) {
            //     //         this.tabkey++
            //     //     }
            //     // }
            //     // // 向右滑动
            //     // if (touchMove - touchDot >= 40 && time < 10) {
            //     // console.log('向右滑动');
            //     //     if (this.tabkey > 0) {
            //     //         this.tabkey--
            //     //     }
            //     // }
            // },
            // 触摸结束事件
            // touchEnd(e) {
            //     this.currentGesture = 0
            //     // console.log(touchDot)
            //     // console.log(touchMove)
            //     // return
            //     // // 向右
            //     // if (touchDot < touchMove && touchMove != 0) {
            //     //     console.log('向右')  
            //     //     // 向左
            //     // }else if (touchDot > touchMove && touchMove != 0) {
            //     //     console.log('向左')
            //     // }
            //     // clearInterval(interval);// 清除setInterval
            //     // touchMove = 0 
            //     // time = 0;
        // },
        // 别人的中心
        bieren (e) {
            const url = '../otherpeople/main?opid=' + e
            wx.navigateTo({ url })
        },
        // 推荐跳详情
        details(e) {
            const url = '../indexitem/main?id=' + e
            wx.navigateTo({ url })
        },
        upper(e) {
            console.log(e)
        },
        lower(e) {
            this.currentPage++
            if(this.currentPage <= this.maxPage){
                this.$refs.loading.show()
                this.careabouts()
            }
            console.log('到边上了')
        },
        // 收起放下
        shaixuan () {
            if (this.followedshow) {
                this.meunshow = !this.meunshow
            }else {
                this.loadingStatus = false
                this.$refs.loading.show()
            }
        },
        abnortap(){
            this.loadingStatus = false
            this.$refs.loading.show()
        },
        dianji(i) {
            if (this.tabkey == i) {
                return
            }
            this.tabkey = i
        },
        zuobiao () {
            var _this = this
            // 获取坐标
            wx.getLocation({
                type: 'wgs84',
                success: function(res) {
                    _this.latitude = res.latitude
                    _this.longitude = res.longitude
                }
            })
        },
        // 身边接口
        nearbyapi () {
            var _this = this
            this.$get('/restapi/nearby',{
                openid: this.opid,
                coordinate: _this.latitude + ',' + _this.longitude,
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
                        _this.nearbyarr.push(res.data.items[i])
                    }
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
        // 推荐接口
        recommend () {
            var _this = this
            this.$get('/restapi/article',{
                openid: this.opid,
                page: _this.currentPage,
                'per-page': _this.perPage
            })
            .then(function (res) {
                console.log(res)
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
                        _this.items.push(res.data.items[i])
                    }
                    // _this.items = res.data.items
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
        followed() {
            var _this = this
            this.$get('/restapi/follow',{
                openid: this.opid,
                page: _this.currentPage,
                'per-page': _this.perPage
            })
            .then(function (res) {
                console.log(res)
                if(res.success) {
                    _this.followedshow = true
                    _this.loadingStatus = true
                    _this.$refs.loading.hide()
                    _this.maxPage = res.data._meta.pageCount
                    for (var i=0;i<res.data.items.length;i++) {
                        _this.followeds.push(res.data.items[i])
                    }
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
        // 未关注
        attention () {
            var _this = this
            this.$get('/restapi/attention',{
                openid: this.opid,
                page: _this.currentPage,
                'per-page': _this.perPage
            })
            .then(function (res) {
                if(res.success) {
                    _this.maxPage = res.data._meta.pageCount
                    for (var i=0;i<res.data.items.length;i++) {
                        _this.attentions.push(res.data.items[i])
                    }
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
        // 关注过的
        careabout () {
            var _this = this
            this.$get('/restapi/follows',{
                openid: this.opid,
                page: _this.currentPage,
                'per-page': _this.perPage
            })
            .then(function (res) {
                if(res.success) {
                    _this.maxPage = res.data._meta.pageCount
                    for (var i=0;i<res.data.items.length;i++) {
                        _this.careabouts.push(res.data.items[i])
                    }
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
        // 发现接口
        discover () {
            var _this = this
            this.$get('/restapi/article',{

            })
            .then(function (res) {
                console.log(res)
                if(res.success) {
                    _this.items = res.data.items
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
        // 关注接口
        dotattention (id) {   
            if (this.checkSubmitFlg == true) {
                return 
            }  
            this.checkSubmitFlg = true 
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/follow/create',{
                use_openid: opid,
                follow_openid: id
            })
            .then(function (res) {
                if(res.success) {
                    _this.checkSubmitFlg = false;  
                    _this.currentPage = 1
                    _this.attentions = []
                    _this.followeds = []
                    _this.careabouts = []
                    _this.attention()
                    _this.followed()
                    _this.careabout()
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
        // 上拉触底
        upsole () {
            console.log('触底事件')
            this.currentPage++
            if(this.currentPage <= this.maxPage){
                this.$refs.loading.show()
                if (this.tabkey == 0) {
                    this.recommend()
                }else if (this.tabkey == 1) {
                    this.followed()
                }else if (this.tabkey == 2) {
                    this.nearbyapi()
                }
            }
        },
    },
    onReachBottom(){
        console.log('触底事件')
        this.currentPage++
        if(this.currentPage <= this.maxPage){
            this.$refs.loading.show()
            if (this.tabkey == 0) {
                this.recommend()
            }else if (this.tabkey == 1) {
                this.followed()
            }else if (this.tabkey == 2) {
                this.nearbyapi()
            } 
        }
    },
}
</script>

