import ContentView from '../../components/ContentView.jsx';
import Picture from '../../assets/images/shakespeare.jpg';


function Shakespeare() {
    const place = {
        name: "Shakespeare's Globe",
        image: Picture,
        category: 'Theatre',
        description: 'The Globe Theatre, first built in 1599 for which William Shakespeare wrote his plays.',
        rating: 4.7,
        address: '21 New Globe Walk, London SE1 9DT',
        openingTimes: '10:00 AM - 6:00 PM',
        link: 'https://www.shakespearesglobe.com/',
       mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2801572023986!2d-0.09719399999999997!3d51.508075999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a905ae1621%3A0xe700778eb8b2878e!2sShakespeare's%20Globe!5e0!3m2!1sen!2suk!4v1746817868554!5m2!1sen!2suk"
    };

    return <ContentView {...place} />;
}

export default Shakespeare;
