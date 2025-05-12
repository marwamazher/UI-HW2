import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/pickncheese.webp';


function PickNCheese() {
    const restaurant = {
        name: 'Pick & Cheese',
        image: Picture,
        category: 'British',
        rating: '4.3',
        description: 'The world’s first cheese conveyor belt restaurant in the heart of London’s West End.',
        address: "Seven Dials Market, Short's Gardens, London WC2H 9AT",
        openingTimes: '12:00 PM - 9:30 PM',
        link: 'https://www.thecheesebar.com/seven-dials/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2839778884254!2d-0.12146920000000001!3d51.5080059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b24620faf3%3A0x8b0f9998fe9204ce!2sBustronome!5e0!3m2!1sen!2suk!4v1746826718661!5m2!1sen!2suk"
    };

    return <ContentView {...restaurant} />;
}

export default PickNCheese;