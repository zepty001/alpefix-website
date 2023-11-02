import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// 
export const client = sanityClient({
  projectId: '24s27pxw',
  
  dataset: 'production',
  apiVersion: '2023-09-05',
  useCdn: true,
  token:'skzY8wpi3q3r0j3U36Bh9eyqtlwbYj6AR2PytiFWYEYGuIcZqW3w6LRFBeJIgId8z7PWq8I2mpCVPX6MrlNjDY0cp4K5xz0Nmm2a8rBSjCU3d6aOyREFbogN6rfZ7xAYOdfgnnin7JTcX46dm9EgvnKqdx4mYD4VjlS6JII4ViLf5vQbmUGG',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);