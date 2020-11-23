import React from 'react';
import './Blog.css';
import BlogList from './BlogList';
const blogList = [
    { 
        title: '10 important things about React',
        blog: 'If you are a JavaScript developer then you need to know these 10 things. If you want to be a good JavaScript developer, it is important for you to know these things...',
        image: 'https://i.ibb.co/Dg4dqr8/blog1.png',
        learnMore: 'https://freelancermunnaa.medium.com/10-important-things-about-react-6b6350cb08c9',
    },
    { 
        title: 'Discuss the basics of react',
        blog: 'If you know these things well then you can do well in react. If you want to learn how to react, you need to know about the following things.',
        image: 'https://i.ibb.co/tCzmS7p/blog2.jpg',
        learnMore: 'https://freelancermunnaa.medium.com/react-core-concept-da54a9cbe018',
    },
    { 
        title: 'Learn the important issues of JavaScript',
        blog: 'JavaScript is a popular scripting language used to increase the interactivity and functionality of web pages, form...',
        image: 'https://i.ibb.co/W5yrbDm/blog3.png',
        learnMore: 'https://freelancermunnaa.medium.com/learn-the-important-issues-of-javascript-7d9eaa57f56c',
    },
    { 
        title: '10 important things about JavaScript',
        blog: 'These 10 things about JavaScript are very simple but you will find it very useful...',
        image: 'https://i.ibb.co/K0LvQgy/blog4.png',
        learnMore: 'https://freelancermunnaa.medium.com/10-important-things-about-javascript-bc2ae6696fa7',
    },
    { 
        title: 'JAVASCRIPT ARRAY',
        blog: 'Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations...',
        image: 'https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png',
        learnMore: 'https://freelancermunnaa.medium.com/javascript-array-4c4ffe6a1820',
    }
]

const Blog = () => {
    return (
           <div className="container-fluid sdm-bg">
               <div className="overlay"></div>
               <div className="container">
               <div className="row mx-auto row-container">
                    {
                        blogList.map(data => <BlogList data={data} />)
                    }
               </div></div>  
           </div>
    );
};

export default Blog;