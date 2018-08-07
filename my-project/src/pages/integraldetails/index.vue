<style>
.integraldetails {
    width: 100%;
    padding: 0rpx 30rpx;
    box-sizing: border-box;
}
.integraldetails_items {
    width: 100%;
}
.integraldetails_item {
    width: 100%;
    height: 123rpx;
    line-height: 123rpx;
    border-bottom: 1rpx solid #eee;
}
.il_item_img {
    width: 62rpx;
    height: 62rpx;
    padding: 30rpx 0rpx;
    float: left;
}
.il_item_cre {
    float: left;
    font-size: 30rpx;
    color: #666;
    margin-left: 55rpx;
}
.il_item_int {
    font-size: 40rpx;
    float: right;
    color: #de2222;
}
</style>

<template>
    <div class="integraldetails">
        <div class="integraldetails_items" v-if="loadingStatus && !abnorType">
            <div class="integraldetails_item" v-for="(item,key) in ilarr" :key="key">
                <img class="il_item_img"  src="/static/img/dsje.png" alt="">
                <div class="il_item_cre">{{item.create_time}}</div>
                <div class="il_item_int">￥{{item.integral}}</div>
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
            ilarr:[],
            //   组件需要
            loadingStatus: false,
            requestStatus: '',
            //   最大页数
            currentPage: 1,
            maxPage: 1,
            perPage: 10,
        }
    },
    components: {
        wkAbnor,
        wkLoading
    },
    mounted() {
        this.$refs.loading.show()
        this.Integrallist()
        this.currentPage = 1
        wx.setNavigationBarTitle({
            title: '积分详情'
        })
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
        // 积分列表
        Integrallist () {
            var _this = this
            var opid = wx.getStorageSync('openid')
            this.$get('/restapi/article-integral',{
                openid: opid,
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
                        _this.ilarr.push(res.data.items[i])
                    }
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
        this.currentPage++
        if(this.currentPage <= this.maxPage){
            this.$refs.loading.show()
            this.Integrallist()
        }
    },
}
</script>
