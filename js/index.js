$(function () {
	var $img_list = $('.imgList')
	var $first_li = $img_list.find('li:first-child')
	var li_width = $first_li.outerWidth()
	var $prev = $('.prev')
	var $next = $('.next')
	var th 
	var li_num = $img_list.find('li').length

	$prev.on('click',function(e){
		e.preventDefault()
		e.stopPropagation()

		var $last_li = $img_list.find('li:last-child')
		var left = parseInt($img_list.css('left'))

		if (left == 0) {
			$img_list.prepend($last_li).css({
				'left':-li_width + 'px'
			}).stop(true,true).animate({ left: 0},500)
		}
		else {
			$img_list.stop(true,false).animate({ left: 0},500,function(){
				$img_list.prepend($last_li).css({
					'left':-li_width + 'px'
				})	
			})
		}
	})

	$next.on('click',function(e){
		e.preventDefault()
		e.stopPropagation()

		var $first_li = $img_list.find('li:first-child')
		var left = parseInt($img_list.css('left'))

		if (left == -li_width){
			$img_list.append(first_li).css({
				'left': 0 + 'px'
			}).stop(true,true).animate({left: -li_width + 'px'},500)
		}
		else{
			$img_list.stop(true,false).animate({left: -li_width + 'px'},500,function(){
				$img_list.append($first_li).css({
					'left': 0 + 'px'
				})
			})
		}

	})

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