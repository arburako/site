_.namespace("mp.landing.segmentation",

	function(h){var c=$(window),d=$("#slider"),e=$(".goodbye-sql .image");e.find(".front");
	var k=e.find(".back"),f=e.width(),i=d.offset().top;$.easing.easeInOutCirc=function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c};

	var j=function(a,b){a=~~a-23;k.width(a);b&&d.css("left",f-a)},g=function(){
		var a=c.scrollTop()+c.height();a<i||(a=f-(a-i)/3,j(185>a?185:370<a?370:a,!0))};d.dragdrop({boundingBox:{x:{min:1,max:555},y:{min:-20,max:-20}},dragstart:
			function(){c.off("scroll",g)},drag:function(){var a=d.offset().left-e.offset().left;j(f-a,!1)}});

		var l=Backbone.View.extend({el:".case-studies",events:{"click .question":"toggleCaseStudyImage"},initialize:
		function(){this.$questions=this.$(".question");this.$caseStudies=this.$(".image > img");this.currentCaseStudyId="#case-study-1"},
		toggleCaseStudyImage:function(a){var b=$(a.currentTarget),a=b.data("target");
		if(this.currentCaseStudyId!=a)this.$questions.removeClass("active"),b.addClass("active"),b=[-1957,2043],a>this.currentCaseStudyId&&(b=b.reverse()),this.$caseStudies.not(this.currentCaseStudyId).css("left",b[0]+"px"),

			$(this.currentCaseStudyId).delay(50).animate({left:b[1]+"px"},400,"easeInOutCirc"),$(a).delay(50).animate({left:"43px"},400,"easeInOutCirc"),this.currentCaseStudyId=a}});

	h.bootstrap=function(){$(".animation").addClass("ready");c.on("scroll",g);g();h.caseStudiesView=new l}});
