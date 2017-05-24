<template>
	<div>
		<v-header :seller='seller'></v-header>
		<div class="tab border-1px">
			<div class="tab-item" v-el='one-box'>
				<router-link to="/goods">商品2</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import header from './components/header/header';
	const ERR_OK = 0;

	export default {
		data() {
			return {
				seller: {}
			};
		},
		created() {
			this.$http.get('/api/seller').then((response) => {
				response = response.body;
				if (response.errno === ERR_OK) {
					this.seller = response.data;
					this.$nextTick(() => {
						console.log(this.$el);
					});
				}
			});
		},
		components: {
			'v-header': header
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "./common/stylus/mixin.styl";
	.tab {
		width: 100%;
		display: flex;
		height: 40px;
		line-height: 40px;
		border-1px(rgba(7, 17, 27, 0.1));
	}
	
	.tab .tab-item {
		flex: 1;
		text-align: center;
	}
	
	.tab .tab-item a {
		display: block;
		width: 100%;
		height: 100%;
		font-size: 14px;
		color: rgb(77, 85, 93);
	}
	
	.tab .tab-item a.active {
		color: rgb(240, 20, 20);
	}
</style>