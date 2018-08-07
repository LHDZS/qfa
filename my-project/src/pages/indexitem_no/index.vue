<style>
    .indexitem {
        width: 100%;
    }
    .indexitem_body {
        width: 100%;
    }
    .indexitem_header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100rpx;
        background-color: rgba(255, 255, 255, 0.534);
        border-bottom: 2rpx solid #eee;
        z-index: 999999;
    }
    .indexitem_header_left {
        float: left;
    }
    .indexitem_header_left_img {
        width: 76rpx;
        height: 76rpx;
        border-radius: 10rpx;
        overflow: hidden;
        margin: 12rpx;
        margin-left: 30rpx;
        float: left;
    }
    .indexitem_header_left_name {
        float: left;
        font-size: 28rpx;
        line-height: 100rpx;
    }
    .indexitem_header_left_make {
        float: right;
        width: 144rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        font-size: 28rpx;
        border-radius: 10rpx;
        margin: 20rpx;
        margin-right: 30rpx;
        color: #fff;
        background-color: #52b0ff;
    }
    /* 文章标题 */
    .indexitem_titile {
        margin-top: 100rpx;
        width: 100%;
        height: 128rpx;
        line-height: 40rpx;
        padding: 30rpx 30rpx 26rpx 30rpx;
        box-sizing: border-box;
    }
    .indexitem_titile_name {
        font-size: 28rpx;
    }
    .indexitem_titile_rest {
        font-size: 24rpx;
        color: #b0b0b0;
    }
    .indexitem_titile_rest span {
        margin-right: 33rpx;
    }
    /* 图文 */
    .indexitem_container {
        width: 100%;
    }
    .indexitem_container_item {
        width: 100%;
        padding: 0rpx 30rpx;
        box-sizing: border-box;
    }
    .indexitem_container_name {
        width: 100%;
        font-size: 28rpx;
        padding: 30rpx 0rpx;
    }
    .indexitem_container_img {
        width: 100%;
        height: 622rpx;
    }
    .indexitem_container_video {
        width: 100%;
        height: 420rpx;
    }
    /* 底部TABber栏 */
    .indexitem_footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 98rpx;
        line-height: 98rpx;
        padding: 0rpx 32rpx;
        border: 2rpx solid #eee;
        background-color: #fff;
        text-align: center;
        box-sizing: border-box;
        font-size: 28rpx;
        display: flex;
    }
    .indexitem_footer_item {
        flex: 1;
        width: 48%;
        text-align: left;
        color: #333;
    }
    .indexitem_footer_item_img {
        display: block;
        width: 48rpx;
        height: 48rpx;
        margin: 26rpx 18rpx 21rpx 80rpx;
        float: left;
    }
    .indexitem_footer_shu {
        width: 4rpx;
        height: 40rpx;
        margin: 29rpx 0rpx;
        text-align: center;
        background-color: #ccc;
    }
    /* 打赏 */
    .indexitem_hot {
        width: 100%;
        height: 300rpx;
        padding: 0rpx 30rpx;
        border-bottom: 2rpx solid #eee;
        box-sizing: border-box;
    }
    .indexitem_hot_guli {
        width: 100%;
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
        font-size: 24rpx;
        color: #999;
    }
    .indexitem_hot_give {
        width: 148rpx;
        height: 61rpx;
        line-height: 61rpx;
        text-align: center;
        background-color: #ffb05b;
        color: #fff;
        font-size: 32rpx;
        border-radius: 20rpx;
        margin: 0 auto;
        margin-top: 27rpx;
    }
    .indexitem_hot_givenum {
        width: 100%;
        height: 66rpx;
        line-height: 66rpx;
        text-align: center;
        color: #999;
        font-size: 24rpx;
    }
    .indexitem_hot_readandpraise {
        width: 100%;
        height: 75rpx;
        line-height: 75rpx;
        text-align: left;
        color: #999;
        font-size: 24rpx;
    }
    .indexitem_hot_readandpraise_item {
        height: 28rpx;
        line-height: 28rpx;
        margin-right: 55rpx;
        float: left;
    }
    .indexitem_hot_readandpraise_img {
        width: 28rpx;
        height: 28rpx;
        float: right;
        margin-left: 8rpx;
    }
    /* 关注 */
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
        line-height: 45rpx;
        padding: 18rpx 0rpx;
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
    .indexitem_images {
        width: 60%;
        height: 60%;
    }
    /* 音乐 */
    .indexitem_audio {
        width: 100rpx;
        height: 100rpx;
        line-height: 120rpx;
        text-align: center;
        position: fixed;
        top: 100rpx;
        right: 10rpx;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;
        border: 1rpx solid #ccc;
        z-index: 98999;
    }
</style>

<template>
    <div class="indexitem">
        <cover-view class="indexitem_header">
            <cover-view class="indexitem_header_left">
                <cover-view class="indexitem_header_left_img">
                    <cover-image class="images" src="/static/img/3.png"></cover-image>
                </cover-view>
                <cover-view  class="indexitem_header_left_name">分享美丽</cover-view>
            </cover-view>
            <cover-view class="indexitem_header_left_make" @click="make">开始制作</cover-view>
        </cover-view>
        <div class="indexitem_body" v-if="loadingStatus && !abnorType">
            <div class="indexitem_titile">
                <div class="indexitem_titile_name">{{items.title}}</div>
                <div class="indexitem_titile_rest">
                    <span>{{items.create_time}}</span>
                    <span>{{items.nickname}}</span>
                    <span>阅读{{items.read_quantity}}</span>
                </div>
            </div>
            <cover-view class="indexitem_audio" @click="audioshowhide(items.bgmusic)">
                <cover-image class="images" src="/static/img/3.png" alt=""></cover-image>
            </cover-view>
            <div class="zhanweifu_min"></div>
            <div class="indexitem_container">
                <div class="indexitem_container_item" v-for="(item,key) in items.details" :key="key">
                    <div class="indexitem_container_name">{{item.content}}</div>
                    <img v-if="item.type == 1" class="images" :src="http + item.view" mode="widthFix" alt="">
                    <video class="indexitem_container_video" v-if="item.type == 2" :src="http + item.view">
                    </video>
                </div>
            </div>
            <div class="indexitem_hot">
                <div class="indexitem_hot_guli">如果喜欢的我的作品，请赞赏鼓励哦</div>
                <div class="indexitem_hot_give" @click="reward">打赏</div>
                <div class="indexitem_hot_givenum">3人打赏</div>
                <div class="indexitem_hot_readandpraise">
                    <div class="indexitem_hot_readandpraise_item" @click="dianzan">
                        <span>{{items.zan}}</span>
                        <img class="indexitem_hot_readandpraise_img" :src="zanarr[items.zan_type]" alt="">
                    </div>
                    <div class="indexitem_hot_readandpraise_item">{{items.read_quantity}}  阅读</div>
                </div>
            </div>
            <div class="home_content_attention_no">
                    <div class="home_content_attention_item">
                        <div class="home_attention_item_left">
                            <img class="home_attention_item_left_img" :src="items.touxiang" alt="">
                            <div class="home_attention_item_left_name">
                                <div class="home_item_left_nametop">{{items.nickname}}</div>
                                <div class="home_item_left_namebottom">每篇摄影师</div>
                            </div>
                        </div>
                        <div class="home_attention_item_right" @click="dotattention(items.openid)" :style="{backgroundColor:attnf[items.g_type].bgc,color:attnf[items.g_type].color}">
                            {{attnf[items.g_type].name}}
                        </div>
                    </div>
                </div>
            <div style="height:96rpx"></div>
            <div class="indexitem_footer">
                <div class="indexitem_footer_item" @click.stop="more">
                    <img class="indexitem_footer_item_img" src="/static/img/shouye.png" alt="">
                    更多美文
                    </div>
                <div class="indexitem_footer_shu"></div>
                <button class='indexitem_footer_item' open-type="share">
                    <img class="indexitem_footer_item_img" src="/static/img/zhuanfa.png" alt="">
                    转发给朋友
                </button>
                <!-- <div class="indexitem_footer_item" id="footer_buttom">
                    <button open-type="share"></button>
                    <img class="indexitem_footer_item_img" src="/static/img/zhuanfa.png" alt="">
                    转发给朋友
                </div> -->
            </div>
       </div>

       <div v-if="loadingStatus && abnorType">
            <wk-abnor :type=" abnorType " @abnortap=" abnortap "></wk-abnor>
        </div>

        <wk-loading ref="loading"></wk-loading>
    </div>
</template>

<script>
import wkAbnor from '@/components/abnor'
import wkLoading from '@/components/loading'

export default {
    data() {
        return {
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
            items:{},
            // 赞状态
            zanarr:[
                '/static/img/zan.png','/static/img/zanred.png'
            ],
            //   组件需要
            loadingStatus: false,
            requestStatus: '',
            http:'',
            // 音乐状态
            aid:1
        }
    },
    components: {
        wkAbnor,
        wkLoading
    },
    mounted() {
        this.http = this.url
        this.$refs.loading.show()
        this.articledetails()
        // wx.setNavigationBarTitle({
        //     title: '打赏收益详情'
        // })
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
        // 音乐播放
        audioshowhide(src) {
            const innerAudioContext = wx.createInnerAudioContext()
            innerAudioContext.autoplay = true
            innerAudioContext.src = src
            if (this.aid == 1) {
                innerAudioContext.onPlay(() => {
                    console.log('开始播放')
                })
                this.aid = 0
            }else if (this.aid == 0) {
                innerAudioContext.onStop(() => {
                    console.log('停止播放')
                })
                this.aid = 1
            }
        },
        // 关注接口
        dotattention (id) {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/follow/create',{
                use_openid: opid,
                follow_openid: id
            })
            .then(function (res) {
                if(res.success) {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 1000
                    })
                    _this.items.g_type = res.data.data.g_type
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
        // 点赞
        dianzan () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/article-zan/create',{
                openid: opid,
                aid: this.items.id
            })
            .then(function (res) {
                if(res.success) {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 1000
                    })
                    _this.items.zan_type = res.data.data.zan_type
                    _this.items.zan = res.data.data.zan
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
        // 组件需要
        abnortap(){
            this.loadingStatus = false
            this.$refs.loading.show()
        },
        // 更多
        more () {
            const url = '../index/main'
            wx.switchTab({ url })
        },
        // 制作
        make () {
            const url = '../publish/main'
            wx.switchTab({ url })
        },
        // 打赏
        reward () {
            const url = '../reward/main'
            wx.navigateTo({ url })
        },
        // 文章详情
        articledetails () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/article/view',{
                openid: opid,
                id:this.$mp.query.id
            })
            .then(function (res) {
                if(res.success) {
                    _this.loadingStatus = true
                    _this.$refs.loading.hide()
                    if(!res.data){
                        _this.requestStatus = 404
                        return
                    }else {
                        _this.requestStatus = ''
                    }
                    _this.items = res.data
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
        // this.currentPage++
        // if(this.currentPage <= this.maxPage){
        //     this.$refs.loading.show()
        //     this.articledetails()
        // }
    },
}
</script>
