$(document).ready(function(){
    (function($) {
        "use strict";
    // map definition
    const PortfolioData = [
        {
            url: 'cannabis',
            title: 'Cannabis',
            short: 'built with MERN',
            detail: 'I worked as a full stack developer and there were 8 devs on this team. I created pixel perfect pages from the designs on Invision using React.JS and implemented state management using Redux and API integration using Redux Saga. Also, I contributed to the back end development using Node.js, Mongoose, Express.js, Redis. Furthermore, I implemented integration with various third party services such as SurveyGizmo, ActiveCampaign, GTM, Cron Jobs, Cohesion DB, Neilson DMP, etc.',
            skills: 'Technologies: React.js, Redux, Redux Saga, Node.js, Express.js, Mongoose, MongoDB, Redis, SurveyGizmo, AWS, GTM, CRON Job, ActiveCampaign, ',
            website: ': lift.co',
            completed: '',
            pic: 'img/portfolio/lift.png'
        },
        {
            url: 'trading',
            title: 'Trading',
            short: 'Vue.js Development',
            detail: 'I worked as a frontend developer. Recorded trade history and displayed then via Chart.',
            skills: 'Technologies: Vue.js, D3.js, Firebase',
            website: '',
            completed: '',
            pic: 'img/portfolio/chart.PNG'
        },
        {
            url: 'fuelcards',
            title: 'FuelCards',
            short: 'System with fuelcard to pay for gasoline, diesel, and other fuels at gas stations',
            detail: 'My client was a small fuel company. He wanted a system with fuelcard to pay for gasoline, diesel, and other fuels at gas stations. I built web app, including back-end, front-end, REST api, pos-terminal software (got a little expirience in C) and tcp server to communicate pos-terminals with app.',
            skills: 'Technologies: AngularJS, Laravel',
            website: '',
            completed: '',
            pic: 'img/portfolio/fuelcard.png'
        },
        {
            url: 'pharmabook',
            title: 'Pharmabook',
            short: 'General medicine store sales & inventory, order management ERP application',
            detail: 'this ERP Application is general medicine store sales & inventory, order management ERP application.',
            skills: 'Technologies: React.js, D3.js',
            website: '',
            completed: '',
            pic: 'img/portfolio/Pharma.png'
        },
        {
            url: 'cts',
            title: 'CTS Field User',
            short: 'Built this startup\'s phase 1 MVP using the Ionic Framework version 2.',
            detail: 'Built this startup\'s phase 1 MVP using the Ionic Framework version 2. The style guide was provided by the client.',
            skills: 'Technoligies: google-maps-api  angularjs  ionic-framework',
            website: ': https://apps.apple.com/us/app/cts-field-user/id1225312419',
            completed: '',
            pic: 'img/portfolio/ionic.png'
        },
        {
            url: 'music',
            title: 'Music Streaming',
            short: 'built with AngularJS',
            detail: 'This is a music streaming web app. I\'ve built this web app using AngularJS.',
            skills: 'Technologies: Angular.js, website-development',
            website: '',
            completed: '',
            pic: 'img/portfolio/music.png'
        },
        {
            url: 'smart',
            title: 'SmartCastGlobal',
            short: 'SmartCastGlobal is an analytics/marketing engine that allows dynamic campaigns to be created for the auto industry and the success is tracked with various metrics in the dashboard',
            detail: 'SmartCastGlobal is an analytics/marketing engine that allows dynamic campaigns to be created for the auto industry and the success is tracked with various metrics in the dashboard. I built the initial proof of concept for my client and was later joined by a team of five to ramp-up development.            We built highly reusable components using AngularJS for the dashboards and marketing microsites in order to create dashboards and microsites that were customizable with a minimal amount of code.',
            skills: 'Technologies: HTML/CSS, SCSS, Bootstrap',
            website: '',
            completed: '',
            pic: 'img/portfolio/smart.png'
        },
        {
            url: 'truzen',
            title: 'Truzen',
            short: 'Enable CLIENTs to find the right therapist for them',
            detail: 'Truzen is a massage booking platform that connects clients with Licensed Massage Therapists near them. Truzen enables clients to find the right therapist for them. Filter with a variety of preferences such as location, time, day, gender, and price. Booking and payment are taken care of from within the app.',
            skills: 'Technologies: Angularjs, Django, AWS, Ansible, Postgres',
            website: '',
            completed: '',
            pic: 'img/portfolio/truzen.png'
        },
        {
            url: 'workforce',
            title: 'Wordforce Management',
            short: 'Web(Angular6)&Mobile(React Native) app with .NET on the Back-end ',
            detail: 'Web(Angular6)&Mobile(React Native) app with .NET on the Back-end. I was involved on all stages of development as a Full-Stack(Angular 6+ .Net) developer. The app allows to physically and digitally manage the complete operational process of a company to ensure that each step in the workflow is covered. Whether a company is a home health agency, private practice liaison or long-term acute care (LTAC) hospital Zurvus Solution will fully automate the workflow process internally, minimize human error, and increase productivity',
            skills: 'Technologies: Angular6, React Native .NET ',
            website: '',
            completed: '',
            pic: 'img/portfolio/wm.png'
        },
    ];
    const url = window.location.data;
    const pft = window.location.search.split('=').pop();
    const pftData = PortfolioData.find(function(item) {
        return item.url === pft;
    });
    console.log(pftData);
    $('#portfolio-title').text(pftData.title);
    $('#portfolio-short').text(pftData.short);
    $('#portfolio-website').html('<span>Website</span>' + pftData.website);
    $('#portfolio-completed').html('<span>Completed</span>' + pftData.completed);
    $('#portfolio-detail').text(pftData.detail);
    $('#portfolio-skill').text(pftData.skills);
    $('#portfolio-pic').attr('src', pftData.pic);
 })(jQuery)
})