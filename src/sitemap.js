import Generator from 'react-router-sitemap-generator';
import Router from './routes/HomeRoute';

const generator = new Generator(
  'https://craftianosmoney.com',
  Router(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');
