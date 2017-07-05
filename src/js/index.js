$(function(){
	/*轮播*/
		var liWidth = parseInt($('.lunbo li').width());
		console.log(liWidth);
		var ulWidth = parseInt($('.lunbo').width());
		console.log(ulWidth);
		console.log(ulWidth-liWidth)
		var target=null;
		var header=null;
		$('.focus-left').click(function(event) {
			target += liWidth;
			console.log(target);
		
		});
		console.log(target)
		$('.focus-right').click(function(event) {	
			target -= liWidth;
			console.log(target)
			
		});
		var timer = setInterval(function(){
				if(target>0){
					target = -(ulWidth-liWidth);
				}else if(target < -(ulWidth-liWidth)){
					target = 0;   
				}
				header=header+(target-header)/10;
				$('.lunbo').css('left', header + 'px');
		},30)
		/*新闻*/
		var newsList =[
			{
				title:'2017年泰国国际工程机械展... ',
				time:'[2017-05-26]'
			},
			{
				title:'服务创造价值——ZENITH“品质中...',
				time:'[2017-05-26]'
			},
			{
				title:'ZENITH将参加越南国际矿业展（CONT... ',
				time:'[2017-05-26]'
			},
			{
				title:'2017中国进出口商品交易会(121届...',
				time:'[2017-05-26]'
			},
			{
				title:'上海西芝：煤粉制备成套生产线配置...',
				time:'[2017-05-26]'
			},
			{
				title:'上海西芝：煤粉生产线如何防止火灾...',
				time:'[2017-05-26]'
			},
			{
				title:'K系列移动破碎站应用于建筑垃圾...',
				time:'[2017-05-26]'
			}

		]
		for(var i=0;i<newsList.length;i++){
			var $new = createli();
			$('#box').append($new);
			$('#box').find('li').eq(i).find('a').html(newsList[i].title);
			$('#box').find('li').eq(i).find('span').html(newsList[i].time);

		}
		function createli(){
			var str = '';
			str += '<li><a href="#" class="left"></a><span class="right"></span></li>';
			return $(str);
		}
		  
		
		

})
	
				

