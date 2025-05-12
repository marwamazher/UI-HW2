import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/murderexpress.jpeg';

function MurderExpress() {
        const restaurant = {
            name: 'The Murdér Express',
            image: Picture,
            cuisine: 'British',
            rating: '4.5',
            description: 'A thrilling dining experience with a murder mystery theme.',
            address: 'Pedley Steet Station, Arch 63, London, E1 5BW',
            openingTimes: '6:00 PM - 11:00 PM',
            experienceType: 'Theatrical, Immersive',
            link: 'https://themurderexpress.com/bethnalgreen/',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4571346276457!2d-0.06781442387145582!3d51.52317480955145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cc8d0d6b675%3A0x10e62d5ec21d4bf!2sThe%20Murd%C3%A9r%20Express!5e0!3m2!1sen!2suk!4v1746649766805!5m2!1sen!2suk'
        };
    
        return (
            <ContentView {...restaurant} />
        )

}

export default MurderExpress