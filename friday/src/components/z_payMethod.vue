<template>
	<div class="z_payMoney">
		<!-- 订单提交成功内容  -->
		<div class="y_paycont">
			<div class="y_paycont_sign">
				<img src="../pages/index/assets/image/y_successpage.png" height="78" width="78">
			</div>
			<h3 class="y_pay_text">订单已提交,请于24小时内完成支付<span>(逾期订单将被取消)</span></h3>
			<!-- 订单提交成功地址 -->
			<div class="y_paysuc_address">

			</div>
			<h4 class="y_pay_price">应付金额 : <span class="price">165.90元</span>(在线支付)<span class="number">订单编号:425954156947</span></h4>
			<h4 class="y_pay_title">支付平台</h4>
			<ul class="y_pay_list">
				<!-- 支付宝 -->
				<li class="y_alipay">
					<input @click="alipay()" type="radio" name="pay" checked="checked">
					<span></span>
				</li>
				<!-- 微信 -->
				<li>
					<input @click="wechat()" type="radio" name="pay">
					<span></span>
					
				</li>
				<li>
					<input type="radio" name="pay">
					<span></span>
				</li>
				<li>
					<input type="radio" name="pay">
					<span>余额支付(¥500)</span>
				</li>
			</ul>
			<!-- 支付方式 -->
			<div class="y_paytype_list">
				<!-- 支付宝 -->
				<div class="y_pay_show y_pay_alipay" v-if="bole">
					<div class="left">
						<h4>使用电脑支付</h4>
						<img src="../pages/index/assets/image/y_alipay_logo.png">
						<router-link to="/Ksuccess">立即支付</router-link>
					</div>
					<div class="center"></div>
					<div class="right">
						<h4>使用支付宝扫一扫付款</h4>
						<img src="../pages/index/assets/image/y_alipay_erweima.png" height="217" width="216">
					</div>
				</div>
				<div class="y_pay_show y_pay_wechat" v-if="bol">
					<div class="left">
						<img src="../pages/index/assets/image/y_wechat_logo.png" height="326" width="314">
					</div>
					<div class="center"></div>
					<div class="right">
						<h4>使用微信扫一扫</h4>
						<img src="../pages/index/assets/image/y_wechat_erweima.png" height="217" width="216">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "yordersubmit",
		data() {
			return {
				bol: false,
				bole: true
			}
		},
		methods: {
			alipay: function() {
				this.bol =false;
				this.bole = true;
			},
			wechat: function() {
				this.bol = true;
				this.bole = false;
			}
		}
	}
</script>

<style>
	.z_payMoney{
		width: 100%;
		height: 880px;
	}
	.y_paycont {
		width: 1280px;
		height: 880px;
		margin: 0 auto;
	}
	
	.y_paycont_sign {
		margin: 30px 0 30px 0;
		text-align: center;
	}
	
	.y_pay_price {
		margin: 20px 0;
		color: #666;
	}
	
	.y_pay_price .price {
		margin: 0 10px;
		font-size: 20px;
		color: #D20A11;
	}
	
	.y_pay_price .number {
		float: right;
		font-size: 14px;
		color: #666;
	}
	.y_pay_text{
		text-align: center;
		margin-bottom: 30px;
	}
	.y_pay_text span {
		color: #F08200;
		
	}
	
	.y_paysuc_address {
		height: 40px;
		line-height: 40px;
		margin-top: 20px;
		padding-left: 40px;
		border: solid 1px #ddd;
		background: url(../pages/index/assets/image/y_location.png) no-repeat 15px center #F4FFF2;
		color: #666;
	}
	
	.y_pay_title {
		padding-bottom: 20px;
		color: #666;
		border-bottom: solid 1px #ddd;
	}
	
	.y_pay_list {
		margin: 20px 0;
		overflow: hidden;
	}
	
	.y_pay_list li {
		float: left;
		line-height: 30px;
		margin-right: 30px;
	}
	
	.y_pay_list li input {
		vertical-align: 12px;
		margin-right: 10px;
	}
	
	.y_pay_list li:nth-child(1) span {
		display: inline-block;
		width: 130px;
		height: 40px;
		background: url(../pages/index/assets/image/y_alipay.png) no-repeat center center;
		border: solid 1px #ddd;
	}
	
	.y_pay_list li:nth-child(2) span {
		display: inline-block;
		width: 130px;
		height: 40px;
		background: url(../pages/index/assets/image/y_wechatpay.png) no-repeat center center;
		border: solid 1px #ddd;
	}
	
	.y_pay_list li:nth-child(3) span {
		display: inline-block;
		width: 130px;
		height: 40px;
		background: url(../pages/index/assets/image/y_unionpay.png) no-repeat center center;
		border: solid 1px #ddd;
	}
	
	.y_pay_list li:nth-child(4) input {
		vertical-align: 0;
	}
	
	.y_pay_list li:nth-child(4) span {
		display: inline-block;
		height: 40px;
		padding-left: 50px;
		background: url(../pages/index/assets/image/y_balancepay.png) no-repeat 10px center;
		border: solid 1px #ddd;
	}
	
	.y_pay_show {
		margin-bottom: 40px;
		padding: 60px 250px;
		border: solid 1px #ddd;
		overflow: hidden;
		color: #666;
	}
	/* .y_pay_alipay{
		display: none;
	} */
	
	.y_pay_alipay .left,
	.y_pay_wechat .left {
		float: left;
		width: 375px;
		text-align: center;
	}
	
	.y_pay_show .left img {
		margin: 20px auto;
		display: block;
	}
	
	.y_pay_alipay .left a {
		display: inline-block;
		width: 150px;
		margin: 0 10px;
		line-height: 40px;
		background-color: #F08200;
		border-radius: 5px;
		color: #fff;
		font-size: 20px;
		text-align: center;
	}
	
	.y_pay_alipay .center {
		border-left: solid 1px #ddd;
		height: 300px;
		float: left;
		width: 20px;
		text-align: center;
		line-height: 280px;
	}
	
	.y_pay_show .right {
		float: right;
		width: 375px;
		text-align: center;
	}
	
	.y_pay_show .right img {
		width: 220px;
		height: 220px;
		margin: 40px auto 0;
	}
	
	.y_pay_wechat .left img {
		margin: auto;
	}
	
	.y_pay_wechat .center {
		border-left: solid 1px #ddd;
		height: 300px;
		float: left;
		width: 20px;
		text-align: center;
		line-height: 280px;
	}
</style>