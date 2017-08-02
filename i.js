var controlPic = {
	zoomPic:function(a,b,c){
		var thisWidth,thisHeight,imgLeft,imgTop;
		var imgWidth = a;
		var imgHeight = b;
		var imgBlock = c;
		$(imgBlock).each(function(){
			thisWidth = $(this).find('img').width();
			thisHeight = $(this).find('img').height();
			if(thisWidth > imgWidth && thisHeight > imgHeight){//如果宽，高都大
				if(thisWidth/imgWidth > thisHeight/imgHeight){
					imgLeft =  -((thisWidth / (thisHeight/imgHeight) - imgWidth) / 2);
					$(this).find('img').css('height',imgHeight);
					$(this).find('img').css('left',imgLeft);
				}else{
					imgTop =  -((thisHeight / (thisWidth/imgWidth) - imgHeight) / 2);	
					$(this).find('img').css('width',imgWidth);
					$(this).find('img').css('top',imgTop);
				}
			}else if(thisWidth < imgWidth && thisHeight < imgHeight){//如果宽，高都小
				if(thisWidth/imgWidth > thisHeight/imgHeight){
					imgLeft =  -((thisWidth / (thisHeight/imgHeight) - imgWidth) / 2);
					$(this).find('img').css('height',imgHeight);
					$(this).find('img').css('left',imgLeft);
				}else{
					imgTop =  -((thisHeight / (thisWidth/imgWidth) - imgHeight) / 2);	
					$(this).find('img').css('width',imgWidth);
					$(this).find('img').css('top',imgTop);
				}	
			}else if(thisWidth >= imgWidth && thisHeight < imgHeight){//如果宽等 大，高小
				if(thisWidth/imgWidth > thisHeight/imgHeight){
					imgLeft =  -((thisWidth / (thisHeight/imgHeight) - imgWidth) / 2);
					$(this).find('img').css('height',imgHeight);
					$(this).find('img').css('left',imgLeft);
				}else{
					imgTop =  -((thisHeight / (thisWidth/imgWidth) - imgHeight) / 2);	
					$(this).find('img').css('width',imgWidth);
					$(this).find('img').css('top',imgTop);
				}	
			}else if(thisWidth < imgWidth && thisHeight >= imgHeight){//如果高等 大，宽小
				if(thisWidth/imgWidth > thisHeight/imgHeight){
					imgLeft =  -((thisWidth / (thisHeight/imgHeight) - imgWidth) / 2);
					$(this).find('img').css('height',imgHeight);
					$(this).find('img').css('left',imgLeft);
				}else{
					imgTop =  -((thisHeight / (thisWidth/imgWidth) - imgHeight) / 2);	
					$(this).find('img').css('width',imgWidth);
					$(this).find('img').css('top',imgTop);
				}	
			}
		});
	}	
}