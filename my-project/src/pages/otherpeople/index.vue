<style>
.mine {
    width: 100%;
}
.mine_header {
    width: 100%;
    height: 486rpx;
}
.mine_header_img {
    width: 100%;
    height: 9rpx;
}
.mine_images {
    width: 100%;
    height: 100%;
    display: block;
}
.mine_header_content {
    width: 100%;
    height: 478rpx;
    padding-top: 45rpx;
    box-sizing: border-box;
    position: relative;
}
.mine_header_content_service {
    width: 95rpx;
    height: 40rpx;
    line-height: 40rpx;
    text-align: left;
    padding: 0rpx;
    border-radius: 20rpx;
    position: absolute;
    top: 48rpx;
    right: 30rpx;
    color: #fff;
    background-color: #3f414e;
    font-size: 22rpx;
}
.mine_header_content_service_img {
    width: 25rpx;
    height: 26rpx;
    padding: 8rpx 8rpx 0rpx 10rpx;
    float: left;
}
.mine_header_content_portrait {
    width: 131rpx;
    height: 130rpx;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
.mine_header_content_name {
    width: 100%;
    margin-top: 33rpx;
    font-size: 36rpx;
    text-align: center;
}
.mine_header_content_your {
    width: 100%;
    height: 55rpx;
    line-height: 55rpx;
    text-align: center;
    font-size: 28rpx;
    color: #999;
}
.mine_header_content_data {
    width: 100%;
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
    font-size: 24rpx;
    color: #999;
}
.mine_header_content_share {
    width: 300rpx;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 24rpx;
    margin: 0 auto;
    margin-top: 20rpx;
}
.mine_header_content_share_iteml {
    float: left;
    width: 120rpx;
    height: 60rpx;
    text-align: center;
    border-radius: 40rpx;
}
.mine_header_content_share_itemr {
    float: right;
    width: 120rpx;
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    background-color: #64b373;
    color: #fff;
    border-radius: 40rpx;
}
.mine_menu_header_inner {
    width: 90%;
    height: 80rpx;
    line-height: 80rpx;
    margin: 0 auto;
    border-bottom: 1rpx solid #eaeaea;
}
.mine_menu_header_img {
    float: left;
    width: 40rpx;
    height: 40rpx;
    padding: 20rpx;
    padding-left: 0rpx;
}
.mine_menu_header_name {
    float: left;
    font-size: 28rpx;
}
/* 创作 */
.mine_content {
    width: 100%;
}
.mine_menu_current {
    width: 100%;
    padding: 0rpx 30rpx;
    box-sizing: border-box;
}
.mine_menu_current_name {
    width: 100%;
    min-height: 85rpx;
    padding-top: 28rpx;
    font-size: 26rpx;
    box-sizing: border-box;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    color: #666;
}
.mine_menu_current_img {
    width: 100%;
    height: 300rpx;
    background-position: center center;
    background-size: cover;
}
.mine_menu_date {
    width: 100%;
    height: 82rpx;
    line-height: 82rpx;
}
.mine_menu_date_date {
    float: left;
    font-size: 26rpx;
    color: #999;
}
.mine_menu_date_day {
    float: right;
    font-size: 26rpx;
    color: #999;
    margin-left: 35rpx;
}
/* 会员 */
.mine_member {
    width: 108rpx;
    height: 108rpx;
    line-height: 135rpx;
    border-radius: 50%;
    background-color: #323333;
    position: fixed;
    bottom: 225rpx;
    right: 0;
    text-align: center;
}
.mine_member_img {
    width: 60rpx;
    height: 60rpx;
}
</style>

<template>
    <div class="mine">
        <div class="mine_header">
            <div class="mine_header_img"><img class="mine_images" src="/static/img/bowen.png" alt=""></div>
            <div class="mine_header_content">
                    <button open-type="contact" class="mine_header_content_service">
                        <img class="mine_header_content_service_img" src="/static/img/kefu.png" alt="">
                        客服
                    </button>
                <div class="mine_header_content_portrait">
                    <img class="images" :src="myself.touxiang" alt="">
                    <!-- <open-data class="images" type="userAvatarUrl"></open-data> -->
                </div>
                <div class="mine_header_content_name">
                    <div>{{myself.nickname}}</div>
                    <!-- <open-data type="userNickName" open-gid="xxxxxx"></open-data> -->
                </div>
                <div class="mine_header_content_your">关注 {{myself.attention}} | 粉丝 {{myself.fans}}</div>
                <div class="mine_header_content_data">创作{{myself.essay_quantity}}篇文章，发表{{myself.img_quantity}}张照片，被访问{{myself.visits_quantity}}次</div>
                
                <div class="mine_header_content_share">
                    <div class="mine_header_content_share_iteml" @click="dotattention(myself.openid)" :style="{backgroundColor:attnf[myself.g_type ? myself.g_type : 0].bgc,color:attnf[myself.g_type ? myself.g_type : 0].color}">{{attnf[myself.g_type ? myself.g_type : 0].name}}</div>
                    <button class='mine_header_content_share_itemr' open-type="share">分享</button>
                    <!-- <div class="mine_header_content_share_itemr">分享</div> -->
                </div>
            </div>
        </div>
        <div class="zhanweifu"></div>
        <div class="mine_content">
            <div class="mine_menu_header">
                <div class="mine_menu_header_inner">
                    <img class="mine_menu_header_img" src="/static/img/CZ.png" alt="">
                    <div class="mine_menu_header_name">创作记录</div>
                </div>
            </div>
            <div class="mine_menu_current" v-for="(item,key) in myself.article" :key="key" @click="particularapi(item.id)">
                <div class="mine_menu_current_name">{{item.title}}</div>
                <div class="mine_menu_current_img" :style="{ 'background-image': 'url('+ http + item.bgimage +')'}"></div>
                <div class="mine_menu_date">
                    <div class="mine_menu_date_date">{{item.create_time}}</div>
                    <div class="mine_menu_date_day">{{item.zan}}人点赞</div>
                    <div class="mine_menu_date_day">{{item.read_quantity}}人阅读</div>
                </div>
            </div>
            <div class="zhanweifu"></div>
        </div>
        <!-- <div class="mine_member" @click="clubcard">
            <img class="mine_member_img" src="/static/img/hyk.png" alt="">
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            attnf:[
                {
                  name:'关注+',
                  color:'#fff',
                  bgc:'#64b373'
                },
                {
                  name:'已关注',
                  color:'#999',
                  bgc:'#eee'
                }
            ],
            artarr:[
                
            ],
            myself:{},
            http:''
        }
    },
    components: {
        
    },

    mounted() {
        
        // wx.setStorageSync('pShow','')
        // this.artarr = wx.getStorageSync('artarr') || []
        // this.personage()
    },
    onShow () {
        this.http = this.url
        this.personage()
        // this.artarr = wx.getStorageSync('artarr') || []
        
    },
    computed: {
        
    },
    methods:{
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
                    _this.myself.g_type = res.data.data.g_type
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
        // 会员卡
        clubcard () {
            const url = '../clubcard/main'
            wx.navigateTo({ url })
        },
        // 内容详情
        particular (key) {
            const url = '../Personaldetails/main?key=' + key
            wx.navigateTo({ url })
        },
        particularapi (id) {
            const url = '../indexitem/main?id=' + id
            wx.navigateTo({ url })
        },
        // 打赏详情
        exceptionaldetails () {
            const url = '../exceptionaldetails/main'
            wx.navigateTo({ url })
        },
        // 积分详情
        integraldetails () {
            const url = '../integraldetails/main'
            wx.navigateTo({ url })
        },
        // 兑换
        conversion () {
            const url = '../conversion/main'
            wx.navigateTo({ url })
        },
        drawings () {
            const url = '../drawings/main'
            wx.navigateTo({ url })
        },
        // 个人信息获取
        personage () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/userinfo/select',{
                openid: this.$mp.query.opid,
                use_openid: opid
            })
            .then(function (res) {
                if(res.success) {
                    _this.myself = res.data
                    console.log(res)
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
    onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享',
      path: '/otherpeople/main',
      success: function(res) {
        var opid = wx.getStorageSync('openid')
        _this.$post('/restapi/article-integral/create',{
            openid: opid,
        })
        .then(function (res) {
            wx.showToast({
                title: res.data.msg,
                icon: 'success',
                duration: 2000
            })
        })
        .catch(function (res) {
            console.log(res)
        })
     },
     fail: function(res) {
        console.log('转发失败')
     }
    }
  }

}
</script>