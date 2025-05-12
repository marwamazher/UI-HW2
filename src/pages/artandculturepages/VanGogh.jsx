import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/vangogh.jpeg';


function VanGogh() {
    const place = {
        name: 'Van Gogh Exhibition',
        image: Picture,
        category: 'Art',
        description: 'A 360º digital art gallery that invites you to step into the universe of Vincent van Gogh.',     
        rating: 4.5,
        address: '106 Commercial St, London E1 6LZ',
        openingTimes: '10:00 AM - 6:00 PM',
        link: 'https://vangoghexpo.com/london/',
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6302480425743!2d-0.07681842387166384!3d51.519999209783414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5b10ed1d05%3A0xf7d6aeebf57aa090!2sVan%20Gogh%20London%20Exhibit:%20The%20Immersive%20Experience!5e0!3m2!1sen!2suk!4v1746818112618!5m2!1sen!2suk"

    };

    return <ContentView {...place} />;
}

export default VanGogh;
