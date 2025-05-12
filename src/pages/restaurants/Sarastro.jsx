import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/sastro.webp';

function Sarastro() {
        const restaurant = {
            name: 'Sarastro',
            image: Picture,
            category: 'Mediterranean',
            rating: '4.3',
            description: 'Named after a character in Mozart’s Magic Flute. Special musical events on different days of the week.',  
            address: '126 Drury Ln, London WC2B 5SU',
            openingTimes: '3:00 PM - 11:00 PM',
            experienceType: 'Spectacle & Entertainment',
            link: 'https://www.sarastro-restaurant.com/',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9696172913095!2d-0.11980539999999998!3d51.5137734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cadd5d0a65%3A0x3894bbf3e6ef9587!2sSarastro!5e0!3m2!1sen!2suk!4v1746811040414!5m2!1sen!2suk'
        };
    
        return (
            <ContentView {...restaurant} />
        )

}

export default Sarastro