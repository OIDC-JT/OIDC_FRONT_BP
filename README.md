# OIDC_FRONT_BP

## 1. Repo에 대한 설명
    이 Repo는 제 4회 OIDC에 참가한 '정통' 팀의 "MigHelper Service"의 FRONT-END 부분으로서 REACT.JS를 기반으로 하고 있다. 
    기존 OIDC_FRONT Repository에서 build 폴더가 추가되었으며, 테스트 진행중에 발생한 오류를 수정해놓은 최종 Repository이다.
    하단에 기록될 내용들은 React 프로젝트를 배포하는 과정을 작성해놓았으며 순서는 다음과 같다.

### 2. 배포 과정
    2-1. VSCode로 Repository를 열어주고, 'npm run build' 명령어를 CLI 창에서 실행해준다. 
    2-2. Build 폴더가 생성되면 Github에 Commit & Push를 해준다.
    2-3. 프로젝트가 배포될 서버에 접속한 후 Git을 설치해준다. 
         - sudo apt install git-all
         - git init
         - git remote add origin "서버 ip주소" 
         - git pull origin master
    2-4. 서버에 nginx를 설치해준다. (참고자료 :  https://holjjack.tistory.com/114에서 2번까지 수행 )
    2-5. nginx가 설치된 후, web.conf 파일을 생성한다. ( 참고자료 : https://gaemi606.tistory.com/entry/CentOS-7-nginx-install )
    2-6. oidc폴더로 이동한 후, node.js와 npm을 설치한다. (참고자료 : https://m.blog.naver.com/dellose/221703913701 )
    2-7. npm start를 통해 프로젝트를 실행할 수 있다.
    
### 3. 참고자료
    1. nginx 설치 : https://holjjack.tistory.com/114
    2. web.conf 생성 : https://gaemi606.tistory.com/entry/CentOS-7-nginx-install
    3. node.js, npm 설치 : https://m.blog.naver.com/dellose/221703913701
