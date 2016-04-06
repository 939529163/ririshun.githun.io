$(function () {
	var $imgList = $('.imgList')// 图片列表
	
	// 调用函数carousel
	carousel($imgList,400)
})


function carousel ($imgList, li_width) {
	var num = 400// 位置初始值
	var $first_li = $imgList.find('li:first-child').clone()// 克隆第一个li
	var $last_li  = $imgList.find("li:last-child").clone()// 克隆第二个li
	
	//  将第一个克隆li插入到最后li后面
	$imgList.append($first_li)
	// 将最后一个li克隆插入到第一个li前
	$imgList.prepend($last_li)
	
	// 将初始位置左移
	$imgList.offset({
		left: -num
	})

	// 定时器
	// 触发时间1s
	 setInterval(function (){
		if (num<2000) {
			num = num + li_width// 位置改变量
		}
		else{
			num = li_width
		}

		// 位置向左移动
		$imgList.offset({
			left: -num
		})
	}, 1000)
}