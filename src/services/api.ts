import axios from 'axios';

const API_URL = 'https://pia.tracht-digital.de/api';
const BASE_URL = 'https://pia.tracht-digital.de:80';

export const fetchBlogPosts = async () => {
  const response = await axios.get(`${API_URL}/blog-posts/?populate=*`);
  return response.data.data.map((post: any) => {
    const imageUrl = post.attributes.Bild?.data[0]?.attributes?.url;

    console.log('Bild-URL:', imageUrl); // Ausgabe der Bild-URL

    return {
        id: post.id,
        title: post.attributes.Titel,
        shortDescription: post.attributes.Kurzbeschreibung,
        content: post.attributes.Inhalt.map((block: any) =>
            block.children.map((child: any) => child.text).join('')
        ).join('\n'), // Inhalt zusammenstellen
        imageUrl: imageUrl, // Bild-URL hier setzen
    };
});
};

export const fetchOffers = async () => {
  const response = await axios.get(`${API_URL}/offers/?populate=*`);
  return response.data.data.map((post: any) => {
    // Bilder prüfen und extrahieren
    const imageUrl =
      post.attributes.Images?.data && post.attributes.Images.data[0]?.attributes?.url
        ? `${BASE_URL}${post.attributes.Images.data[0].attributes.url}` // Basis-URL hinzufügen
        : null;
    console.log('image url of fetchOffers ', imageUrl)    
    console.log(`
      id,
      title,
      shortDescription,
      content,
      imageUrl
      `, post.id, post.attributes.Title, post.attributes.IntroText, post.attributes.Content, imageUrl )

    return {
      id: post.id,
      title: post.attributes.Title || 'Kein Titel verfügbar', // Titel oder Fallback
      shortDescription: post.attributes.IntroText || 'Keine Beschreibung verfügbar', // Fallback für IntroText
      content: post.attributes.Content || 'Kein Inhalt verfügbar', // Fallback für Content
      imageUrl: imageUrl || '/path/to/placeholder.jpg', // Platzhalter-Bild verwenden, wenn kein Bild verfügbar
    };
  });
};

export const fetchReviews = async () => {
  const response = await axios.get(`${API_URL}/reviews/?populate=*`);
  return response.data.data.map((post: any) => {
    // Bilder prüfen und extrahieren
    const imageUrl =
      post.attributes.Images?.data && post.attributes.Images.data[0]?.attributes?.url
        ? `${BASE_URL}${post.attributes.Images.data[0].attributes.url}` // Basis-URL hinzufügen
        : null;
    console.log('image url of fetchOffers ', imageUrl)    
    console.log(`
      id,
      title,
      shortDescription,
      content,
      imageUrl
      `, post.id, post.attributes.ReviewCreator, post.attributes.Review, post.attributes.Rating, imageUrl )

    return {
      id: post.id,
      ReviewCreator: post.attributes.ReviewCreator || 'Kein ReviewCreator verfügbar', // Titel oder Fallback
      Review: post.attributes.Review || 'Keine Review verfügbar', // Fallback für IntroText
      Rating: post.attributes.Rating || 'Kein Inhalt verfügbar', // Fallback für Content
      ReviewCreatorImage: imageUrl || '/path/to/placeholder.jpg', // Platzhalter-Bild verwenden, wenn kein Bild verfügbar
    };
  });
};




/*export const fetchOffers = async () => {
  const response = await axios.get(`${API_URL}/offers`);
  return response.data;
};*/

/*export const fetchAboutMe = async () => {
  const response = await axios.get(`${API_URL}/aboutme`);
  return response.data;
};*/

/*export const fetchReviews = async () => {
  const response = await axios.get(`${API_URL}/rezension`);
  return response.data;
};*/
