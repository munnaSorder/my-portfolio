import React from 'react';
import image1 from '../../../image/blog/blog1.jpg'
import image2 from '../../../image/blog/blog2.jpg'
import image3 from '../../../image/blog/cute.jpg'
import './Blog.css'

const Blog = () => {
    return (
        <div className="container-fluid sdm-bg ">
           <div className="row m-auto container">
               <div className="col-md-4 blog-container">
                    <div class="card card-container">
                        <img class="card-img-top" height="300px" src={image1} alt="blog" />
                        <div class="card-body">
                            <h2 class="card-title text-dark">JavaScript Array</h2>
                            <p class="card-text text-dark">An array is a special variable, which can hold more than one value at a time...</p>
                            <a href="https://medium.com/@freelancermunnaa/javascript-array-4c4ffe6a1820" target="_blank" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
               </div>
               <div className="col-md-4 blog-container">
                    <div class="card card-container">
                            <img class="card-img-top" height="300px" src={image2} alt="blog" />
                            <div class="card-body">
                                <h2 class="card-title text-dark">How to Type Faster</h2>
                                <p class="card-text text-dark">There are no secret tips or tricks to becoming a faster typist. That might seem disappointing at ....</p>
                                <a href="https://www.wikihow.com/Type-Faster" target="_blank" class="btn btn-primary">Read More</a>
                            </div>
                    </div>
               </div>
               <div className="col-md-4 blog-container">
                    <div class="card card-container">
                                <img class="card-img-top" height="300px" src={image3} alt="blog" />
                                <div class="card-body">
                                    <h2 class="card-title text-dark">How to Impress a Girl</h2>
                                    <p class="card-text text-dark">Do you want to wow that certain girl? Though you can't control how she feels and make her fall in love...</p>
                                    <a href="https://www.wikihow.com/Impress-a-Girl" class="btn btn-primary" target="_blank">Read More</a>
                                </div>
                            </div>
                    </div>
           </div>
        </div>
    );
};

export default Blog;