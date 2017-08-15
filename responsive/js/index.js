$(document).ready(function() {

  $(window).load(function(){
    $('#projects-container').css({visibility:'visible'});

    $('#projects-container').masonry({
      itemSelector: '.project-item:not(.filtered)',
      isFitWidth: true,
      isResizable: true,
      isAnimated: !Modernizr.csstransitions,
      gutterWidth: 0
    });

    scrollSpyRefresh();
    waypointsRefresh();
  });

  $('.scrollimation').waypoint(function(){
    $(this).addClass('in');
  },{offset:'90%'});



  $('.project-item').click(function(e){
    e.preventDefault();

    var elem = $(this),
      title = elem.find('.project-title').text(),
      link = elem.attr('href'),
      descr = elem.find('.project-description').html(),
      slidesHtml = '',
      slides = elem.data('images').split(',');

    for (var i = 0; i < slides.length; ++i) {
      slidesHtml = slidesHtml + '<img src='+slides[i]+' alt=""  data-dismiss="modal">';
    }

    $('#project-modal').on('show.bs.modal', function () {
      $(this).find('h1').text(title);
      $(this).find('.project-descr').html(descr);
      $(this).find('.project-img').html(slidesHtml);

      $("#project-img").owlCarousel();
      $("#project-img").data('owlCarousel').reinit({
        singleItem:true,
        autoPlay:30000,
        stopOnHover: true,
        pagination: true
      });
    }).modal();
    
  });

  $('#project-modal').on('hidden.bs.modal', function () {
    $(this).find('.loader').show();
  });

	
  $('#quotes').owlCarousel({
    singleItem:true,
    autoPlay:30000,
    stopOnHover: true,
    pagination: true
  });

  $('a.scrollto').click(function(e){
    if ($('.navbar-collapse').hasClass('in')){
      $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
    $('html,body').scrollTo(this.hash, this.hash, {});
    e.preventDefault();
  });

	
  
  function scrollSpyRefresh(){
    setTimeout(function(){
      $('body').scrollspy('refresh');
    },1000);
  }
  
  function waypointsRefresh(){
    setTimeout(function(){
      $.waypoints('refresh');
    },1000);
  }
  $(window).scroll(function(){
  	if($(window).scrollTop() >= window.innerHeight){
	  	$('#backtop').css({'display':'block','position':'fixed','left':window.innerWidth*0.94,'top':window.innerHeight*0.8,'fontSize':40,'color':'#4DDBFF','transition':'all 1s'})
  	}else{
	  		$('#backtop').css('display','none')
	  	}
  })
  	$('#backtop').on('click',function(){
	  		$('body,html').animate({scrollTop:0},1000);
	  	})
  
});