<template>
    <div id="app">

        <Head :seller=seller></Head>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view>s</router-view>
    </div>
</template>

<script>
    import Head from './components/head/Head.vue';
    const ERROR_NO = 0;
    export default {
        data() {
            return {
                seller: {}
            };
        },
        components: {
            Head
        },
        created() {
            this.$http.get('/api/seller').then(response => {
                response = response.body;
                if (response.errno === ERROR_NO) {
                    this.seller = response.data;
                }
            });
        }
    };
</script>

<style lang="stylus" ref=stylessht/stylus>
    @import './common/stylus/mixin.styl'
    #app
        .tab
            display flex
            width 100%
            height 40px
            line-height 40px
            border-1px(rgba(7, 17, 27, 0.1))
            .tab-item
                flex 1
                text-align center
                & > a
                    display block
                    font-size 14px
                    color rgb(77, 85, 93)
                    &.active
                        color rgb(240, 20, 20)
</style>
