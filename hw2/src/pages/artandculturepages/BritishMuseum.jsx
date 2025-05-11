import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/britmuseum.jpg';


function BritishMuseum() {
    const place = {
        name: 'The British Museum',
        image: Picture,
        category: 'History',
        description: 'A public museum dedicated to human history, art and culture',     
        rating: 4.7,
        address: 'Great Russell St, London WC1B 3DG',
        openingTimes: '10:00 AM - 5:00 PM',
        link: 'https://www.britishmuseum.org/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6621872680776!2d-0.12695659999999998!3d51.5194133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sThe%20British%20Museum!5e0!3m2!1sen!2suk!4v1746825018514!5m2!1sen!2suk"

    };

    return <ContentView {...place} />;
}

export default BritishMuseum;
