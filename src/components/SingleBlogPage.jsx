import React from 'react';
import Navigation from './Navigation';
import ContactEmail from './ContactEmail';
import Footer from './Footer';
import PostTeaser from './PostTeaser';
import {Helmet} from "react-helmet";

function SingleBlogPage(){
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lorem ipsum dolor sit amet consectetur adipisicing</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            <Navigation />
            <div className="singleBlogPage">
                <div className="container">
                    <div className="row titleRow">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                    </div>
                    <div className="row authorRow">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-3 align-self-center">
                                <img src="/assets/images/avatar.png" style={{width: '100%'}} alt="xharptech-avatar" />
                            </div>
                            <div className="col-lg-10 col-md-10 col-9 align-self-center">
                                <div className="row align-self-center">
                                    <div className="col-lg-2 col-md-1 col-3 align-self-center">
                                        <b>Xharptech</b>
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-2 align-self-center dashh">
                                        <span>|</span>
                                    </div>
                                    <div className="col-lg-3 col-12 align-self-center">
                                        <span>2nd January 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="imgRow">
                        <img src="/assets/images/sblogImg.png" alt="image" />
                    </div>
                    <div className="contentRow">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo pariatur perferendis? Ratione dolore voluptate quas quae, beatae, consequatur ad voluptates quam labore sapiente tempore nostrum asperiores error soluta et?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam optio laboriosam commodi doloribus quaerat similique quae impedit, ducimus autem, eaque id et. In esse dolore consectetur ratione, id cumque soluta praesentium, recusandae qui, eum facere nam. Eius officia nulla voluptas cumque, voluptatum explicabo aliquam fuga. Dicta dolor ducimus explicabo itaque! Dolorum perferendis, sed molestias sit tenetur nulla est explicabo quae numquam doloremque optio. Exercitationem numquam voluptas harum possimus. Ea.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est impedit ratione id illum doloremque quaerat corporis magnam repellat. Quidem!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore consequatur hic aliquam asperiores. Accusantium, soluta cum. Illum exercitationem culpa deleniti id, ab enim ratione quia quam similique cum quod suscipit rem asperiores? Saepe minus dolore, eligendi fugit corporis dolorum debitis ab ducimus hic facilis, suscipit pariatur, deleniti porro praesentium dignissimos ipsam. Aut dolorem deserunt quasi, possimus tempore dignissimos consequatur temporibus autem voluptas dolor veniam dolores nulla quae placeat, sapiente amet! Totam consectetur laudantium dolorum eum veniam nihil qui enim, repellat aperiam, adipisci iusto quo, fuga autem. Nobis quia porro voluptatem, sapiente fugiat sit soluta facilis voluptas voluptatum cumque, quasi necessitatibus sequi reprehenderit doloremque? Sed sapiente, hic impedit deserunt quos neque commodi? Architecto natus officiis dicta ipsam quibusdam ut cumque.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quas unde ea minima exercitationem quod nostrum fugiat dolores fuga distinctio commodi quae similique rerum nisi accusamus, consequuntur harum sint ab ipsum, velit dolore eveniet nihil. Asperiores, dolores! Recusandae enim provident at deleniti eum quibusdam, maiores unde saepe sint culpa porro.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint at est dolores adipisci ipsum.</p>
                        <hr />
                    </div>
                    <div className="writtenRow">
                        <p>Written by</p>
                        <img src="/assets/images/logo2.png" alt="xharptech-logo" />
                    </div>
                    <div className="row blogsRow">
                        <div className="blogs">
                            <h2>BLOG POSTS</h2>
                            <h1>Lorem ipsum dolor sit amet<br />consectetur.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.</p>
                            <div className="posts">
                                <div className="container-fluid">
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
                        </div>
                    </div>
                </div>
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default SingleBlogPage