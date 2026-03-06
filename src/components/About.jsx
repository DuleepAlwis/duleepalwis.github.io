import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import '../index.css';
import { useEffect, useRef, useState } from "react";
import { RevealText, useScrollAnimation } from './AnimationComponent';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion'
import yimg from '../assets/images/yimg.png'
import web from '../assets/images/website-image.png'
import Badge from 'react-bootstrap/Badge';

export const About = ()=>{

    

  const [textRef, textShow] = useScrollAnimation();
  const [imgRef, imgShow] = useScrollAnimation();


 

    return(
        <>
         <Container sx={{margintTop:"11px"}} className="home-bg">
     <Row>
        <Col xs={4}></Col>
        <Col xs={5}><h1 style={{color:"white"}} ref={textRef} className={`slide-left ${textShow ? "show":""}`}>Duleep's Profile</h1></Col>
     </Row>
      <Row>
        
        <Col xs={6} md={4} ref={imgRef} className={`slide-right ${imgShow ? 'show' : ''}`}>
          <Image src={yimg} fluid thumbnail roundedCircle />
        </Col>

        <Col xs={6} md={8} ref={textRef} className={`slide-left ${textShow ? "show":""}`}>
                <div id="home" style={{"width":"100%",color:"white"}}><h3>About me</h3></div>

                <p><i style={{color:"white"}}>
                My name is Duleep Alwis. I followed  my Bsc in Computer Science degree from University of Colombo and I am a professionally a software engineer. Currently I have got 4+ experience in Software engineering industry.  I am an energetic, tech enthusiat, smart working guy and willing to learn new technology trends.
                </i></p>
            
            {/* <Accordion defaultActiveKey="0" width="100%">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About my self</Accordion.Header>
                    <Accordion.Body>
                        My Name is Duleep Alwis. I am a graduate from University of Colombo and I passed out with a Bsc in Computer science degree from there. My professionaly a Software engineer around 4+ years of experience.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </Col>
        </Row>

        <Row>
            <Col xs={6} md={7}>
                        <RevealText>

                <h3 id="Techstack" style={{"color":"white"}}>Technologies & Tools</h3> 
                <ul style={{"color":"white"}}>
                    <li>Java (8/17/21),Javascript</li>
                    <li>Sql, Oracle Database, Mysql Database.</li>
                    <li>Spring boot,Angular, React.</li>

                    <li>Html,Css,Java server pages</li>
                    <li>JBOSS,Docker</li>
                    <li>Eclipse,Docker Desktop,Intellij idea,vs-code,Mysql workbench</li>   


                </ul>
                </RevealText>
            </Col>

            
            <Col xs={6} md={5}>
            <div>
            <Image src={process.env.PUBLIC_URL + "/images/website-image.png"}  fluid thumbnail ref={imgRef} className={`slide-right ${imgShow ? 'show' : ''}`}/>

            </div>
            </Col>
        </Row>

        <Row>
            <Col id="experience" xs={6} md={7}>
            <RevealText>
                <h3 style={{"color":"white"}}>Experience</h3> 
                <ul style={{"color":"white"}}>
                    <li>2020-07 - 2021-07 Software Engineer Intern - Virtusa (pvt) Ltd</li>
                    <li>2022-02 - 2023-05 Associate Software Engineer - Virtusa (Pvyt) Ltd.</li>
                    <li>2023-05 - 2024-06 Associate Software Engineer - Rezgateway (Pvyt) Ltd.</li>

                    <li>2024-06 - Current Software Engineer - Mobitel (Pvt) Ltd.</li>

                </ul>
                </RevealText>
            </Col>

            <Col xs={6} md={4}>
                <div style={{"color":"white"}}>During my employment in these companies I got the exposure to many industrial scale enterprise level applications. How the Agile works ,what technologies are to use at each time.</div>
            </Col>

        </Row>
    
        


      <hr></hr>

      <Row style={{"color":"white"}}>
        <Col xs="6" md={12}>
        <RevealText>
        <div id="projects"> 
            <h3>
            Incident - Alert -Monitoring System - HyperCare (ASM360) - Virtusa (Pvt) Ltd.
            </h3>
            <p>
                This is a application developed according to micro-services architecture which contained 3 main components and background applications with some VB scripts. 

                Dashboard component was developed with Java 8/Spring boot/Angular-8/Material UI/Oriant DB(NoSql Database)
                Email status monitoring component was developed with Java 8/Spring boot/JPA/Angular 6/bootstrap/Mysql
                Meta data configuration component which handled , Insertion of Applications(This is like a domain) and Application Owners and etc . was developed with Java 8/JPA/Angular 6/bootstrap/Mysql
                database.
                Background running applications which were used to pull data from APIs , transform that data to send to background application which did the data feed for the database used by the dashboard component after doing calculations for final score was developed with Java 8/Spring boot
                and they were intergrated with Kafka .

            I contributed as a full stack software developer for this project. 
            Contribution.
            <ul>
            <li>Front end user interface development and user interface enhancements with Angular/TypeScript/Material ui.</li>
            <li>Backend service development with Java-8, spring boot.This includes Rest api development , changes in the background running applications/task automation/Report generation(Excel format)</li>
            <li>UI wireframe design.</li>
<li>Deploying the application for qa environment(Deploy jar files to a linux server and restore a clean database for the QA) at the end of the sprint.</li>
            <li>Do the code merging at the end of the sprint.</li>
            <li>Develop sql scripts to clean the database and create new records.</li>
            <li>R&D tasks</li>
            <li>Bug fixing and do hot-fix changes and deployments.</li>
            <li>Develop application to generate test data and do developer testing.</li>
            <li>Did KT's for new developpers.</li>
            <li>Doing demo about the work done in the sprint at the end of the sprint to the team</li>
            </ul>
            </p>

            <h3>
            Managed Service Provider - Virtusa (Pvt) Ltd.
            </h3>
            <p>
                This whole application is about managing a network device. It is designed to run commands online and offline modes. The application layer is divided into several micro-services which were written using go-lang.. There is utility software which acts as a transmitter to send and execute commands on this network device. Before writing to the database tables, the message is going through Rabbit MQ queues. Here my role was a devops engineer role which involved tasks such as,
                
                <ul>
                    
                <lI>Jenkins pipeline improvements.</lI>
                 and some coding tasks with Go-lang. 
                <li> Here I got the chance to work with a foreign client who is involved in the Network and infrastructure Security domain and we worked with an Indian development team of the same company in India and Sri Lankan branches.</li>
                 </ul>

                 </p>
            
        </div>
        </RevealText>
        
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col xs="6" md={12} style={{"color":"white"}}>
        <RevealText>
                <div>

                    <h3>Document and report management system (Advanced Data Platform) - Rezagateway (Pvt) Ltd</h3>
                </div>

                <p>
                This is the system which act as a interface to their Cargo-wise ERP system. This system supports EFL client to handle their shipment management services to their 100+ customer base. This helps their branches and departments to handle their logistic documents. Below are the tasks carried out by me in this project

                <ul>
                    <li>Front end development and ui enhancements , code refactoring.</li>
                    <li>Back end api and services development for front end features and automating tasks</li>
                    <li>R&D tasks.</li>

                </ul>
                </p>
</RevealText>
            </Col>
        </Row>


        <Row>
        <Col xs="6" md={12} style={{"color":"white"}}>
        <RevealText>
                <div>

                    <h3>Tour Operators Project (Pvt) - Rezgateway (pvt) Ltd</h3>
                </div>

                <p>
                This is the sales forecasting and tour planning system for Antartica 21 organization, to handle their travel planning and manage those work through an open source application known as Corteza. This is based in docker and it follows modern concept of low code platform. Here I got the chance to work with a foreign client and do client demo to them.


                <ul>
                   <li> Do configuration changes as per the client's requirement in the Corteza application.</li>
 <li> Get database backups from the docker container and send that to DevOps team to restore it in the
 QA and Client's environment.</li>
 <li>Version upgrading of the Corteza docker application.</li>
 <li> Documenting the tasks done and sharing them with the team.</li>
 <li> Conducting demos to clients about the new changes done to the system.</li>
 <li> Doing KT sessions to new developers.</li>

                </ul>
                </p>
</RevealText>
            </Col>
        </Row>

        <Row>
        <Col xs="6" md={12} style={{"color":"white"}}>
        <RevealText>
                <div>

                    <h3>Billing system for Mobitel branches - Mobitel (pvt) Ltd</h3>
                </div>

                <p>
              This is a postpaid bill payment system for mobitel where customers can come to the counter and pay their postpaid bills . Mobitel branch counter staff involves and do operations with this system.
Various payment schemes, various promotional schemes, bill printing as pdf, customer and manager notification through email and sms, reports generation for management staff are the features
developped in this system.
This system was previously written in 4gl and this is developing the system with a new tech stack. It includes user friendly user interface developped using react and material ui and a rest api written using Spring boot who handles data logic and business logic.


Contributions
<ul>
<li>Conversion of 4gl sql script to java code by extracting the business logic to the new backend service.</li>
<li>Write optimized sql queries.</li>
<li>Developing backend apis and services for frontend features and shared reusable services.,/</li>
<li>Develop front end user interfaces</li>
<li>Bug fixing.</li>
</ul>
                </p>
</RevealText>
            </Col>
        </Row>


         <Row>
        <Col xs="6" md={12} style={{"color":"white"}}>
        <RevealText>
                <div>

                    <h3>Reservation system and inventory management system for Sri Lanka Railway - Mobitel (pvt) Ltd</h3>
                </div>

                <p>
              Working on the Sri Lanka railway online seat reservation web application and Station master web application for railway station masters to handle day-to-day tasks related to the railway such as operational , inventory management and ticket booking. Web seat reservation platform and it's data logic handling back end rest api is developped using Java 8 and Spring boot. 
Station master web module for handling railway operations including seat reservation for walking and call-center customers are done through station master module. It is developped using Html,Css,Javascript,Jsp,Java-8.
These are the main applications in this system and there are some background scheduled programmes written using Java for automating processes such as handling other operations and for notification
sending to the customers, invoice generation in a timely manner for the erp.
I am working on these applications as a full-stack software engineer. 



Contributions
<ul>
<li>Developping frontend user interfaces and ui enhancements</li>
<li>Backend service development and do modifications ,improvements in the backend applications including automating processes using java applications.</li>
<li>Develop front end user interfaces</li>
<li>Payment methods intergration.</li>
<li> Customer notifications (Email/Sms) mechanisms development.
</li>
<li>Bug fixing.</li>
<li>Develop solutions for new change requirements.</li>
<li>Generate excel reports from the database and writing efficient sql queries for them. These reports are used by internal teams for the purpose of financial and system security.</li>
<li>ive Issue Fixing and operational tasks: Monitor and troubleshoot production issues raised in railway ticket booking system , and do operational tasks as client requests. </li>
<li>Develop solutions to smooth some of the lengthy and repetitive tasks such as inventory configuration sql scripts and java applications to generate those sqls.</li>
<li>Security enhancements and bootstrap/jquery library update according to information security team's suggestions.</li>
<li>Joined in production releases.</li> 

</ul>
                </p>
</RevealText>
            </Col>

        </Row>
        <Row>
            <Col xs="6" md={12} style={{"color":"white"}}>
            <RevealText>
            Apart from my main projects I have contributed to some R&D projects also when I am avaiable to them. 
            Apart from these career related things in my leisure time I listen to both classis and recently released musica and watch tv-series and movies. Playing pc games , pllaystation games also one of my hobby. Writing technical articles amd doing research and try learn them is also amonhg the thing I do in my leisure time.
            </RevealText>
            </Col>
        </Row>
    </Container>
    </>
    )
}