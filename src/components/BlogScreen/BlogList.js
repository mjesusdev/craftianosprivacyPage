import React from 'react';
import { posts } from '../../data/posts';
import { BlogCard } from './BlogCard';

export const BlogList = () => {

    return (
        <div className="card cardBlog mb-5">
            {
                posts.map( post => (
                    <BlogCard
                        key= { post.id }
                        { ...post }
                    />
                ))      
            }
        </div>
    );
}
