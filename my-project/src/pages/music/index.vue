<style>
.music {
    width: 100%;
}
.music_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 98rpx;
    line-height: 98rpx;
    text-align: center;
    display: flex;
    font-size: 30rpx;
    border-bottom: 1rpx solid #eee;
}
.music_header_item {
    flex: 1;
    color: #333;
}
.music_header_onitem {
    flex: 1;
    background-color: #6ba5f7;
    color: #fff;
}
.music_main {
    width: 100%;
    margin: 98rpx 0rpx;
}
.music_main_items {
    width: 100%;
}
.music_main_item {
    width: 100%;
    height: 98rpx;
    line-height: 98rpx;
    padding-left: 30rpx;
    box-sizing: border-box;
    font-size: 28rpx;
    color: #666;
    border-bottom: 1rpx dashed #eee;
}
/* 下拉二级列表 */
.music_main_lists {
    width: 100%;
    padding-left: 30rpx;
    box-sizing: border-box;
}
/* .music_main_lists_zero {
    width: 100%;
    padding-left: 30rpx;
    box-sizing: border-box;
    height: 100%;
    transition: all 3s ease 0s;
} */
.music_main_list {
    width: 100%;
    height: 68rpx;
    line-height: 68rpx;
    font-size: 24rpx;
    color: #666;
    border-bottom: 1rpx solid #eee;
}
.music_main_list_img {
    width: 20rpx;
    height: 20rpx;
    padding: 26rpx;
    float: right;
}
/* 搜索 */
.music_search {
    width: 100%;
}
.music_search_header {
    position: fixed;
    top: 98rpx;
    left: 0;
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
}
.music_search_frame {
    width: 100%;
    height: 64rpx;
    font-size: 24rpx;
    box-sizing: border-box;
    background-color: #eee;
    border-radius: 6rpx;
}
.music_search_frame_img {
    width: 24rpx;
    height: 24rpx;
    padding: 20rpx;
    float: left;
}
.music_search_frame_input {
    height: 100%;
}
/* 搜索列表 */
.music_saerch_items {
    width: 100%;
    margin-top: 196rpx;
    margin-bottom: 98rpx;
}
.music_saerch_item {
    width: 100%;
    height: 90rpx;
    border-bottom: 1rpx solid #eee;
}
.music_saerch_item_img {
    float: left;
    width: 40rpx;
    height: 40rpx;
    padding: 20rpx;
}
.music_saerch_itemr {
    width: 80%;
    height: 90rpx;
    padding: 10rpx 0rpx;
    box-sizing: border-box;
    text-align: left;
    float: left;
}
.music_saerch_itemr_song_name {
    width: 100%;
    font-size: 30rpx;
}
.music_saerch_itemr_name {
    width: 100%;
    font-size: 24rpx;
    color: #aaa;
}
/* 完成 */
.music_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98rpx;
    line-height: 98rpx;
    text-align: center;
    background-color: #6ba5f7;
    color: #fff;
}
</style>

<template>
    <div class="music">
        <div class="music_header">
            <div :class="key == muid ? 'music_header_onitem' : 'music_header_item'" v-for="(item,key) in tabarr" :key="key" @click="musiclick(key)">
                {{item}}
            </div>
        </div>
        <div class="music_main" v-if="muid == 0">
            <div class="music_main_item" @click="wubeijing"> 无背景音乐</div>
            <div class="zhanweifu"></div>
            <div class="music_main_items">
                <!-- <div class="music_main_item" @click="songchoice(item.type,key)">{{item.name}}</div> -->
                <div class="music_main_item" @click="songchoice(0,0)">外语歌</div>
                <div class="music_main_item" @click="songchoice(1,1)">国语歌</div>
                <div class="music_main_lists">
                    <div class="music_main_list" v-for="(list,index) in lists" :key="index" @click="dianji(list.music_url,list.name,index)">
                        {{list.name}}
                        <img v-if="imgid == index" class="music_main_list_img" src="/static/img/yes.png" alt="">
                    </div>
                </div>
                <div class="zhanweifu"></div>
            </div>
        </div>
        <div class="music_search" v-if="muid == 1">
            <div class="music_search_header">
                <div class="music_search_frame">
                    <img class="music_search_frame_img" src="/static/img/sousuo.png" alt="">
                    <input class="music_search_frame_input" type='text' confirm-type="search" placeholder="搜索在线音乐" @input="Searchthesong" auto-focus/>
                </div>
            </div>
            <div class="music_saerch_items">
                <div class="music_saerch_item" v-for="(item,key) in songlists" :key="key" @click="musicplay(item.songid)">
                    <img class="music_saerch_item_img" src="/static/img/sousuo.png" alt="">
                    <div class="music_saerch_itemr" @click="dianji(item.song_id)">
                        <div class="music_saerch_itemr_song_name">{{item.songname}}</div>
                        <div class="music_saerch_itemr_name">{{item.songname}}</div>
                    </div>  
                    <img v-if="imgid == item.songid" class="music_main_list_img" src="/static/img/yes.png" alt="">
                </div>
            </div>
        </div>
        <div class="music_bottom" @click="complete">完成</div>
        <wk-loading ref="loading" :iconType="img"></wk-loading>
    </div>
</template>

<script>
import wkLoading from '@/components/loading'
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            musicarr:[],
            // 搜索用的列表
            songlists:[],
            tabarr:[
                '选择音乐'
            ],
            // 音乐列表
            lists:[],
            muid:0,
            // 列表id
            Songid: null,
            Songshow: false,
            // 组件需要
            img: require('../../../static/img/3.png'),
            // 音频
            innerAudioContext:null,
            // 禁止重复点击
            judid:null,
            // 选中音乐地址
            // 播放地址
            songsrc: '',
            songtitle: '',
            // 图片对勾
            imgid: null
        }
    },
    components: {
        wkLoading
    },
    mounted() {
        // this.$refs.loading.show()
        // this.musicapi()
    },
    computed: {
        ...mapState([
            'musicarr'
        ]),
    },
    methods:{
        ...mapActions([
            'setMusicarr'
        ]),
        // 完成
        complete () {
            if (this.innerAudioContext) {
                this.innerAudioContext.destroy()
            }
            this.Songid = null
            this.judid = null
            this.setMusicarr({
                name:this.songtitle,
                src:this.songsrc
            })
            wx.navigateBack({
                delta: 1
            })
        },
        // 搜索
        Searchthesong (e) {
            this.$refs.loading.show()
            this.songsearch (e.target.value)
        },
        // 音乐选择
        dianji (url,name,i) {
            // if (this.judid == id) {
            //     return
            // }else{
            //     this.judid = id
            //     this.musicplay(id)   
            // }
            this.imgid = i
            var _this = this
            _this.songsrc = 'http://back.wenzhang.xiaoniren.cn' + url
            _this.songtitle = name
            if (_this.innerAudioContext) {
                _this.innerAudioContext.destroy()
            }
            _this.innerAudioContext = wx.createInnerAudioContext()
            _this.innerAudioContext.autoplay = true
            _this.innerAudioContext.src = 'http://back.wenzhang.xiaoniren.cn' + url
            _this.innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            _this.innerAudioContext.onError((res) => {
                console.log(res.errMsg)
                console.log(res.errCode)
            })
            _this.innerAudioContext.onEnded((res) => {
                _this.judid = null
                console.log('播放完了')
            })
            console.log(this.url + url)
        },
        wubeijing () {
            this.songsrc = ''
            this.songtitle = ''
            if (this.innerAudioContext) {
                this.innerAudioContext.destroy()
            }
        },
        // tab选择
        musiclick (key) {
            this.muid = key
        },
        // 列表选择
        songchoice (type,key) {
            if (this.Songid != key) {
                this.$refs.loading.show()
                this.Songshow = true
                this.Songid = key
                this.lists = []
                this.songlist(type)
            }else {
                if (!this.Songshow) {
                    this.$refs.loading.show()
                }
                this.Songshow = !this.Songshow
                this.Songid = key
                this.lists = []
                this.songlist(type)
            }
        },
        // 音乐列表
        // musicapi () {
        //     var _this = this
        //     var opid = wx.getStorageSync('openid')
        //     this.$get('/restapi/music')
        //     .then(function (res) {
        //         if(res.success) {
        //             _this.$refs.loading.hide()
        //             _this.musicarr = res.data.items
        //         }else {
        //             wx.showToast({
        //                 title: '失败',
        //                 icon: 'success',
        //                 duration: 1000
        //             })
        //         }
        //     })
        //     .catch(function (res) {
        //         console.log(res)
        //     })
        // },
        // 列表请求
        // songlist (type) {
        //     var _this = this
        //     var opid = wx.getStorageSync('openid')
        //     this.$get('/restapi/music/songlist',{
        //         type:type,
        //         filter: 'title,song_id'
        //     })
        //     .then(function (res) {
        //         _this.$refs.loading.hide()
        //         if(res.success) {
        //             _this.lists = res.data.song_list
        //         }else {
        //             wx.showToast({
        //                 title: '失败',
        //                 icon: 'success',
        //                 duration: 1000
        //             })
        //         }
        //     })
        //     .catch(function (res) {
        //         console.log(res)
        //     })
        // },
        // 列表请求
        songlist (type) {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/article-music',{
                type:type
            })
            .then(function (res) {
                _this.$refs.loading.hide()
                console.log(res)
                if(res.success) {
                    _this.lists = res.data.items
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
        // 播放音乐/选中音乐
        musicplay (id) {
            this.imgid = id
            var _this = this
            this.$get('/restapi/music/play',{
                songid:id,
            })
            .then(function (res) {
                if(res.success) {
                    if (!res.data.bitrate) {
                        return wx.showToast({
                            title: '此歌曲暂时无法播放',
                            icon: 'none',
                            duration: 1000
                        })
                    }
                    _this.songsrc = res.data.bitrate.file_link
                    _this.songtitle = res.data.songinfo.title
                    if (_this.innerAudioContext) {
                        _this.innerAudioContext.destroy()
                    }
                    _this.innerAudioContext = wx.createInnerAudioContext()
                    _this.innerAudioContext.autoplay = true
                    _this.innerAudioContext.src = res.data.bitrate.file_link
                    _this.innerAudioContext.onPlay(() => {
                        console.log('开始播放')
                    })
                    _this.innerAudioContext.onError((res) => {
                        console.log(res.errMsg)
                        console.log(res.errCode)
                    })
                    _this.innerAudioContext.onEnded((res) => {
                        _this.judid = null
                        console.log('播放完了')
                    })
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
        // 搜索音乐
        songsearch (val) {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/music/search',{
                query: val
            })
            .then(function (res) {
                _this.$refs.loading.hide()
                if(res.success) {
                    console.log(res)
                    _this.songlists = res.data.song
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
    onUnload () {
        this.Songid = null
        this.judid = null
        if (this.innerAudioContext) {
            this.innerAudioContext.destroy()
        }
        // this.setMusicarr({})
    },
    onReachBottom(){

    },
}
</script>
