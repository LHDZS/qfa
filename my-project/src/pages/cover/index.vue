<style>
.cover {
    width: 100%;
    min-height: 206rpx;
    padding: 19rpx 19rpx;
    box-sizing: border-box;
}
.cover_add {
    width: 30.2%;
    height: 206rpx;
    float: left;
    margin: 11rpx;
    background-position: center center;
    background-size: cover;
}
</style>

<template>
    <div class="cover">
        <div class="cover_add" @click="tpsc"><img class="images" src="/static/img/tj.png" alt=""></div>
        <div class="cover_add" v-for="(item,key) in backgrounds" :key="key" @click="tpfz(item)" :style="{ 'background-image': 'url('+ item +')'}"></div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            backgrounds:[
                ''
            ]
        }
    },
    components: {
        
    },
    mounted() {
        this.backgrounds = wx.getStorageSync('backgrounds') || []
    },
    computed: {
        ...mapState([
            'imgarea'
        ]),
    },
    methods:{
        ...mapActions([
            'setImgarea'
        ]),
        // 图片赋值
        tpfz(img) {
            this.setImgarea (img)
            wx.navigateBack({
                delta: 1
            })
        },
        // 图片上传
        tpsc () {
            let _this = this
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths
                    _this.backgrounds[0] = tempFilePaths[0]
                    _this.setImgarea (tempFilePaths[0])
                    wx.navigateBack({
                        delta: 1
                    })
                }
            })
        }
    },
    onReachBottom(){

    },
}
</script>
