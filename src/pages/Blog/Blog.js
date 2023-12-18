import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../../components/MainFeaturedPost/MainFeaturedPost.js';
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost.js';
import Main from '../../components/Main/Main.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import post1 from '../../posts/esc/blog-post.1.md.js';
import post2 from '../../posts/esc/blog-post.2.md.js';
import post3 from '../../posts/local/blog-post.3.md.js';

const mainFeaturedPost = {
  title: 'absolute music.',
  description:
    "Hey! I'm Mercy, a Canadian data scientist in training. I love music, world languages, and all the nerdy things in between.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
  link: '/about',
};

const featuredPosts = [
  {
    title: 'Eurovision',
    date: 'Song contest coverage from across the sea',
    description:
      'Updates from your favorite Eurovision artists all throughout the season. Song reactions, voting analyses, cultural deep dives, and more.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    link: '/eurovision',
  },
  {
    title: 'Local Music',
    date: 'An audience for homegrown tunes',
    description:
      'Giving musical acts around me a platform to share our united love of music, performing, and why we prioritize it in our everyday lives.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    link: '/music',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Inspired by rageful teenage angst and an impulse trip to Slovenia, I am starting a blog to talk about local and foreign music - and how it shapes our world through human connection.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'GitHub', icon: GitHubIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="News" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
