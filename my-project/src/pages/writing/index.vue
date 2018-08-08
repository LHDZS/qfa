<style>
body {
    height: 100%;
}
.writing {
    width: 100%;
    height: 100%;
}
.writing_div {
    width: 100%;
    height: 400rpx;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
}
.writing_input {
    width: 100%;
    font-size: 30rpx;
    color: #999;
}
.writing_footer {
    width: 100%;
    height: calc(100% - 400rpx);
    background-color: #eee;
    padding: 30rpx;
    box-sizing: border-box;
}
.writing_footer_num {
    font-size: 26rpx;
    color: #ccc;
}
/* 完成 */
.writing_achieve {
    position: fixed;
    left: 0;
    width: 100%;
    height: 80rpx;
    padding-left: 20rpx;
    line-height: 80rpx;
    text-align: left;
    font-size: 30rpx;
    background-color: #fff;
    box-sizing: border-box;
    color: #58ad68;
}
</style>

<template>
    <div class="writing">
        <div class="writing_div">
            <textarea class="writing_input" placeholder="输入文章标题" maxlength="50" :value="inputs" @focus="jujiao" :show-confirm-bar="bar" @blur="shijiao" @input="textinput"></textarea>
        </div>
        <div class="writing_footer">
            <div class="writing_footer_num">{{num}}/50</div>
        </div>
        <div class="writing_achieve" :style="{bottom: bot + 'px'}" v-if="achieve">
            <div @click="accomplish()">完成</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            // 完成吊起
            achieve: false,
            // bottom
            bot:0,
            // 0
            num:0,
            inputs:'',
            bar: false
        }
    },
    watch: {

    },
    components: {
        
    },
    mounted() {
        if (this.textarea != '') {
            return this.inputs = this.textarea
        }
        this.inputs = ''
    },
    computed: {
        ...mapState([
            'textarea'
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
            'setTextarea'
        ]),
        // 完成
        accomplish() {
            this.setTextarea(this.inputs)
            wx.navigateBack({
                delta: 1
            })
            // this.$router.replace({ path: '/pages/redact/main', query: { value: this.inputs } })
        },
        // 键盘聚焦
        jujiao (e) {
            this.bot = e.target.height + 50 || 0
            this.achieve = true
        },
        // 键盘失焦
        shijiao(e) {
            this.achieve = false
        },
        // 
        textinput (e) {
            this.num = e.target.cursor
            this.inputs = e.target.value
        }
        
    },
    onUnload () {
        // this.inputs = this.inputs
        // this.setTextarea('')
    },
    onReachBottom(){

    },
}
</script>
