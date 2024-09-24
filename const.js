//  ,DATE_FORMAT(c_date,'%Y-%m-%d %H:%i:%s') 'good_c_date'

exports.bucket = "spirokit"
//exports.s3dir =

/**기초코드에서 사용자 구분 대카타고리 코드*/
exports.USER_GUBUN_CATE_CODE = "02" //사용자구분 대카타코리 코드
exports.BRANCH_CATE_CODE = "01" //지점 대카타고리 코드

exports.LOGFOLDER = "./temp_log"

//exports.fcm_key = "AAAAtktNeRE:APA91bF0dq59Gyxe3L4PXMGnDSeJYRxphMD20bQdvQpl47qq3XV2kg7gP7tS7r9y1CpW7xyeVOtX16NrpZg-_QoH8VsPPAzIpD5BI8XcSYDHBwz8kfoN91hiuOFIw2IA5gA7pwNKnvVm"
exports.fcm_server_key = "AAAAbHdFIJ4:APA91bGiNcCYeW5r7qAXbeCncvcJua9xkhZhCQH3nu8r2oHWhpTsguRTX7etp7b3RiOPmLA37JSd9bsN3pbdDLgFa9KY94WI6Fq7bwBc6cU_fzAcpLyYaNcNbEnggNU-bfJ-J1VTWar1"

exports.AWS_BUKET = "mindaos-userfiles-mobilehub-1337443723"
exports.AWS_EXCEL_DIR = "https://mindaos-userfiles-mobilehub-1337443723.s3.ap-northeast-2.amazonaws.com/public/erp-excels/"
exports.AWS_S3_EXCEL_DIR = "publc/erp-excels"

/*
Define :  Api response codes
*/
exports.code = {
  //파라미터를 입력하지 않았거나 잘못되었을 경우
  'paramError' : 100
  //api 응답 성공
  ,'success' : 200
  //api 응답 성공하였으나 정상 결과가 나오지 않을 때
  ,'successReject' : 201
  //fs 모듈로 파일을 읽어들일 때 버퍼 오류 날 때
  ,'readFileError' : 202
  //이미 등록되어 있음
  ,'aleady' : 203
  //실패시
  ,'failed' : 205
  //디비 에러나 쿼리 에러 시
  ,'dbError' : 300
  //내부 네트워크 오류 시
  ,'proxyNetworkError' : 400
  //sns arn 생성 실패
  ,'insertArnError' : 700
  //sns arn 업데이트 실패
  ,'updateArnError' : 701
  //파일 업로드 실패
  ,'uploadError' : 500
  //클라이언트에서 파일을 첨부하지 않았을 경우
  ,'uploadNoAttachedError' : 501
  //웹링크 타입오버
  ,'webLinkTimeOver' : 601
  //패스워드생성 실패
  ,'failedMakePassword' : 602
  //알지못하는 오류
  ,'unkownError' : 603
  ,'s3_failed' : 800
  ,'file_system' : 850

};


/*
Define :  Api response Messages
*/
exports.message = {
  'msg01' : "해당 앱버전이 없습니다."
  ,'msg02' : "설정파일을 읽어들이는데 실패하였습니다."
  ,'msg03' : "요청 파라미터가 올바르지 않습니다."
  ,'msg04' : "패스워드가 일치하지 않습니다."
  ,'msg05' : "존재하지 않는 아이디입니다."
  ,'msg06' : "중복된 설정치 : 동일값 혹은 동일시간 중복입니다."
  ,'msg07' : "프로그램 등록 불가"
  ,"msg501" : "Let Attach Image file@"
  ,"msg502" : "No Attached file"
  ,"msg600" : "No Response!"
  ,"msg041" : "이미 답변하였습니다."
  ,"msg042" : "이미 답변된 글은 수정하실 수 없습니다."
  ,"msg043" : "하루 3대 등록횟수를 초과 했습니다."

};


/**
안드로이드 fcm 메세지 구분
*/
exports.notification = {
  'notification' : 1
  ,'poll' : 2
  ,'emergency' : 3
}

/*
Dynamic callback error
 - 디비에러 등등 에러메세지 내용을 담는다.
*/
exports.error = function (resultCode, instance, err){
  return	{
    'result' : resultCode
    ,'instance' : instance
    ,'message' : err
  };
};

/*
파일 업로드
*/
exports.uploadFileDir = {
  //기업 [컨텐츠] 기업 이미지 및 동영상 경로
  'resources_files_content' : "./resources/files/content/"
  //기업 [동영상] 업로드 경로
  ,'resources_files_charge' : "./resources/files/charge/"

  ,'CDN' : "http://d4x3an8uvhqey.cloudfront.net/public/"
  ,'CDN_CN' : "http://203.245.41.103/upload/"
};

//기본 locale 설정
exports.DEFAULT_LOCALE = 'en';

exports.webLinkTimeOver = 7000;


///legacy


//이메일 보내는 기본 이메일 주소
exports.DEFAULT_SEND_EMAIL = 'alex@alexposture.net';

/*
 Push Notification관련
 - aws application arn -- 이미 설정되어 있는 값 , aws 사이트에서 없애거나 새로 생성할 경우 변경하기
 - push development private key 등록 - 테스트 용으로 사용
*/
// IOS (운영용) : push production private key 등록 -  실사용시 사용
exports.AWS_APPLICATION_ARN_IOS_APNS = "arn:aws:sns:ap-northeast-2:047341249598:app/APNS/alex-plus-ios-prod_v1";
// IOS (개발용)
exports.AWS_APPLICATION_ARN_IOS_APNS_SANDBOX = "arn:aws:sns:ap-northeast-2:047341249598:app/APNS_SANDBOX/alex-plus-iso-dev";
// Android (운영용)
exports.AWS_APPLICATION_ARN_ANDROID = "arn:aws:sns:ap-northeast-2:047341249598:app/GCM/alex-plus-android-dist";
// Android (개발용)
exports.AWS_APPLICATION_ARN_ANDROID_DEV = "arn:aws:sns:ap-northeast-2:047341249598:app/GCM/alex-plus-android-dev";

/*
alexp_apis/fw-check.js 파일에서 --config.json 파일을 읽어올 때 경로 수정
 - 자신의 프로젝트 파일의 위치를 적용
 */
// @Deprecated
exports.MY_PROJECT_FOLDER_DIR = "/Users/eunsujung/Documents/workspace_node/atest/";
