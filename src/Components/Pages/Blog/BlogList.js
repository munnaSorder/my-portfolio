import React from 'react';

const BlogList = (props) => {
    const {title, blog, image, learnMore} = props.data;
    const clickLove = () => {
        alert('Thank you so much for the choice.It is not yet effective. It will be implemented in the next update')
    }
    return (
            <div className="col-lg-4 mb-4  mx-auto col-container">
                <div className="card mt-5">
                    <div>
                    <img width="100%"  src={image} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p class="card-text">{blog}</p>
                        <a target="_blank" href={learnMore} className="btn more-btn">Read More</a>
                        <a onClick={clickLove} href="#"><img align="right" className="love-btn" height="20px" width="20px" src="https://i.ibb.co/LgKgDWX/pngwing-com.png" alt=""/></a>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogList;