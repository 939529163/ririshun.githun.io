$(function () {
	var $img_list = $('.imgList')// 图片列表
	var $first_li = $img_list.find('li:first-child')// 定义首项图片
	var li_width = $first_li.outerWidth()//列表宽度
	var $prev = $('.prev')//定义左箭头
	var $next = $('.next')//定义右箭头
	var th //定义一个变量
	var li_num = $img_list.find('li').length//li

	//左箭头添加事件
	$prev.on('click',function(e){
		e.preventDefault()//阻止默认
		e.stopPropagation()//阻止向父辈传递

		var $last_li = $img_list.find('li:last-child')//定义循环内最后一项
		var left = parseInt($img_list.css('left'))//定义往左

		//阻止动画
		if (left == 0) {
			$img_list.prepend($last_li).css({
				'left':-li_width + 'px'
			}).stop(true,true).animate({ 'left': 0 + 'px'},500)
		}
		else {
			$img_list.stop(true,false).animate({ 'left': 0 +'px'},500,function(){
				$img_list.prepend($last_li).css({
					'left':-li_width + 'px'
				})	
			})
		}
	})

	//右箭头添加事件
	$next.on('click',function(e){
		e.preventDefault()//
		e.stopPropagation()//

		var $first_li = $img_list.find('li:first-child')//
		var left = parseInt($img_list.css('left'))//

		if (left == -li_width){
			$img_list.append($first_li).css({
				'left': 0 + 'px'
			}).stop(true,true).animate({'left': -li_width + 'px'},500)
		}
		else{
			$img_list.stop(true,false).animate({'left': -li_width + 'px'},500,function(){
				$img_list.append($first_li).css({
					'left': 0 + 'px'
				})
			})
		}

	})

	//触发定时器
	function loop(){
		th = setInterval(function(){
			$next.click()
			console.log('aaa')
		},3000)
	}	

	if (li_num>5) {
		loop()
	}
	// body...
})
