<template>
	<div class="main">
		<!--<div class="banner">-->
			<!--轮播-->
			<!--<div class="ban-list">
				<div class="ban-img-list t-c">
					<img :src="item.smallImgUrl" v-for="item,index in mainData.data.banners"/>
				</div>
				<div class="ban-btn">
					<span :class="{'active':index == itemIndex}" @click="tabIndex(index)" v-for="item,index in mainData.data.banners"></span>
				</div>
			</div>
		</div>
		<div class="f0 bg-w pading-tb-10">
			<div class="box-col box-25 img-size">
				<img src="../assets/img/icon_super_lottery.png" alt="" />
			</div>
			<div class="box-col box-75 main-list-fs">
				<p>大乐透</p>
				<ul class="f0">
					<li class="ballRad">19</li>
					<li class="ballRad">19</li>
					<li class="ballRad">19</li>
					<li class="ballRad">19</li>
					<li class="ballRad">19</li>
					<li class="ballBule">19</li>
					<li class="ballBule">19</li>
				</ul>
				<div class="m-btn-span">
					<span class="ram-five">随机5注</span><span class="imm-bet">立即投注</span><span class="refresh">刷新</span>
				</div>
			</div>
		</div>
		<div class="title">
            <h2 class="title-text"><span>热门彩种</span></h2>
        </div>
		<ul class="mune-list f0">-->
			<!--<li class="f0 bg-w box-col">
				<div class="box-col box-30 mune-list-img v-a-m">
					<img src="../assets/img/icon_zuqiu.png"/>
				</div>
				<div class="box-col box-70 mune-list-txt v-a-m">
					<h3>竞彩足球</h3>
					<p>迎接世界杯中大奖</p>
				</div>
			</li>-->
			<!--<li class="f0 bg-w box-col" v-if="item.bannerCopy !== '暂停销售'" 
				v-for="item,index in mainData.data.types">
				<div class="box-col box-30 mune-list-img v-a-m">
					<img src="../assets/img/icon_zuqiu.png"/>
				</div>
				<div class="box-col box-70 mune-list-txt v-a-m">
					<h3 >{{item.lotteryName}}</h3>
					<p>{{item.bannerCopy}}</p>
				</div>
			</li>
		</ul>
		<footer-nav></footer-nav>-->
		<p :sport-list="initMain">{{initMain}}</p>
	</div>
	
</template>

<script>
import footerNav from '@/components/footerNav'
//import mainData from '@/lib/maindata'
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			itemIndex : 0,
			mainData
		}
	},
	components: {
		footerNav
	},
	created (){
		this.$store.dispatch('getInitMain')
	},
	methods: {
		//获取主要数据
//		HelloAxios () {
//			this.$http.get('http://47.96.11.64:8080/api/home').then((m) => {console.log(m.data)})
//		}
		tabIndex (index) {
			this.itemIndex = index
		}
	},
	computed: {
		...mapGetters([
			'initMain'
		])
	}
	
}
</script>

<style lang="less" scoped>
	@import '../assets/css/main.less';
	.main{
		.fs(16);
		.main-list-fs{
			.fs(16);
			.pl(20);
		}
		.img-size img{
			.w(80);
			.h(80);
		}
		.main-list-fs ul{
			.pad-t-b(5);
		}
		.main-list-fs ul li{
			display: inline-block;
			font-style: normal;
		    border-radius: 50%;
		    padding: 5px 4px;
		    line-height: 100%;
		    .fs(16);
		    .mar-l-r(2);
		}
		.main-list-fs .ballRad{
			background: #e33837;
			color: #fff;
		}
		.main-list-fs .ballBule{
			background: #0375cc;
			color: #fff;
		}
		.m-btn-span span{
			display: inline-block;
			.pad-t-b(5);
			.pad-l-r(5);
			border: 1px solid #e3e3e3;
			border-radius: 3px;
			color: #333;
			
		}
		.m-btn-span .imm-bet{
			background: #E33837;
			color: #FFFFFF;
			border-color: #E33837;
			.mar-l-r(10);
		}
		.mune-list{}
		.mune-list li{
	        overflow: hidden;
		    display: inline-block;
		    width: 48%;
		    background: #FFF;
		    margin: .1rem;
		}
		.mune-list-img img{
			.w(60);
			.h(60);
		}
		.mune-list-txt{
			.fs(14);
			.pl(5)
		}
		.mune-list-txt h3{
			margin: 0;
		}
		.mune-list-txt p{
			.fs(12);
			color: #999;
		}
		.ban-list{
			position: relative;
		}
		.ban-btn{
			position: absolute;
			left: 50%;
			margin-left: -27px;
    		bottom: 2%;
		}
		.ban-btn span{
			display: inline-block;
			background: #c5c5c6;
			border-radius: 50%;
			width: 10px;
			height: 10px;
			
		}
		.ban-btn .active{
			background: #0079fe;
		}
	}
	.title-text{
		margin: 0;
	}
	.title-text span {
	    display: block;      /*设置为块级元素会独占一行形成上下居中的效果*/
	    position: relative;  /*定位横线（当横线的父元素）*/
		.fs(14);
	    text-align: center; 
	}
	.title-text span:before, .title-text span:after { 
	    content: ''; 
	    position: absolute;   /*定位背景横线的位置*/
	    top: 50%; 
	    background: #8c8c8c;   /*背景横线颜色*/
	    width: 35%;            /*单侧横线的长度*/
	    height: 1px; 
	} 
	.title-text span:before { 
	    left: 2%;              /*调整背景横线的左右距离*/
	} 
	.title-text span:after { 
	    right: 2%; 
	}
	.hide{
		display: none;
	}
</style>