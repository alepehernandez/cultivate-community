import sendAlert from './Email/index.js'


function Home() {


const geo = navigator.geolocation

if ('geolocation' in navigator) {
}
    else {

    }

return (

<div>
<header>
   <script src="https://smtpjs.com/v3/smtp.js"></script>
   <script src="index.js"></script>
</header>
<body>
    <form method="post">
        <input type="button" value="SEND CRISIS ALERT" onclick="sendAlert()"/>
    </form>
</body>
</div>
);

}

export default Home;
