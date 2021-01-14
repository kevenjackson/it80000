/* 初始化设置：atartPan:初始横向角度，startTilt：初始纵向角度，startFov:初始视角 */
startPan = 100; 			/* 从左到右：-180 - 0 - 180 */
startTilt = 18; 			/* 从下到上：-90 - 0 - 90 */
startFov = 70; 			/* 视角：30 - 130 */
fovMax = 130;			/*最大视角*/
fovMin = 30;			/*最小视角*/

/* 视角限制 */
useLimits = false;
topLimit = 60;  		/* 0 - 90 */
bottomLimit = -60;		/* 0 - -90 */
leftLimit = -120; 		/* 0 - -180 */
rightLimit = 120; 		/* 0 - 180*/

/* 控制面板 */
useControl = "/image/catalog/webdesign/2/3.png";
autoRotateOnStart = true;
autoRotateOnIdle = true; 
autoRotateDelay = 5;

//bgSound = "src='/audio/1.mp3' autobuffer autoplay loop";