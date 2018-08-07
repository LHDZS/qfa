<style>
.Personaldetails_body {
    width: 100%;
    min-height: 1110rpx;
    position: relative;
}
.Personaldetails {
    width: 100%;
}
.pl_header {
    width: 100%;
    height: 78rpx;
    border-bottom: 1rpx solid #eee;
}
.pl_header_imgl {
    float: left;
    width: 40rpx;
    height: 40rpx;
    padding: 19rpx 0rpx 19rpx 30rpx;
}
.pl_header_imgr {
    float: right;
    width: 40rpx;
    height: 40rpx;
    padding: 19rpx 30rpx 19rpx 0rpx;
    position: relative;
}
.plr_images {
    width: 10rpx;
    height: 100%;
    padding: 0rpx 15rpx;
}
/* 内容 */
.pl_main {
    width: 100%;
    padding: 30rpx;
    margin-bottom: 98rpx;
    box-sizing: border-box;
}
.pl_main_title {
    width: 100%;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 34rpx;
    font-weight: normal;
    color: #333;
}
.pl_main_nature {
    width: 100%;
    height: 50rpx;
    line-height: 50rpx;
}
.pl_main_nature_left {
    float: left;
    color: #666;
    font-size: 26rpx;
    margin-right: 37rpx;
}
.pl_main_character {
    width: 100%;
    max-height: 120rpx;
    margin: 30rpx 0rpx;
    font-size: 30rpx;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.pl_main_itemsa {
    width: 100%;
}
.pl_main_img {
    width: 100%;
}
.pl_main_video {
    width: 100%;
    height: 400rpx;
}
/* 低栏 */
.pl_main_bottom {
    position: absolute;
    left: 0;
    bottom: -98rpx;
    width: 100%;
    height: 98rpx;
    display: flex;
    text-align: center;
    background-color: #fff;
    z-index: 888;
    color: #666;
    font-size: 28rpx;
    border-top: 1rpx solid #cecece;
}
.pl_main_bottom_item {
    flex: 1;
    line-height: 98rpx;
}
.pl_mi_bt_img {
    width: 34rpx;
    height: 34rpx;
    padding: 0rpx 25rpx 0rpx 0rpx;
}
/* 编辑栏 */
.pl_header_redact {
    position: absolute;
    top: 20rpx;
    right: 190rpx;
    width: 242rpx;
    height: 185rpx;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    text-align: left;
    background-color: #323232;
    color: #fff;
    position: relative;
}
.pl_header_trigon {
    position: absolute;
    top: -35rpx;
    right: 5%;
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #323232;
    border-left: 10px solid transparent;
}
.pl_header_redact_item {
    width: 100%;
    height: 48.5%;
    line-height: 70rpx;
    font-size: 30rpx;
}
.pl_der_act_item_img {
    float: left;
    padding: 15rpx 30rpx;
    width: 34rpx;
    height: 38rpx;
}
.pl_der_act_item_imgs {
    float: left;
    padding: 15rpx 30rpx;
    width: 28rpx;
    height: 38rpx;
}
.pl_header_redact_shu {
    width: 100%;
    height: 1rpx;
    background-color: #666;
}
</style>

<template>
    <div class="Personaldetails_body">
        <div class="Personaldetails">
            <div class="pl_header">
                <div class="pl_header_imgl" @click="home">
                    <img class="images" src="/static/img/tc.png" alt="">
                </div>
                <div class="pl_header_imgr" @click="dianji">
                    <img class="plr_images" src="/static/img/caz.png" alt="">
                    <div class="pl_header_redact" v-if="bjk">
                        <div class="pl_header_redact_item" @click="edit">
                            <img class="pl_der_act_item_img" src="/static/img/bj.png" alt="">
                            编辑
                        </div>
                        <div class="pl_header_redact_shu"></div>
                        <div class="pl_header_redact_item" @click="deletes">
                            <img class="pl_der_act_item_imgs" src="/static/img/shanc.png" alt="">
                            删除
                        </div>
                        <div class="pl_header_trigon"></div>
                    </div>
                </div>
            </div>
            <div class="pl_main">
                <div class="pl_main_title">{{details.title}}</div>
                <div class="pl_main_nature">
                    <div class="pl_main_nature_left">{{details.create_time}}</div>
                    <div class="pl_main_nature_left"><open-data type="userNickName" open-gid="xxxxxx"></open-data></div>
                    <div class="pl_main_nature_left">{{details.read_quantity}}阅读</div>
                </div>
                <div class="pl_main_itemsa" v-for="(item,key) in details.details" :key="key">
                    <div class="pl_main_character">{{item.content}}</div>
                    <!-- <div v-if="item.type==1" class="pl_main_img" :style="{ 'background-image': 'url('+ item.view +')'}"></div> -->
                    <img v-if="item.type==1" class="pl_main_img" :src=" http + item.view" mode="widthFix" alt="">
                    <video v-if="item.type==2" class="pl_main_video" :src="http + item.view"></video>
                </div>
            </div>
            <div class="pl_main_bottom">
                <div class="pl_main_bottom_item" @click="dianzan">
                    <img class="pl_mi_bt_img" :src="zantype[details.zan_type || 0]" alt="">
                    点赞
                </div>
                <!-- <div class="pl_main_bottom_item">
                    <img class="pl_mi_bt_img" src="/static/img/fx.png" alt="">
                </div> -->
                <button class="pl_main_bottom_item" open-type="share" catchtap="true">
                    <img class="pl_mi_bt_img" src="/static/img/fx.png" alt="">
                    分享
                </button>
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
            details:{},
            zantype:['/static/img/dz.png','/static/img/dzh.png'],
            // 编辑框
            bjk:false,
            //   组件需要
            loadingStatus: false,
            requestStatus: '',
            http:''
        }
    },
    components: {
        wkAbnor,
        wkLoading
    },
    mounted() {
        this.details = {}
        this.$refs.loading.show()
        var artarr = wx.getStorageSync('artarr')
        var key = this.$mp.query.key
        if (key) {
            this.details = artarr[key]
            this.$refs.loading.hide()
            this.http = ''
            return
        }
        this.http = this.url
        this.articledetails()
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
        // 组件需要
        abnortap(){
            this.loadingStatus = false
            this.$refs.loading.show()
        },
        // 点赞
        dianzan () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/article-zan/create',{
                openid: opid,
                aid: this.details.id
            })
            .then(function (res) {
                if(res.success) {
                    console.log(res)
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'success',
                        duration: 1000
                    })
                    _this.articledetails()
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
        // 删除
        deletes () {
            var _this = this
            wx.showModal({
            title: '是否确认删除',
            content: '一旦删除无法恢复',
            success: function(res) {
                if (res.confirm) {
                console.log('用户点击确定')
                var key = _this.$mp.query.key
                if (key) {
                    var artarr = wx.getStorageSync('artarr')
                    artarr.splice(key,1)
                    console.log(artarr)
                    wx.setStorageSync('artarr', artarr);
                    const url = '../mine/main'
                    wx.switchTab({ url })
                    return
                }
                _this.articledelete()
                } else if (res.cancel) {
                console.log('用户点击取消')
                }
            }
            })
        },
        // 再次编辑
        edit () {
            if (this.$mp.query.key) {
                const url = '../redact/main?editid=' + this.$mp.query.key
                wx.navigateTo({ url })
            }else {
                const url = '../redact/main?idapi=' + this.$mp.query.id
                wx.navigateTo({ url })
            }
        },
        // 点击显示
        dianji () {
            this.bjk = !this.bjk
        },
        home () {
            const url = '../index/main'
            wx.switchTab({ url })
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
                    _this.details = res.data
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
        // 文章删除
        articledelete () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$del('/restapi/article/delete?id=' + this.$mp.query.id)
            .then(function (res) {
                if(res.success) {
                    console.log(res)
                    const url = '../mine/main'
                    wx.switchTab({ url })
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
