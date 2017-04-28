<template>
  <div>
  	<v-header></v-header>
  	<div class="content border-1px">
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
  	<router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header';

export default {
  components: {
		'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "./common/stylus/mixin.styl";
	.content{
		width:100%;
		display:flex;
		height: 40px;
		line-height: 40px;
		border-1px(rgba(7,17,27,0.1));
	}
	.content .tab-item{
		flex:1;
		text-align: center;
	}
	.content .tab-item a{
		display: block;
		width: 100%;
		height: 100%;
		font-size: 14px;
		color: rgb(77,85,93);
	}
	.content .tab-item a.active{
		color: rgb(240,20,20);
	}
</style>
