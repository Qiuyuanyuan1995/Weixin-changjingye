var nowpage = 0;
$(document).ready(function() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(height * 8);

	$(".page").width(width);
	$(".page").height(height);

	$(".content").swipe({

		swipe: function(event, direction, duration, distance, fingercount) {
			if(direction == "up") {
				nowpage += 1;
			}
			if(nowpage > 7) {
				nowpage = 7;
			}
			if(direction == "down") {
				nowpage -= 1;
			}
			if(nowpage < 0) {
				nowpage = 0;
			}

			$(".content").animate({ "top": "-" + nowpage * height + "px" }, { duration: 2000, complete: animateOfpage });
		}
	})
	$(".page1-star").fadeIn(2000, function() {
		$(".page1-flower1").fadeIn(2000);
		$(".page1-flower2").fadeIn(2000);
		$(".name").fadeIn(2000);
		$(".page1-zhi").animate({ "width": "30%" }, {
			duration: 2000,
			complete: function() {
				$(".page1-young").animate({ "width": "35%", }, { duration: 2000 });
			}
		});
	})
})

function animateOfpage() {
	switch(nowpage) {
		case 1:

			$(".page2_BG1").animate({ "width": "100%", "height": "100%", "top": "0%", "left": "0%" }, { duration: 1000 });
			$(".page2_graduate").fadeIn(800);
			$(".page2_graduate").addClass("new2");
			$(".page2_BG1").fadeIn(2000, function() {
				$(".page2_BG1").addClass("new");

				$(".page2_smallbg").fadeIn(800, function() {
					$(".page2_smallbg").animate({ "width": "50%", "height": "80%", "top": "9.5%", "left": "17%" }, {
						duration: 800,
						complete: function() {
							$(".page2_smallbg").addClass("new1");
							$(".first").fadeIn(800);
							$(".first").animate({ "top": "33%", "right": "40%" }, { duration: 1000 });

							$(".page2_sperate").fadeIn(2000);
							$(".second").fadeIn(800);
							$(".second").animate({ "top": "43%", "right": "50%" }, { duration: 1000 });
							$(".page2_meet").fadeIn(4000);

						}
					});
				});

			});

			break;
		case 2:
			$(".page3_bg").fadeIn(1000, function() {
				$(".page3_img1").addClass("page3_img11");
				$(".page3_img1").animate({ "right": "3%" }, {
					duration: 1000,
					complete: function() {
						$(".page3_img2").animate({ "width": "50%", "height": "45%", "top": "45%", "left": "3%" }, {
							duration: 1000,
							complete: function() {
								$(".page3_img3").animate({ "opacity": "1", "right": "10%" }, {
									duration: 1000,
									complete: function() {
										$(".page3_img4").animate({ "opacity": "1", "bottom": "10%" }, {
											duration: 1000,
											complete: function() {
												$(".page3_leaf1").animate({ "right": "-9%" }, { duration: 1000 });
												$(".page3_leaf2").animate({ "bottom": "-2%" }, {
													duration: 1000,
													complete: function() {
														$(".page3_leaf1").addClass("page3_leaf1dong");
														$(".page3_leaf2").addClass("page3_leaf2dong");
													}
												});
											}
										})
									}
								});
							}
						});
					}
				});
			})
			break;
		case 3:
			$(".page4_p16").fadeIn(1000, function() {
				$(".page4_p2").fadeIn(1000);
				$(".page4_pp1").fadeIn(1000, function() {
					$(".page4_pingzi2").animate({ "right": "15%" }, { duration: 1000 });
					$(".page4_pingzi1").fadeIn(1000, function() {
						$(".page4_pp3").fadeIn(500);
						$(".page4_kuang20").fadeIn(500, function() {
							$(".page4_kuang21").fadeIn(500);
							$(".page4_pp4").fadeIn(500, function() {
								$(".page4_kuang22").fadeIn(500);
								$(".page4_pp5").fadeIn(500, function() {
									$(".page4_kuang23").fadeIn(500);
									$(".page4_pp6").fadeIn(500, function() {
										$(".page4_kuang10").fadeIn(500);
										$(".page4_p3").fadeIn(500, function() {
											$(".page4_kuang17").fadeIn(500);
											$(".page4_p10").fadeIn(500);
											$(".page4_kuang11").fadeIn(500);
											$(".page4_p4").fadeIn(500, function() {
												$(".page4_kuang12").fadeIn(500);
												$(".page4_p5").fadeIn(500, function() {
													$(".page4_kuang16").fadeIn(500);
													$(".page4_p9").fadeIn(500);
													$(".page4_kuang13").fadeIn(500);
													$(".page4_p6").fadeIn(500, function() {
														$(".page4_kuang18").fadeIn(500);
														$(".page4_p11").fadeIn(500);
														$(".page4_kuang14").fadeIn(500);
														$(".page4_p7").fadeIn(500, function() {
															$(".page4_kuang15").fadeIn(500);
															$(".page4_p8").fadeIn(500);

														});
													});
												});
											});
										});
									});
								});
							});
						});

					});
				});
			});
			break;
		case 4:
			$(".cover").fadeIn(1000)
			$(".page5_bg").fadeIn(1000)
			$(".page5_time").animate({ "left": "15%" }, { duration: 1000 })
			$(".page5_leave").animate({ "right": "20%" }, {
				duration: 1000,
				complete: function() {
					$(".page5_ling").fadeIn(1000)
					$(".page5_star").fadeIn(1000, function() {
						$(".page5_blackp").addClass("page5_ang");
						$(".page5_blackp").fadeIn(1000, function() {
							$(".page5_p1").addClass("page5_top1")
							$(".page5_p1").fadeIn(1000)
							$(".page5_p2").addClass("page5_top2")
							$(".page5_p2").fadeIn(1000, function() {
								$(".page5_p3").addClass("page5_top3")
								$(".page5_p3").fadeIn(1000)
								$(".page5_p4").addClass("page5_top4")
								$(".page5_p4").fadeIn(1000)
								$(".page5_p5").addClass("page5_top5")
								$(".page5_p5").fadeIn(1000)
								$(".page5_p6").addClass(".page5_top6")
								$(".page5_p6").fadeIn(1000, function() {
									$(".page5_pen").fadeIn(1000, function() {
										$(".page5_school").fadeIn(1000)
										$(".page5_line").fadeIn(1000)
									})
								})
							})

						})
					})

				}
			})
			break;
		case 5:
			$(".page6_bg").fadeIn(1500);
			$(".page6_txt").addClass("txt_rotate");
			$(".page6_txt").fadeIn(1500);
			$(".page6_people").animate({ "height": "30%" }, {
				duration: 1100,
				complete: function() {
					$(".first_div").animate({ "left": "25%" }, {
						duration: 1100,
						complete: function() {
							$(".second_div").animate({ "right": "5%" }, { duration: 1300 });
							$(".page6_fly").animate({ "left": "25%" }, { duration: 1400 });
						}
					});

				}
			});
			break;
		case 6:
			//改变desk的属性
			$(".three").fadeIn(1000);
			$(".desk").animate({ "top": "0%", "left": "0%" }, { duration: 3000 })
			$(".start1").animate({ "left": "25%", "top": "25%" }, { duration: 1000 });
			$(".start2").animate({ "left": "55%", "top": "25%" }, { duration: 1000 });
//			$("h4").fadeIn(2000);
			$(".title").animate({"left":"25%","bottom":"50%"},{duration:2000});
			$(".pOne").animate({ "right": "15%", "bottom": "25%" }, { duration: 3000 });
			$(".pTwo").animate({ "right": "15%", "bottom": "8%" }, { duration: 4000 });
			break;

		case 7:
		   $(".last-bg").fadeIn(2000,function(){
	    	$(".last-ten").fadeIn(2000,function(){
	    		$(".last-title").fadeIn(1500,function(){
	    			$(".last-p1").fadeIn(2000,function(){
	    				$(".last-p2").animate({"left":"15%"},{duration:2000});
	    			    $(".last-p3").animate({"right":"6%"},{duration:2000,complete:function(){
	    			        $(".last-p4").fadeIn(2000);
	    			    }});
	    			    
	    			})
	    		});
	    	});	
	    });
	 break;
	}
}

function musicBeat(obj) {
	obj.src = "img/musicBtn.png";
	Media = document.getElementById("music");
	Media.play();
}