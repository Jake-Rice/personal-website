import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="blog">
        <Helmet>
            <title>Jake Rice - Blog</title>
            <meta name="description" content="Jake Rice is a software developer specializing in Web3 decentralized applications using Solidity, React and Javascript." />
        </Helmet>
        <h1>Blog</h1>
        <h2>Some more writing...</h2>
    </div>
  )
}

export default Blog;