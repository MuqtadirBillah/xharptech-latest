import React from "react";

function PostTeaser(){
    return(
        <div className='singlePost'>
            <div className="postHeader">
                <img src="/assets/images/postImg.png" alt="post-image" />
            </div>
            <div className="postBody">
                <a href='/blog/view'><h4>10 secret tips for managing a team remotely</h4></a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, vel.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, vel.</p>
            </div>
            <div className="postAuthor">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-3 left">
                        <img src="/assets/images/client.png" alt="Author-image" />
                    </div>
                    <div className="col--lg-10 col-md-9 col-9 align-self-center right">
                        <p>Bessie Cooper | 2nd January, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostTeaser;