window.onload=function(){
    var bodys=$("body")[0];
	//登录
	// var zhuangtaiyou=$(".zhuangtaiyou")[0];
	var dl=$("#login");
	var login=$(".login",dl)[0];
    var dll=$("#dl");
     
     dl.onmouseover=function(){
        dll.className="dl_hover zhuangtaiy";
     	login.style.display="block";
     }
     dl.onmouseout=function(){
        dll.className="zhuangtaiy";
     	login.style.display="none";
     }
     var sjyyt=$("#shoujiyinyeting");
     var ewm=$(".ewm",sjyyt)[0];
     sjyyt.onmouseover=function(){
     	ewm.style.display="block";
     }
     sjyyt.onmouseout=function(){
     	ewm.style.display="none";
     }
     //手机营业厅
     var shengfen=$(".shengfen")[0];
     var sousuoleft=$(".sousuoleft")[0];
     sousuoleft.onclick=function(){
     	shengfen.style.display="block";
     }
     shengfen.onmousedown=function(){
     	shengfen.style.display="none";
     }
    //banner
    var bannerbox=$("#banner_2");
    var bannerimg=$(".bannerimg",bannerbox);
    var bannerli=$("li",bannerbox);
    var bannerSlide=$(".slide",bannerbox)[0];
    var bannerSlideLeft=$(".slideleft",bannerbox)[0];
    var bannerSlideRight=$(".slideright",bannerbox)[0];
    var num=0;
    var index1=0;
    var flag=true;
    var len=bannerimg.length;
    // alert(len);
    for(var i=0;i<len;i++){
    	if(i==0){

    		continue;
    	}
        // alert(len);
    	bannerli[i].style.backgroundColor="#D1C9CD";
        bannerimg[i].style.opacity="0";
    }


    var t=setInterval(move,1000);


    bannerbox.onmouseover=function(){
    	clearInterval(t);
       bannerSlide.style.opacity="1";
    }
    bannerbox.onmouseout=function(){
    	t=setInterval(move,1000);
        bannerSlide.style.opacity="0";
    }


    for(var i=0;i<len;i++){
    bannerli[i].index=i;
    
    bannerli[i].onclick=function(){
    	num=this.index;
       for(var j=0;j<len;j++){
       	animate(bannerimg[j],{opacity:0});
       	bannerli[j].style.backgroundColor="#D1C9CD";
       }
      bannerli[this.index].style.backgroundColor="#D41364";
      animate(bannerimg[this.index],{opacity:1});
    }
    }


    bannerSlideLeft.onmouseover=function(){
    	bannerSlideLeft.style.opacity="0.9";
    }
    bannerSlideLeft.onmouseout=function(){
    	bannerSlideLeft.style.opacity="0.5";
    }
    bannerSlideRight.onmouseover=function(){
    	bannerSlideRight.style.opacity="0.9";
    }
    bannerSlideRight.onmouseout=function(){
    	bannerSlideRight.style.opacity="0.5";
    }
    bannerSlideRight.onclick=function(){
    	if(flag){
    		flag=false;
    		move();
    	}
    }
    bannerSlideLeft.onclick=function(){
    	if(flag){
    		flag=false;
    		mover();
    	}
    }

    function move(){
    	num++;
    	if(num>=len){
    		num=0
    	}
    	for(var i=0;i<len;i++){
    		// animate(bannerimg[i],{opacity:0});
    		animate(bannerli[i],{backgroundColor:"#D1C9CD"});
    	}
        animate(bannerimg[index1],{opacity:0});
    	animate(bannerimg[num],{opacity:1},function(){
    		flag=true;
    	});
    	animate(bannerli[num],{backgroundColor:"#D41364"});
        index1=num;
    }
    function mover(){
    	num--;
    	if(num<0){
    		num=len-1;
    	}
    	for(var i=0;i<len;i++){
            animate(bannerli[i],{backgroundColor:"#D1C9CD"});
        }
    		animate(bannerimg[index1],{opacity:0});
    	animate(bannerimg[num],{opacity:1},function(){
    		flag=true;
    	});
    	animate(bannerli[num],{backgroundColor:"#D41364"});
        index1=num;
    }
//输入框效果
     var son=$(".history")[0];
     var father=$("input")[0];
     var history=$("span",son);
     father.onfocus=function(){
        father.value="";
        son.style.display="block";
     }
     father.onblur=function(){
        father.value="包月流量包";
        son.style.display="none";
     }
     history[1].onmouseover=function(){
        history[1].style.opacity="0";
        history[2].style.opacity="1";
     }
     history[1].onmouseover=function(){
        history[1].style.opacity="1";
        history[2].style.opacity="0";
     }
     history[2].onclick=function(){
        history[1].style.opacity="0";
     }
     history[3].onclick=function(){
        son.style.display="none"
     }

     //导航
     var douhang=$("#douhang");
     xxk("xxk","xzdaonhang");


    var father1=$("input")[1];

    father1.onfocus=function(){
        father1.value="";
    }
    father1.onblur=function(){
        father1.value="请输入手机号";
    }
 
    var shansuo=$(".shansuo");
    
    var sslen=shansuo.length;
    for(var i=0;i<sslen;i++){
        
        shansuo[i].index=i;
        shansuo[i].onmouseover=function(){
            var img2=$(".img2",shansuo[this.index])[0];
            animate(img2,{right:30});
        }
        shansuo[i].onmouseout=function(){
            var img2=$(".img2",shansuo[this.index])[0];
            animate(img2,{right:0});
        }
    }
    



    //固定位置
    var absolute=$(".absolute1");
    for(var i=0;i<absolute.length;i++){
        absolute[i].index=i;
        absolute[i].onmouseover=function(){
            animate(absolute[this.index],{right:48});
        }
        absolute[i].onmouseout=function(){
            animate(absolute[this.index],{right:0});
        }
    }




    

    var obj1=$(".lunbohezi")[0];
    jiedianlunbo(obj1,2);





    //底部事件轮播
    var news=$(".news")[0];
    var news1=$(".news_1",news);
    var news_left=$(".left",news)[0];
    var news_right=$(".right",news)[0];
    news1[1].style.display="none";
    var t1=setInterval(move1,1000);
    var index=0;
    news.onmouseover=function(){
    clearInterval(t1);
    }
    
  
    news.onmouseout=function(){
        t1=setInterval(move1,1000);
    }
    news_left.onclick=function(){
        move1();
    }
    news_right.onclick=function(){
        move1();
    }
    function move1(){
        index++;
        if(index>=2){
            index=0;
        }
        for(var i=0;i<2;i++){
           news1[i].style.display="none"; 
        }
        news1[index].style.display="block";       
    }









}