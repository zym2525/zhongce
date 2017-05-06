<template>
	<div class="goods">
		<div class="menu-wrapper">
		</div>
		<div class="goods-wrapper">
			<div class="mui-slider">
			  <div class="mui-slider-group mui-slider-loop">
			  	<div class="mui-slider-item mui-slider-item-duplicate"><a href=""><img :src="invoice" /></a></div>
			    <div class="mui-slider-item"><a href=""><img :src="decrease" /></a></div>
			    <div class="mui-slider-item"><a href=""><img :src="discount" /></a></div>
			    <div class="mui-slider-item"><a href=""><img :src="guarantee" /></a></div>
			    <div class="mui-slider-item"><a href=""><img :src="invoice" /></a></div>
			    <div class="mui-slider-item mui-slider-item-duplicate"><a href=""><img :src="decrease" /></a></div>
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	import decrease from './decrease_3@2x.png';
	import discount from './discount_3@2x.png';
	import guarantee from './guarantee_3@2x.png';
	import invoice from './invoice_3@2x.png';
	
	export default {
		data() {
			return {
				decrease: decrease,
				discount: discount,
				guarantee: guarantee,
				invoice: invoice
			};
		},
		mounted() {
			var gallery = this.mui('.mui-slider');
			gallery.slider({interval: 100});
		}
	};
</script>

<style>
	.goods{
		position: absolute;
		width: 100%;
		top: 148px;
		bottom: 46px;
		display: flex;
	}
	.goods .menu-wrapper{
		width: 80px;
		background: #f3f5f7;
		display: flex;
		flex-direction: column;
	}
	.goods .goods-wrapper{
		flex: 1;
	}
	.mui-slider .mui-slider-group .mui-slider-item img{
		width: 24px;
	}
</style>