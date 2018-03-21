var ff = 0;
			function closeInput(){
				$("#input-plan").css('display','none');
				$("#a").val("创建您的旅行计划...");
			}
			function creatPlan(){
				$("#input-plan").css('display','none');
				$("#list-item").append("<div id='item"+ff+"' style='border-bottom: dashed 1px;border-color: #808080;overflow: hidden;'><button onclick='del("+ff+")' style='float: left;margin-left: 10px;margin-top: 20px;'>x</button><h5 id='l"+ff+"' style='margin-left: 10px;height: 15px;float: left;'></h5></div>");
				$("#l"+ff).text($("#t").text()+':'+$("#a").val());
//				console.log($("#a").val());
				ff++;
				$("#a").val("创建您的旅行计划...");
			}
			function del(num){
				$("#item"+num).remove();
			}
			var myChart = echarts.init(document.getElementById('mapchart'));
			myChart.on('click', function (params) {//点击事件
				$("#input-plan").css('display','block');
				$("#t").text(params.name);
//			       console.log(params.name);
			});
			var series = [
				{
		        type: 'lines',
		        coordinateSystem: 'geo',
		        polyline: true,
		        lineStyle: {
		            normal: {
		                color: '#591f08',
		                width: 2.5,
		                type: 'dotted'
		            }
		        },
		        data: [{
		            coords: [
		            	[115.48, 38.85],
		            	[117.2, 39.13],
		                [116.46, 39.92],
		                [119.57, 39.95],
		                [120.33, 36.07],
						[110.35, 20.02],
		            ],
		        }]
		    },
			];
			var citydata = [
				[{city:'保定',time:'2013年9月',thing:'与家人出游放松',coord:[115.48, 38.85]}],
				[{city:'天津',time:'2014年6月',thing:'同学聚会，体会风土人情',coord:[117.2, 39.13]}],
				[{city:'北京',time:'2015年10月',thing:'爬香山，一览众山小',coord:[116.46, 39.92]}],
				[{city:'秦皇岛',time:'2016年7月',thing:'与朋友海边游玩',coord:[119.57, 39.95]}],
				[{city:'青岛',time:'2017年5月',thing:'毕业旅行',coord:[120.33, 36.07]}],
				[{city:'海口',time:'2018年1月',thing:'放松心情',coord:[110.35, 20.02]}],
			]
			citydata.forEach(function(item,i){
				series.push({
				name: item[0].city+'<br>'+item[0].time+'</br>'+item[0].thing,
		        type: 'scatter',
		        coordinateSystem: 'geo',
		        symbolSize: 8,
		        itemStyle: {
		            normal: {
		                color: '#591f08',
		                opacity: 0.65
		            }
		        },
		        tooltip: {
		        	trigger: 'item',
			        formatter : function (params) {
			        		return params.seriesName;
			        }
		        },
		        data: [
		            item[0].coord,
		        ]
		    })
			});
			
			option = {

		    backgroundColor: {
		        type: "pattern",
		        repeat: "repeat",
		    },
		    geo: {
		        map: 'china',
		        silent: false,
		        roam: true,
				zoom:1.2,
				mapLocation: {
	                y : 60
	            },
		        itemStyle: {
		            normal: {
		                opacity: 0.9,
		                borderWidth: 0,
		                color: '#a53d13'
		            },
		            emphasis: {
						color: '#a52d11'
					}
		        },
		    },
		    title: {
		        text: '旅行过的城市',
		        subtext: '郭家铭',
		        left: '20%',
		        top: '85%',
		
		        textStyle: {
		            color: '#591f08',
		            fontSize: '24'
		        },
		        subtextStyle: {
		            color: '#591f08',
		            fontSize: '14'
		        }
		    },
		    tooltip: {
		    	trigger: 'item',
		    },
		    series: series
		};
		myChart.setOption(option);
			window.addEventListener("resize",function(){
		        myChart.resize();
		});