const language = document.querySelectorAll(".drop_language");
const menu = document.querySelector(".menu_bar");
const dropMenu = document.querySelector(".menu_bar_mobile");
const introBackgrounds = document.querySelector(".introduction");
const border_animation = document.querySelector(".first_name");
prop = ['background: url("/images/dreamLifter-Bh5WgpvD.jpg")','background: url("/images/airplane_background.jpg")','background: url("/images/girlCardboat-DubbNzrn.jpg")']

function slider(property){
    introBackgrounds.style = property;
    console.log("ze")
}
// prop.forEach(() => setTimeout("slider()",1000));
// setTimeout(slider('background: url("/images/dreamLifter-Bh5WgpvD.jpg")'),1000);
// setTimeout(slider('background: url("/images/airplane_background.jpg")'),2000);
// setTimeout(slider('background: url("/images/girlCardboat-DubbNzrn.jpg")',3000));



function toggleMenu (){
    dropMenu.classList.toggle("hide");
    dropMenu.classList.add("dropIn");
}
function border(){
    border_animation.classList.add("border_animated");
    console.log('succeeded');
}

menu.addEventListener('click',toggleMenu) ;

border_animation.addEventListener('focus', border)


language.forEach(e => e.addEventListener('click',()=>{


    let lang = localStorage.getItem('language')
    if(lang == undefined){

        localStorage.setItem('language', 'fr');
    }
    if(lang == 'fr'){
        console.log(lang)
        localStorage.setItem('language', 'en');
    } else {
        console.log(lang)
        localStorage.setItem('language', 'fr');
    }

}) )






language.forEach(e =>e.addEventListener("click",()=> 
//     document.querySelector(".menu_bar_mobile").innerHTML = `
//         <p><a href="index.html" class="">Home</a></p>
//         <p><a href="#">About</a></p>
//         <p><a href="#">Our Services</a></p>
//         <p><a href="#">Contact</a></p>
//         <div class="language">
//         <p><img src="/images/unitedKingdom" alt="unitedKingdom" class="unitedKingdom_flag"></p>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="drop_language"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    
// `
        document.querySelector("body").innerHTML = `

<header>
<div class="logo">
<p><img src="/images/logo_green.jpg" alt="logo" id="logo"></p>
<p class="text_title">Cotrad Sarl</p>
</div>
<nav class="nav_bar">
<p><a href="index.html" class="home">Home</a></p>
<p><a href="#">About</a></p>
<p><a href="#">Our Services</a></p>
<p><a href="#">Contact</a></p>
<div class="language">
<p><img src="/images/unitedKingdom" alt="unitedKingdom" class="unitedKingdom_flag france_flag"></p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="drop_language"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
</div>
</nav>
<div class="menu_bar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
<div class="menu_bar_mobile hide dropIn">
<p><a href="index.html" class="home">Home</a></p>
<p><a href="#">About</a></p>
<p><a href="#">Our Services</a></p>
<p><a href="#">Contact</a></p>
<div class="language">
<p><img src="/images/unitedKingdom" alt="unitedKingdom" class="unitedKingdom_flag "></p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="drop_language"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
</div>
</div>
</header>
<main>

<section class="introduction">
<p class="main_title">Customs agent in Cameroon</p>
<p class="main_text">We ensure the best costs and deadlines for the customs clearance of your goods until delivery.</p>
<p class="main_Logo"><img src="/images/logo_white.png" alt="logo" class="main_logo"></p>
</section>

<section class="below_introduction">
<div class="feature_1 block-1 block-1-tablet">
<div class="tasks">
<p class="tasks_question">What we do</p>
<p class="tasks_logo"><img src="/images/ship.svg" alt="ship" class="ship_logo"></p>
</div>
<p class="tasks_item">A safe and reliable freight solution</p>
</div>
<div class="feature_1 block-1 block-2-tablet">
<div class="task_1">
<p class="service_1">Customs and transit</p>
<p class="service_logo-1"><img src="/images/truck.svg" alt="truck" class="truck"></p>
</div>
<p class="service_text-1">We help you with all your customs formalities, and we also facilitate the movement of your goods to the destination country.</p>
</div>
<div class="task_2 feature_1">
<p class="service_2 logistic">Transport and Logistics</p>
<p class="service_text-2">We guarantee that your goods will reach their destination, giving you greater traceability for your products.</p>
</div>
</section>

<div class="airplain_background"></div>

<section class="on_us">
<p class="tasks_question"> Why We</p>
<p class="on_us-title">We can provide you with a full range of customs formalities experts</p>
<p class="on_us-text">Our team of experts is here to give you all the advice you need on all your customs clearance problems. We recommend:</p>
<div class="task"><div class="delivered"><img src="/images/house.svg" alt="house" class="house"></div><p class="on_us-task">On-time delivery</p></div>
<div class="task"><div class="bill"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div><p class="on_us-task">Customer-specific quotation</p></div>
<div class="on_us-image1"></div>
<div class="on_us-image2background"><div class="on_us-image2"><img src="/images/girlCardboat-DubbNzrn.jpg" alt="card_truck" class="card_truck"></div></div>
</section>

<section class="services">
<p class="service_title">Our services</p>
<div class="service_boxes">
<div class="service_box">
<p class="servicebox_title-1">Advice AND support service</p>
<p class="servicebox_text-1">Do you want to import and/or export but don't know how to go about it? Our advice and support service will tell you everything you need to know.</p>
</div>
<div class="service_box">
<p class="servicebox_title-1">Delivery service</p>
<p class="servicebox_text-1">A reliable delivery service available in Africa (Cameroon, Chad and Central Africa)</p>
</div>
</div>
<div class="green_background"></div>
</section>

<section class="team">
<div class="team_Title"><p class="team_title">The Team</p></div>
<p class="team_subtitle">Meet a team of experts</p>
<div class="team_members">
<div class="member first">
<div class="member_role">
    <p class="member_name">Alfred</p>
    <p>Logistics Technician</p>
</div>
</div>
<div class="member second">
<div class="member_role">
    <p class="member_name ">Yannick</p>
    <p>Carrier</p>
</div>
</div>
<div class="member third">
<div class="member_role">
    <p class="member_name ">Pierre</p>
    <p>Standards and quality controller</p>
</div>
</div>
</div>
</section>

<section class="choice">
<div class="backgrounds">
<div class="first_background"></div>
<div class="second_background">
<p class="On_us">Why choose us</p>
<p class="second_background_title">We create opportunities for you to reach your potential</p>
<p class="second_background_text">We offer a customer-focused quality of service, helping you to increase productivity and make financial savings by providing</p>
<div class="services">
    <div class="service"><div class="bill"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg></div><p class="service_text">Adapted quotation</p></div>
    <div class="service"><div class="delivered"><img src="/images/house.svg" alt="house" class="house"></div><p class="service_text">Tracking deliveries</p></div>
    <div class="service"><div class="clock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></div><p class="service_text">On-time delivery</p></div>
</div>
</div>
</div>
<div class="imageOn_backgrounds"></div>
</section>

<section class="informations">
<div class="contact_head"><p class="contact">Contact</p></div>
<div class="end_informations">
<div class="adresses">
<p class="contact_title">Contact us</p>
<p class="contact_text">You can contact us for any further information.</p>
<div class="contacts_me">
    <div class="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></div>
    <div class="mail">
        <p class="mail_name">Email</p>
        <p class="mail_adresse">contact@cotradsarl.com</p>
    </div>
</div>
<div class="contacts_me">
    <div class="phone"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></div>
    <div class="">
        <p class="phone_name">Tel / Mobile</p>
        <p class="phone_number">+237 673673267</p>
        <p class="phone_number">+237 692500261</p>
    </div>
</div>
<div class="contacts_me">
    <div class="clock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg></div>
    <div class="meeting_time">
        <p class="meeting">Mon-Fri 8h-18H</p>
        <p>Sam 8h-13h</p>
    </div>
</div>
</div>
<form action="#" class="formular">
<div class="first_name">
    <label for="name"></label>
    <input type="text" id="name" placeholder="Votre Nom*" required>
</div>
<div class="email">
    <label for="mail"></label>
    <input type="email" id="mail" placeholder="Email*" required>
</div>
<div class="tel_number">
    <label for="tel"></label>
    <input type="text" id="tel" placeholder="Numero de telephone*" required>
</div>
<div class="town">
    <label for="city"></label>
    <input type="text" id="city" placeholder="Ville*" required>
</div>
<div class="comments">
    <textarea name="comment" id="comments" placeholder="Laissez un message"></textarea>
</div>
<div class="button">
    <input type="submit" id="button" value="Envoyer">
</div>
</form>
</div>
</section>

</main>

<footer>
<section class="footer_items">
<div class="foot_background">
<div class="foot_logo"><img src="/images/logo_white.png" alt="logo"></div>
</div>
<div class="foot_logo mobile"><img src="/images/logo_white.png" alt="logo"></div>  
<div class="foot_flex">
<div class="contact_us">
<div class="contacts_me">
    <div class="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></div>
    <div class="mail">
        <p class="mail_name">Email</p>
        <p class="mail_adresse">contact@cotradsarl.com</p>
    </div>
</div>
<div class="contacts_me">
    <div class="phone"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"></svg><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></div>
    <div class="">
        <p class="phone_name">Tel / Mobile</p>
        <p class="phone_number">+237 673673267</p>
        <p class="phone_number">+237 692500261</p>
    </div>
</div>
<div class="contacts_me">
    <div class="position"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"></svg><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></div>
    <div class="meeting_time">
        <p class="meeting">Cameroon, Yaounde</p>
        <p>Nkoabang</p>
    </div>
</div>
</div>
<div class="navigation_links">
<p><a href="index.html">Home</a></p>
<p><a href="#">About</a></p>
<p><a href="#">Our Services</a></p>
<p><a href="#">Contacts</a></p>
<div class="social_medias">
    <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></div>
    <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"></svg><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg></div>
    <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"></svg><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></div>
</div>
</div>
</div>
</section>
<p class="copy_right">Copy right © COTRAD SARL 2024</p>
        </footer>`
));


