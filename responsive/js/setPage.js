(function setPage(json){
	var str="",str2 = "",str3="",str4 ="";
	//渲染“服务介绍”页面
	for(var i =0;i<json.services[0].row.length;i++){
		str += `<div class="col-xs-12 col-sm-6 col-md-3 service-item scrollimation scale-in ${json.services[0].row[i].classa}">
						<div class="service-icon"><i class="fa ${json.services[0].row[i].classb}"></i></div>
						<h4>${json.services[0].row[i].h4}</h4>
						<p>${json.services[0].row[i].p}</p>
					</div>`;
	};
	$("#row").html(str);
	
	//渲染“广告”页面
	for(var i =0;i<json.portfolio.main.length;i++){
		str2 += `<a class="project-item masonry-brick" data-images="${json.portfolio.main[i].images}">
						<img src="${json.portfolio.main[i].src}" alt="" class="img-responsive project-image" />
						<div class="hover-mask">
							<h2 class="project-title">${json.portfolio.main[i].h2}</h2>
							<p>${json.portfolio.main[i].p}</p>
						</div>
						<div class="sr-only project-description">${json.portfolio.main[i].p}</div>
					</a>`;
	};
	$("#projects-container").html(str2);
	
	//渲染“合作企业logo”页面
	for(var i =0;i<json.contact.src.length;i++){
		str3 +=`<img src="${json.contact.src[i]}">`;
	}
	$('#container-bg').html(str3);
	
	// 渲染“合作企业”介绍页面
	for(var i = 0; i<json.contact.quotes.length;i++){
		str4 += `<div class="item">
						<div class="container-icon">
							<i class="fa fa-quote-right"></i>
						</div>
						<p>${json.contact.quotes[i].p}</p>
						<h4 class="quote-author">${json.contact.quotes[i].h4}<span></span></h4>
					</div>`;
	}
	$("#quotes").html(str4);
})(json);
