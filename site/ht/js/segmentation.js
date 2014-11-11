


	var l=Backbone.View.extend({el:".case-studies",
		events:{"click .question":"toggleCaseStudyImage"},
		initialize:function(){this.$questions=this.$(".question");this.$caseStudies=this.$(".image > img");

		this.currentCaseStudyId="#case-study-1"},
		
		toggleCaseStudyImage:function(a){
			var b=$(a.currentTarget),a=b.data("target");

			if(this.currentCaseStudyId!=a)this.$questions.removeClass("active"),

				b.addClass("active"),
			b=[-1957,2043],
			a>this.currentCaseStudyId&&(b=b.reverse()),
		this.$caseStudies.not(this.currentCaseStudyId).css("left",b[0]+"px"),
		$(this.currentCaseStudyId).delay(50).animate({left:b[1]+"px"},400,"easeInOutCirc"),
		$(a).delay(50).animate({left:"43px"},400,"easeInOutCirc"),this.currentCaseStudyId=a}});


	h.bootstrap=function(){$(".animation").addClass("ready");c.on("scroll",g);g();h.caseStudiesView=new l}});
