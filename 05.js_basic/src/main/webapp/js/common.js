/**
 * 공통 자바스크립트 파일 : js/common.js 
 */

/**
getYear() 
1970년 이후의 연도  정보를 알려줍니다.

getFullYear() 
연도 정보를 열려줍니다. 

getMonth() 
월(月)  정보를 알려줍니다. 1월부터 순서대로 0,1,...순으로 표시됩니다.

getDate() 
일(日) 정보를 알려줍니다.

 */


/* 현재 날짜 년도4자리-월2자리-일2자리 기본형식의 날짜 반환 함수 
   -- 1 ~ 9 : 01
   -- getFullYear()
   -- getMonth() + 1
   -- getDate()
*/
function getCurrentDate() {
	var currentDate = new Date();
	var year = currentDate.getFullYear();

	var month = currentDate.getMonth() + 1;
	if (month <= 9) {
		month = "0" + month;		
	}
	
	var date = currentDate.getDate();
	
	var date = currentDate.getDate() + 1;
	if (date <= 9) {
		date = "0" + date;		
	}
	
	currentDate = year + "-" + month + "-" + date;
	console.log("currentDate: "+currentDate);
	
	return currentDate;
}



/* 현재 시간 시간2자리 : 분 2자리 : 초2자리 기본형식의 날짜 반환 함수 */
function getCurrentTime() {
	document.write(d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds() )
}



