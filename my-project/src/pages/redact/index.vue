<style>
.redact {
    width: 100%;
    height: 100%;
}
.redact_header {
    width: 100%;
    padding: 29rpx;
    padding-bottom: 0rpx; 
    margin-bottom: 98rpx;
    box-sizing: border-box;
}
.redact_header_cover {
    width: 100%;
    height: 394rpx;
    border-radius: 20rpx;
    background-position: center center;
    background-size: cover;
    position: relative;
}
.redact_header_cover_name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 115rpx;
    padding: 39rpx 30rpx 0rpx 30rpx;
    box-sizing: border-box;
    font-size: 30rpx;
    color: #fff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.redact_header_cover_function {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 87rpx;
    padding: 30rpx;
    padding-top: 0rpx;
    box-sizing: border-box;
}
.redact_function_music {
    width: 129rpx;
    height: 56rpx;
    float: left;
    margin-right: 30rpx;
    text-align: left;
    line-height: 56rpx;
    background-color: #fff;
    border-radius: 30rpx;
    overflow: hidden;
    font-size: 24rpx;
    color: #58ad68;
}
.redact_function_music_img {
    width: 22rpx;
    height: 22rpx;
    padding: 19rpx;
    padding-right: 12rpx; 
    float: left;
}
.redact_function_music_right {
    width: 169rpx;
    height: 56rpx;
    float: right;
    text-align: left;
    line-height: 56rpx;
    background-color: #fff;
    border-radius: 20rpx;
    font-size: 24rpx;
    color: #58ad68;
}
/* 加 */
.redact_add {
    width: 100%;
    height: 118rpx;
    padding: 27rpx 0rpx;
    box-sizing: border-box;
    position: relative;
}
.redact_header_add {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #aeaeae;
    margin: 0 auto;
}
.redact_header_add_img {
    width: 30rpx;
    height: 30rpx;
    padding: 15rpx;
}
/* 编辑区 */
.redact_article {
    width: 100%;
}
.redact_item {
    width: 100%;
    height: 260rpx;
    border: 1rpx solid #ccc;
    border-radius: 20rpx;
    position: relative;
}
.redact_item_delete {
    position:absolute;
    top:-5rpx;
    left:-5rpx;
    width:45rpx;
    height:45rpx;
}
.redact_item_img {
    width: 220rpx;
    height: 220rpx;
    margin: 20rpx 29rpx;
    background-position: center center;
    background-size: cover;
    float: left;
}
.redact_item_text {
    width: calc(100% - 300rpx);
    height: 198rpx;
    padding-top: 30rpx;
    font-size: 30rpx;
    color: #8c8c8c;
    float: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}
/* 完成 */
.redact_achieve {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 98rpx;
    line-height: 98rpx;
    padding: 0rpx;
    margin: 0rpx;
    text-align: center;
    background-color: #58ad68;
    color: #fff;
    font-size: 34rpx;
}
.publish_button {
    width: 100%;
    height: 100%;
    /* line-height: 50rpx;
    position: relative; */
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
/* 弹框 */
.redact_pop_up {
    position: absolute;
    top: 108rpx;
    left: 30%;
    width: 280rpx;
    height: 0rpx;
    transition: all .3s ease;
    display: flex;
    border-radius: 40rpx;
    text-align: center;
    font-size: 26rpx;
    color: #000;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 40rpx #ccc;
    z-index: 666;
}
.triangle {
    position: absolute;
    top:-34rpx;
    left:44%;
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    z-index: 666;
    opacity: 0;
    transition: all .3s ease;
}
.redact_pop_up_bot {
    position: absolute;
    bottom: 113rpx;
    left: 30%;
    width: 280rpx;
    height: 0rpx;
    transition: all .3s ease;
    display: flex;
    border-radius: 40rpx;
    text-align: center;
    font-size: 26rpx;
    color: #000;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 40rpx #ccc;
    z-index: 666;
}
.triangle_bot {
    position: absolute;
    bottom:-34rpx;
    left: 43%;
    width: 0px;
    height: 0px;
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    opacity: 0;
    transition: all .3s ease;
}
.triangle_bot_up {
    opacity: 1;
}
.redact_pop_up_tan {
    height: 80rpx;
}
.redact_pop_up_item {
    flex: 1;
    padding: 11rpx;
    font-size: 20rpx;
    text-align: center;
}
.redact_pop_up_img {
    width: 32rpx;
    height: 32rpx;
}
.redact_pop_up_name {
    width: 100%;
    height: 20rpx;
}
</style>

<template>
    <div class="redact">
        <div class="redact_hint" v-if="hint">
            <div class="redact_hint_div">
                <div class="redact_hint_div_ts">最多可以添加9张图哦~</div>
                <div class="redact_hint_div_db">
                    <div class="redact_hint_left" @click="know">知道了</div>
                    <div class="redact_hint_shu"></div>
                    <div class="redact_hint_right" @click="addition">继续添加</div>
                </div>
            </div>
        </div>
        <div class="redact_header">
            <div class="redact_header_cover" :style="{ 'background-image': 'url('+ bgimg +')'}">
                <div class="redact_header_cover_name" @click="title()">{{headline}}</div>
                <!-- <div class="redact_header_cover_name" @click="title()">{{headline}}</div> -->
                <div class="redact_header_cover_function">
                    <div class="redact_function_music" @click="music">
                        <img class="redact_function_music_img" src="/static/img/yy.png" alt="">
                        {{songname}}
                    </div>
                    <!-- <div class="redact_function_music"><img class="redact_function_music_img" src="/static/img/sy.png" alt="">录音</div> -->
                    <div class="redact_function_music_right" @click="Replacecover"><img class="redact_function_music_img" src="/static/img/xc.png" alt="">更换封面</div>
                </div>
            </div>
            <div class="redact_add">
                <div class="redact_header_add">
                    <img class="redact_header_add_img" @click="popup(null)" src="/static/img/jia.png" alt="">
                </div>
                <div class="redact_pop_up" :class="displayup ? 'redact_pop_up_tan' : ''">
                    <div class="redact_pop_up_item" v-if="displayup" @click="tupian(null)">
                        <img class='redact_pop_up_img' src="/static/img/tp.png" alt="">
                        <div>图片</div>
                    </div>
                    <div class="redact_pop_up_item" v-if="displayup" @click="shipin(null)">
                        <img class='redact_pop_up_img' src="/static/img/sq.png" alt="">
                        <div>视频</div>
                    </div>
                    <div class="triangle" :class="displayup ? 'triangle_bot_up' : ''"></div>
                </div>
            </div>
            <div class="redact_article" v-for="(item,key) in article" :key="key">
                <div class="redact_item">
                    <div class="redact_item_delete" @click="deleteimg(key,item.id)"><img class="images" src="/static/img/sc.png" alt=""></div>
                    <div class="redact_item_img" @click="Infigure(key)" :style="{ 'background-image': 'url('+ item.views +')'}"></div>
                    <div class="redact_item_text" @click="textmroe(key,item.content)">
                        {{item.content}}
                    </div>
                </div>
                <div class="redact_add">
                    <div class="redact_header_add">
                        <img class="redact_header_add_img"  @click="popup(key)" src="/static/img/jia.png" alt="">
                    </div>
                    <div class="redact_pop_up_bot" :class="item.display ? 'redact_pop_up_tan' : ''">
                        <div class="redact_pop_up_item" v-if="item.display" @click="tupian(key)">
                            <img class='redact_pop_up_img' src="/static/img/tp.png" alt="">
                            <div>图片</div>
                        </div>
                        <div class="redact_pop_up_item" v-if="item.display" @click="shipin(key)">
                            <img class='redact_pop_up_img' src="/static/img/sq.png" alt="">
                            <div>视频</div>
                        </div>
                        <div class="triangle_bot" :class="item.display ? 'triangle_bot_up' : ''"></div>
                    </div>
                </div>
            </div>
        </div>
        <button class="redact_achieve" open-type="getUserInfo" @getuserinfo="getUser" @click="denglu">
            <div class="publish_button">完成</div>
        </button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            headline:'点击设置标题',
            bgimg:'/static/img/beijing.png',
            // 付过去的背景图
            bgimgs:null,
            // 页面跳转带的值
            inputs:'',
            // 文章编辑页面跳转带的值
            // inputmore:'',
            // 编辑数组
            article:[],
            // 第一个弹框的显示隐藏
            displayup:false,
            // 提示框
            hint:true,
            // 视频页面判断条件
            video: '',
            // 草稿存值
            essayarr: {},
            // 坐标
            latitude:'',
            longitude: '',
            // 音乐传值
            songsrc:null,
            songname:'音乐',
            // 是否授权
            variable:false,
            // id
            id:null
        }
    },
    components: {
        
    },
    mounted() {
        // 获取坐标
        this.zuobiao()
        // 判断是否再次编辑
        var edid = this.$mp.query.editid
        var api = this.$mp.query.idapi
        if (edid) {
            var sarr = wx.getStorageSync('artarr')
            this.headline = sarr[edid].title
            this.bgimg = sarr[edid].bgimage
            this.article = sarr[edid].details
        }else if (api) {
            this.articledetails()
        }
        // 判断是否第一次进入页面 如果是 设定默认值
        var image = this.$mp.query.img
        var val = this.$mp.query.video
        if (image) {
            this.article = []
            this.make(image,'',val)
            this.hint = true
            this.bgimg = '/static/img/beijing.png'
            this.headline = '点击设置标题'
        }
        this.video = this.$mp.query.video
        // 背景图和标题设置
        this.inputs = this.$mp.query.value || ''
        // 储存草稿值
        this.essayarr['create_time'] = this.getNowFormatDate(Date.parse(new Date()))
        this.essayarr['zan'] = 0
        this.essayarr['read_quantity'] = 0
        this.essayarr['title'] = this.headline
        this.essayarr['bgimage'] = this.bgimg
        this.essayarr['details'] = this.article
        console.log(this.essayarr)
        wx.setStorageSync('article', this.essayarr);  
    },
    watch: {
        textarea (Val) {
            console.log('标题',Val)
            this.headline = Val
            this.essayarr['title'] = this.headline
            wx.setStorageSync('article', this.essayarr); 
        },
        musicarr (Val) {
            console.log('是我',Val)
            // 判断是否获取到音乐
            if (Val) {
                this.songsrc = Val.src || this.songsrc
                this.songname = Val.name || this.songname
            }
        },
        imgarea (Val) {
            console.log('图片',Val)
            this.bgimg = Val
            this.essayarr['bgimage'] = this.bgimg
            wx.setStorageSync('article', this.essayarr)
        },
        textarr (Val) {
            console.log('文字',Val)
            if (Val) {
                this.article[Val.id].content = Val.val
                this.essayarr['details'] = this.article
                wx.setStorageSync('article', this.essayarr)
            }
        }
    },
    computed: {
        ...mapState([
            'textarea',
            'musicarr',
            'imgarea',
            'textarr'
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
            'setTextarea',
            'setMusicarr',
            'setImgarea',
            'setTextarr'
        ]),
        // 获取登陆信息
        getUser (e) {
            var nickName = JSON.parse(e.mp.detail.rawData).nickName
            var avatarUrl = JSON.parse(e.mp.detail.rawData).avatarUrl
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$post('/restapi/userinfo/create',{
                openid: opid,
                nickname: nickName,
                touxiang: avatarUrl
            })
            .then(function (res) {
                _this.achieve()
            })
            .catch(function (res) {
                console.log(res)
            })
        },
        // 坐标获取
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
        // 插入视频
        shipin (key) {
            if (this.article.length == 9) {
                return
            }
            var _this = this
            wx.chooseVideo({
                sourceType: ['album','camera'],
                maxDuration: 60,
                camera: 'back',
                success: function(res) {
                    var item = {
                        views: res.thumbTempFilePath,
                        view: res.tempFilePath,
                        content: '点击添加文字',
                        display: false,
                        type: 2
                    }
                    if (key == null) {
                        _this.article.splice(0, 0, item)
                        _this.displayup = false
                    }else {
                        _this.article.splice(key+1, 0, item)
                        _this.article[key].display = false
                    }
                    _this.hint = false
                },
                fail: function (res) {
                    _this.hint = false
                }
            })
        },
        // 插入图片
        tupian (key) {
            if (this.article.length == 9) {
                return
            }
            var _this = this
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths
                    var item = {
                        views: tempFilePaths[0],
                        view: tempFilePaths[0],
                        content: '点击添加文字',
                        display: false,
                        type: 1
                    }
                    if (key == null) {
                        _this.article.splice(0, 0, item)
                        _this.displayup = false
                    }else {
                        _this.article.splice(key+1, 0, item)
                        _this.article[key].display = false
                    }
                    _this.hint = false
                },
                fail: function (res) {
                    _this.hint = false
                }
            })
        },
        // 创作
        allUploads(arr, oldPromise){
            let opid = wx.getStorageSync('openid')
            let allRequest = []
            if(oldPromise){
                allRequest.push(oldPromise)
            }
            for(let i = 0; i < arr.length; i++){
                allRequest.push(new Promise( (resolve, reject) => {
                    wx.uploadFile({
                        url: 'http://www.wenzhang.xiaoniren.cn/restapi/article/uploads',
                        filePath: arr[i].view,
                        name: 'files',
                        header: {
                            "Content-Type": "multipart/form-data",
                            'accept': 'application/json;charset=UTF-8',
                        },
                        formData: {
                            openid: opid,
                            files: arr[i].views
                        },
                        success: function (res) {
                            var data = JSON.parse(res.data)
                            if (!data.success) {
                                return wx.showToast({
                                    title: data.data.message,
                                    icon: 'none',
                                    duration: 2000
                                })
                            }
                            arr[i].view = JSON.parse(res.data).data
                            resolve(res)
                        },
                        fail: function (res) {
                            reject(res)
                        }
                    })
                }))
            }
            return Promise.all(allRequest)
        },
        // 编辑
        allUetids(arr, oldPromise){
            let allRequest = []
            let opid = wx.getStorageSync('openid')
            if(oldPromise){
                allRequest.push(oldPromise)
            }
            for(let i = 0; i < arr.length; i++){
                if (arr[i].view.indexOf("http://tmp") != -1) {
                    allRequest.push(new Promise( (resolve, reject) => {
                        wx.uploadFile({
                            url: 'http://www.wenzhang.xiaoniren.cn/restapi/article/uploads',
                            filePath: arr[i].view,
                            name: 'files',
                            header: {
                                "Content-Type": "multipart/form-data",
                            },
                            formData: {
                                openid: opid,
                                files: arr[i].views
                            },
                            success: function (res) {
                                var data = JSON.parse(res.data)
                                if (!data.success) {
                                    return wx.showToast({
                                        title: data.data.message,
                                        icon: 'none',
                                        duration: 2000
                                    })
                                }
                                arr[i].view = JSON.parse(res.data).data
                                resolve(res)
                            },
                            fail: function (res) {
                                reject(res)
                            }
                        })
                    }))
                }
            }
            return Promise.all(allRequest)
        },
        // 无用
        upImage(images, name = ''){
            return new Promise( (resolve, reject) => {
                wx.uploadFile({
                    url: 'http://www.wenzhang.xiaoniren.cn/restapi/article/uploads',
                    filePath: images,
                    name: 'file',
                    formData: {
                        name: name
                    },
                    success: function (res) {
                        resolve(res)
                    },
                    fail: function (res) {
                        reject(res)
                    }
                })
            })
        },
        // 完成啦
        achieve () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            let musicarr = this.article.map( item => {
                return {
                    id: item.id || '',
                    view: item.view,
                    content: item.content,
                    type: item.type,
                }
            })
            if (this.id) {
                let ps = null
                if (this.bgimg.indexOf("xiaoniren.cn") == -1) {
                    ps = this.allUetids(musicarr, new Promise( (resolve, reject) => {
                        wx.uploadFile({
                            url: 'http://www.wenzhang.xiaoniren.cn/restapi/article/uploads',
                            filePath: this.bgimg,
                            name: 'files',
                            header: {
                                "Content-Type": "multipart/form-data",
                            },
                            formData: {
                                openid: opid,
                                files: this.bgimg
                            },
                            success: (res) => {
                                var data = JSON.parse(res.data)
                                if (!data.success) {
                                    return wx.showToast({
                                        title: data.data.message,
                                        icon: 'none',
                                        duration: 2000
                                    })
                                }
                                this.bgimgs = JSON.parse(res.data).data
                                resolve(res)
                            },
                            fail: function (res) {
                                reject(res)
                            }
                        })
                    }))
                }else {
                    this.bgimgs = this.bgimg.replace('http://www.wenzhang.xiaoniren.cn','')
                    ps = this.allUetids(musicarr)
                }
                ps.then( res => {
                    this.$put('/restapi/article/update',{
                        openid: opid,
                        id:this.id,
                        title: this.headline,
                        bgimage: this.bgimgs,
                        coordinate: this.latitude + ',' + this.longitude,
                        bgmusic: this.songsrc,
                        items: musicarr
                    })
                    .then( res => {
                        if (res.success) {
                            wx.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 2000
                            })
                            setTimeout(function(){
                                console.log('报错？',_this.id)
                                const url = '../indexitem/main?id=' + _this.id
                                wx.navigateBack({ url })
                            },3000)
                            this.setTextarea ('')
                            this.setMusicarr (null)
                            this.setImgarea (null)
                            this.setTextarr(null)
                        }else {
                            wx.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    })
                    .catch(function (res) {
                        console.log(res)
                    })
                })
                .catch(function (res) {
                    console.log(res)
                })
            }else {
                this.allUploads(musicarr, new Promise( (resolve, reject) => {
                    wx.uploadFile({
                        url: 'http://www.wenzhang.xiaoniren.cn/restapi/article/uploads',
                        filePath: this.bgimg,
                        name: 'files',
                        header: {
                            "Content-Type": "multipart/form-data",
                            'accept': 'application/json',
                        },
                        formData: {
                            openid: opid,
                            files: this.bgimg
                        },
                        success: (res) => {
                            var data = JSON.parse(res.data)
                            if (!data.success) {
                                return wx.showToast({
                                    title: data.data.message,
                                    icon: 'none',
                                    duration: 2000
                                })
                            }
                            this.bgimgs = JSON.parse(res.data).data
                            resolve(res)
                        },
                        fail: function (res) {
                            reject(res)
                        }
                    })
                }))
                .then( res => {
                    this.$post('/restapi/article/create',{
                        openid: opid,
                        title: this.headline,
                        bgimage: this.bgimgs,
                        coordinate: this.latitude + ',' + this.longitude,
                        bgmusic: this.songsrc,
                        items: musicarr
                    })
                    .then( res => {
                        console.log(res)
                        if (res.success) {
                            const url = '../index/main'
                            wx.switchTab({ url })
                            this.setTextarea ('')
                            this.setMusicarr (null)
                            this.setImgarea (null)
                            this.setTextarr(null)
                        }else {
                            wx.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    })
                    .catch(function (res) {
                        console.log(res)
                    })
                })
                .catch(function (res) {
                    console.log(res)
                })
            }
            
        },
        // 弹起弹出
        popup (k) {
            if (k || k==0) {
                for (var i=0;i<this.article.length;i++) {
                    if (i == k) {
                        this.article[i].display = !this.article[i].display
                        this.$set(this.article, i, this.article[i])
                    }else {
                        this.article[i].display = false
                        this.$set(this.article, i, this.article[i])
                    }
                }
                this.displayup = false
            }else {
                this.displayup = !this.displayup
                for (var i=0;i<this.article.length;i++) {
                    this.article[i].display = false 
                    this.$set(this.article, i, this.article[i])
                }
            }
        },
        // 删除图片
        deleteimg (i,id) {
            var _this = this
            if (_this.article.length > 1) {
                wx.showModal({
                    title: '确定删除此段？',
                    content: '',
                    success: function(res) {
                        if (res.confirm) {
                            console.log('用户点击确定')
                            _this.article.splice(i,1)
                            if (id) {
                                _this.$get('/restapi/article/deletes?id=' + id)
                                .then(function (res) {
                                    if(res.success) {
                                        wx.showToast({
                                            title: res.data.msg,
                                            icon: 'success',
                                            duration: 1000
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
                            }
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                        }
                    }
                })
            }else {
                wx.showToast({
                    title: '至少保留一段',
                    icon: 'none',
                    duration: 2000
                })
            }
        },
        // 图片改变
        Infigure (k) {
            var _this = this
            console.log(_this.article[k].type)
            if (_this.article[k].type == 2) {
                console.log('视频改变')
                wx.chooseVideo({
                    sourceType: ['album','camera'],
                    maxDuration: 60,
                    camera: 'back',
                    success: function(res) {
                        _this.article[k].views = res.thumbTempFilePath
                        _this.article[k].view = res.tempFilePath
                        _this.hint = false
                    },
                    fail: function (res) {
                        _this.hint = false
                    }
                })
            }else {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        var tempFilePaths = res.tempFilePaths
                        _this.article[k].view = tempFilePaths[0]
                        _this.article[k].views = tempFilePaths[0]
                        console.log(_this.article)
                        _this.$set(_this.article, k ,_this.article[k])
                        _this.hint = false
                    },
                    fail: function (res) {
                        _this.hint = false
                    }
                })
            }    
        },
        // 刚进页面的添加方法
        make (img,text,val) {
            var item = {
                views: img || '',
                view: val || img,
                content: text || '点击添加文字',
                display: false,
                type: val ? 2 : 1
            }
            this.article.push(item)
        },
        // 转换时间戳
        getNowFormatDate() {
            var date = new Date()
            var seperator1 = "-"
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var strDate = date.getDate()
            if (month >= 1 && month <= 9) {
                month = "0" + month
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate
            return currentdate
        },
        // 继续添加
        addition () {
            var _this = this
            if (this.video) {
                wx.chooseVideo({
                    sourceType: ['album','camera'],
                    maxDuration: 60,
                    camera: 'back',
                    success: function(res) {
                        _this.make(res.thumbTempFilePath,'',res.tempFilePath)
                        _this.hint = false
                    },
                    fail: function (res) {
                        _this.hint = false
                    }
                })
            }else {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                        var tempFilePaths = res.tempFilePaths
                        _this.make(tempFilePaths[0])
                        _this.hint = false
                    },
                    fail: function (res) {
                        _this.hint = false
                    }
                })
            }  
        },
        // 知道了
        know () {
            this.hint = false
        },
        // 换封面
        Replacecover () {
            console.log('换封面')
            let backgrounds = []
            backgrounds.push(this.bgimg)
            for (var i=0; i<this.article.length; i++) {
                if (this.article[i].views) {
                    backgrounds.push(this.article[i].views)
                }else {
                    backgrounds.push(this.article[i].view)
                }
            }
            wx.setStorageSync('backgrounds',backgrounds)
            const url = '../cover/main'
            wx.navigateTo({ url })
        },
        // 标题编辑跳转
        title () {
            console.log('标题跳转')
            console.log(this.$router)
            this.$router.push({ path: '/pages/writing/main' })
        },
        // 文章编辑
        textmroe (id,text) {
            console.log('文章跳转')
            this.$router.push({ path: '/pages/writingmore/main', query: { values: text , id: id } })
        },
        // 跳转音乐列表
        music () {
            console.log('音乐跳转')
            this.$router.push({ path: '/pages/music/main'})
        },
        // 文章详情
        articledetails () {
            console.log('文章详情')
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/article/view',{
                openid: opid,
                id:this.$mp.query.idapi
            })
            .then(function (res) {
                if(res.success) {
                    _this.headline = res.data.title
                    _this.id = res.data.id
                    _this.bgimg = _this.url + res.data.bgimage
                    _this.article = res.data.details
                    for (var i=0;i<_this.article.length;i++) {
                        if (_this.article[i].type == 2) {
                            _this.article[i]['views'] = 'http://www.xiaoniren.cn/upload/attachment/5/130/201808/15331938926826.jpg'
                        }else {
                            _this.article[i]['views'] = _this.url + _this.article[i].view
                        }
                        _this.article[i]['display'] = false
                    }
                    console.log(_this.article)
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
    onUnload () {
        this.setTextarea('')
        this.setMusicarr(null)
        this.setTextarr(null)
    },
    onShow() {
        if (!this.$mp.query.idapi) {
            wx.setStorageSync('pShow',true)
        }
        this.essayarr['article'] = this.article
        wx.setStorageSync('article', this.essayarr); 
    },
    onReachBottom(){
        this.currentPage++
        if(this.currentPage <= this.maxPage){

        }
    },
}
</script>
