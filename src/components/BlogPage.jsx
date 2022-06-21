import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BlogHero from './BlogHero';
import PostTeaser from './PostTeaser';
import {Helmet} from "react-helmet";

function BlogPage(){
    return(
        <>        
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs | Meet Xharptech</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            <Navigation />
            <div className="blogPage">
                <BlogHero />
                <div className="blogPosts">
                    <h2>BLOG POSTS</h2>
                    <h1>Lorem ipsum dolor sit amet<br />consectetur.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.</p>
                    <div className="posts">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='nextBut'>NEXT <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;