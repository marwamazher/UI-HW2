import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/opera.jpg';


function RoyalOpera() {
    const place = {
        name: 'The Royal Opera House',
        image: Picture,
        category: 'Art',
        description: 'Opera, ballet, and classical performances in Covent Garden.', 
        rating: 4.8,
        address: 'Bow St, London WC2E 9DD',
        openingTimes: '12:00 PM - 10:00 PM',
        link: 'https://www.rbo.org.uk/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.016073931909!2d-0.12219759999999998!3d51.51292109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb87a023c9%3A0x582a37df62d31c08!2sRoyal%20Ballet%20and%20Opera!5e0!3m2!1sen!2suk!4v1746826126554!5m2!1sen!2suk"
    };

    return <ContentView {...place} />;
}

export default RoyalOpera;
