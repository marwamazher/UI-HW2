import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/gallery.jpg';


function NationalGallery() {
    const place = {
        name: 'The National Gallery',
        image: Picture,
        category: 'Art',
        description: 'A public art gallery showcasing one of the greatest collections of paintings in the world.',   
        rating: 4.7,
        address: 'Trafalgar Square, London WC2N 5DN',
        openingTimes: '10:00 AM - 9:00 PM',
        link: 'https://www.nationalgallery.org.uk/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2336655325225!2d-0.12829900000000002!3d51.508928999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2suk!4v1746825725584!5m2!1sen!2suk"
    };

    return <ContentView {...place} />;
}

export default NationalGallery;
