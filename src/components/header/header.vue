<template>
	<div class="header">
		<div class="avatar">
			<img width="64" height="64" :src="seller.avatar"/>
		</div>
		<div class="content">
			<div class="title">
	          <span class="brand"></span>
	          <span class="name">{{seller.name}}</span>
	        </div>
	        <div class="description">
         	 {{seller.description}}/{{seller.deliveryTime}}分钟送达
       		</div>
       		<div v-if="seller.supports" class="support">
	          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
	          <span class="text">{{seller.supports[0].description}}</span>
	        </div>
		</div>
		<div v-if="seller.supports" class="supports-count" @click="showDetail">
        	<span class="count">{{seller.supports.length}}个</span>
        	<span class="icon-jian"></span>
      	</div>
      	<transition name="fade">
      		<div class="detail" v-show='detailShow'>
      			<div class="detail_wrapper">
      				<div class="detail_main">
      					<star :size='48' :score="seller.score"></star>
      				</div>
      			</div>
      			<div class="detail_close" @click="hideDetail">
      				<i class="icon-jia"></i>
      			</div>
      		</div>
      	</transition>
	</div>
</template>

<script type="text/ecmascript-6">
	import star from '../star/star.vue';
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			};
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		},
		methods: {
			showDetail() {
				this.detailShow = true;
			},
			hideDetail() {
				this.detailShow = false;
			}
		},
		components: {
	      star
	    }
	};
</script>

<style>
	.header{
		font-size: 14px;
		display: flex;
		background-color: #000;
		color: #fff;
		position: relative;
		padding: 24px 12px 18px 24px;
	}
	.header .supports-count{
		position: absolute;
		right: 12px;
		bottom: 20px;
		background-color: #ccc;
		border-radius: 14px;
		padding: 8px;
	}
	.header .detail{
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: hidden;
		top: 0;
		left: 0;
		background: rgba(7,17,27,0.8);
	}
	.header .detail.fade-enter-active{
		animation: bounce-in 0.5s;
	}
	.header .detail.fade-leave-active{
		animation: bounce-out 0.5s;
	}
	@keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
</style>