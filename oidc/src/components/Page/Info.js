
import '../App.css';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer';
import Navbar from '../navBar';
import SideMenu from '../sideMenu'
import React, { useEffect, useState } from "react";
import $ from "jquery";

function Info(){
    return (
        <div className="MigHelper">
        <body class="sb-nav-fixed">
           <Navbar></Navbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <SideMenu></SideMenu>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Information of Cloud Helper</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Information</li>
                            </ol>
                            <p1>안녕하세요. 제 4회 OIDC에 참가한 팀 정통입니다.</p1>
                            <br></br>
                            <p1>팀 정통이 해당 서비스를 제공하고자 하는 목적은 다음과 같습니다.</p1>
                            <br></br>          
                            <p1>개인이나 기업에게 웹 사이트를 통해 접근하기 쉽고, 비용면에서 유리하며, 편리하게 서버 개발 설계, 모니터링, 보안 점검을 할 수 있도록 하는 3가지 Service를 client에게 제공하고자 합니다.</p1>
                            <br></br>
                            <br></br>   
                            <p1>첫 번째 Service는 개인이나 기업이 새롭게 Cloud Server를 도입하려 하거나, 이미 On-Premise에서 사용중인 Server를 Cloud로 Migration 하려할 때, </p1>
                            <br></br>
                            <p1>Client가 입력한 IaaS 환경을 바탕으로 CSP별 적합한 Server 환경을 추천해주며 규모와 비용 산정에 도움을 줄 수 있는 Server Migration Helper Service입니다.</p1>
                            <br></br>
                            <br></br>
                            <p1>두 번째 Service는 client가 IaaS 리소스와 워크로드에 대해 모니터링을 하고자 할 때, 시중에 사용되는 모니터링 Tool과는 다르게 많은 시간과 지식이 필요한 별도의 Server 구축이나, 모니터링 Tool의 설치 및 설정 없이,</p1>
                            <br></br>
                            <p1>웹 사이트에서 로그인 후, 모니터링 할 서버에 batch 파일을 다운로드하고 실행하기만 하면 쉽고 빠르게 원하는 서버들에 대해 전체적으로 한 눈에 또는 세부적으로 하나의 서버에 대해 모니터링 할 수 있는 IaaS Hybrid Cloud Monitoring Service입니다.</p1>
                            <br></br>
                            <br></br>
                            <p1>세 번째 Service는 두번째 service와 마찬가지로 별도의 보안프로그램 설치 및 설정 없이, 원하는 서버에 batch 파일을 다운로드하고 실행함으로써,</p1>
                            <br></br>
                            <p1>매일 00시마다 자동적으로 Server에 Virus 검사를 진행하고 검사가 끝남에 따라 최신화 된 검사결과와 세부 정보를 웹사이트에서 확인할 수 있는 IaaS Security Management Service입니다.</p1>
                            <br></br>
                            <br></br>
                            <ul>
                                <li>Migration Helper : 이미 On-Premise에서 사용중인 Server를 Cloud로 Migration 하려할 때 사용하는 Server Migration Helper</li>
                                <li>Server Create Helper : 새롭게 Cloud Server를 도입하려 할 때 사용하는 Server Migration Helper Service</li>
                                <li>Dashboard : 웹서비스를 사용하여 IaaS 리소스와 워크로드에 대해 모니터링을 할 수 있는 IaaS Hybrid Cloud Monitoring Service</li>
                                <li>Security : 웹서비스를 사용하여 서버에 대한 Virus 검사를 실시하고 결과를 확인할 수 있는 IaaS Security Management Service</li>
                            </ul>
                        </div>
                    </main>
                 <Footer></Footer>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
            <script src="assets/demo/chart-area-demo.js"></script>
            <script src="assets/demo/chart-bar-demo.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
            <script src="js/datatables-simple-demo.js"></script>
        </body>
        </div>
      );
}export default Info; 