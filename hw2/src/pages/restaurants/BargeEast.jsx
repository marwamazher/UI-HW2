import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/bargeeast.webp';

function BargeEast() {
    const restaurant = {
        name: 'Barge East',
        image: Picture,
        category: 'British',
        rating: '4.3',
        description: 'A floating dining experience.',
        address: 'River Lee, Sweetwater Mooring, 98 White Post Ln, Hackney Wick, London',
        openingTimes: '6:00 PM - 11:00 PM',
        experienceType: 'Immersive',
        link: 'https://www.bargeeast.com/',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.420622855804!2d-0.021022300000000004!3d51.5421857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d623cf1cd87%3A0xbce3e53bf1bbf9c0!2sBarge%20East!5e0!3m2!1sen!2suk!4v1746808137908!5m2!1sen!2suk'
    };

    return <ContentView {...restaurant} />;
}

export default BargeEast;
