import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/bustronome.webp';


function Bustronome() {
    const restaurant = {
        name: 'Bustronome',
        image: Picture,
        category: 'French',
        rating: '4.5',
        description: 'A dining experience while exploring London on a top-of-the-range double-decker bus with a fully glazed roof. ',
        address: 'Coach Bay, 40B Victoria Embankment, London WC2N 6PB',
        openingTimes: '12:00 PM - 3:00 PM, 7:00 PM - 10:00 PM',
        experienceType: 'Immersive',
        link: 'https://bustronome.com/en/london/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2839778884254!2d-0.12146920000000001!3d51.5080059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b24620faf3%3A0x8b0f9998fe9204ce!2sBustronome!5e0!3m2!1sen!2suk!4v1746826718661!5m2!1sen!2suk"
    };

    return <ContentView {...restaurant} />;
}

export default Bustronome;
