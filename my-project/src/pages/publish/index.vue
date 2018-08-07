<style>
.publish {
    width: 100%;
}
.publish_header {
   width: 100%;
   height: 260rpx; 
}
.publish_header_name {
   font-size: 40rpx;
   margin-top: 80rpx;
   text-align: center;
   font-weight: normal;
}
.publish_header_minute {
    font-size: 26rpx;
    color: #666;
    text-align: center;
    margin-top: 30rpx;
}
.publish_picture {
    width: 690rpx;
    height: 260rpx;
    margin: 0 auto;
    margin-bottom: 28rpx;
    box-shadow:0px 0px 15px #aeaeae;
    position: relative;
}
.publish_picture_content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 183rpx;
    height: 89rpx;
    margin: auto;
    text-align: center;
}
.publish_picture_content_img {
    width: 46rpx;
    height: 40rpx;
}
.publish_picture_content_name {
    font-size: 30rpx;
    color: #999;
}
/* 提示 */
.redact_hint {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
.redact_hint_div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 520rpx;
    height: 332rpx;
    margin: auto;
    border-radius: 15rpx;
    background-color: #fff;
}
.redact_hint_div_ts {
    width: 100%;
    height: 228rpx;
    line-height: 228rpx;
    font-size: 30rpx;
    text-align: center;
    border-bottom: 1rpx solid #eaeaea;
}
.redact_hint_div_db {
    width: 100%;
    height: 102rpx;
    line-height: 102rpx;
    font-size: 30rpx;
    text-align: center;
}
.redact_hint_left {
    width: 50%;
    float: left;
}
.redact_hint_right {
    width: 49%;
    float: right;
}
.redact_hint_shu {
    float: left;
    width: 1rpx;
    height: 102rpx;
    background-color: #eaeaea;
}
/* 按钮 */
.publish_button {
    width: 100%;
    height: 100%;
    line-height: 50rpx;
    position: relative;
}
</style>

<template>
    <div class="publish">
        <div class="redact_hint" v-if="draft">
            <div class="redact_hint_div">
                <div class="redact_hint_div_ts">是否保存当前内容为草稿？</div>
                <div class="redact_hint_div_db">
                    <div class="redact_hint_left" @click="noDraft">不保存</div>
                    <div class="redact_hint_shu"></div>
                    <div class="redact_hint_right" @click="yesDraft">保存草稿</div>
                </div>
            </div>
        </div>
        <div class="publish_header">
            <div class="publish_header_name">开始创作</div>
            <div class="publish_header_minute">可以添加9张美图哦~</div>
        </div>
        <div class="publish_picture" @click="redact">
            <!-- <button class="publish_button" open-type="getUserInfo" @click="redact"> -->
                <div class="publish_picture_content">
                    <img class="publish_picture_content_img" src="/static/img/tupian.png" alt="">
                    <div class="publish_picture_content_name">点击添加图片</div>
                </div>
            <!-- </button> -->
        </div>
        <div class="publish_picture" @click="shipin">
            <!-- <button class="publish_button" open-type="getUserInfo" @click="shipin"> -->
                <div class="publish_picture_content">
                    <img class="publish_picture_content_img" src="/static/img/video.png" alt="">
                    <div class="publish_picture_content_name">点击添加视频</div>
                </div>
            <!-- </button> -->
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            draft:false,
            // 是否授权
            // variable:false
        }
    },
    components: {
    
    },
    mounted() {
        wx.setStorageSync('pShow','')
    },
    onShow(options) {
        let _this = this;
        this.draft = false
        let pShow = wx.getStorageSync('pShow') || '';
        if (pShow) {
            _this.draft = true
        }
    },
    computed: {
        ...mapState([
            'imgarea',
        ]),
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
        ...mapActions([
            'setImgarea',
        ]),
        // 不保存
        noDraft () {
            this.draft = false
            wx.removeStorageSync('pShow')
            // 不保存删掉
            wx.removeStorageSync('article')
            this.setImgarea (null)
        },
        // 保存
        yesDraft () {
            this.draft = false
            wx.removeStorageSync('pShow')
            var artitem = wx.getStorageSync('article')
            console.log(artitem)
            var artarr =  wx.getStorageSync('artarr') || []
            artarr.push(artitem)
            // 储存草稿 来一个存一个
            wx.setStorageSync('artarr',artarr)
            // this.setImgarea (null)
        },
        // 视频
        shipin () {
            wx.chooseVideo({
                sourceType: ['album','camera'],
                maxDuration: 60,
                camera: 'back',
                success: function(res) {
                    const url = '../redact/main?video=' + res.tempFilePath + '&&img=' + res.thumbTempFilePath
                    wx.navigateTo({ url })
                }
            })
        },
        // 图片
        redact () {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths
                    const url = '../redact/main?img=' + tempFilePaths
                    wx.navigateTo({ url })
                }
            }) 
        }
    },
    onReachBottom(){
        this.currentPage++
        if(this.currentPage <= this.maxPage){
            // this.$refs.loading.show()
            // this.recommend()
        }
    },
}
</script>
