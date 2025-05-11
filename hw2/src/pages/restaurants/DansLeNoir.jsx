import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/danslenoir.webp';


function DansLeNoir() {
    const restaurant = {
        name: 'Dans Le Noir',
        image: Picture,
        category: 'French',
        rating: '5',
        description: 'A unique experience where you dine in complete darkness.',
        address: '30-31 Clerkenwell Green, London',
        openingTimes: '6:00 PM - 11:00 PM',
        experienceType: 'Immersive',
        link: 'https://london.danslenoir.com/en_GB/',
        mapSrc:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.548500913054!2d-0.10196699999999999!3d51.521498799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4e2cdb3bcf%3A0xba4a90f602be8914!2sDans%20le%20Noir%20%3F%20London%20Restaurant!5e0!3m2!1sen!2suk!4v1746647839875!5m2!1sen!2suk'
    };

    return <ContentView {...restaurant} />;
}

export default DansLeNoir;
