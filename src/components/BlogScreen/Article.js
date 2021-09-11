import React from 'react';
import { posts } from '../../data/posts';

export const Article = () => {
    
    let content = [];
    let id = 0;

    posts.map(post => {
        content.push(post);
        id = post.length;
    });

    console.log(id);

    return (
        <div className="card mb-5">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <a href={ content[id].link }>
                        <img className="card-img-top" src={ content[id].image } alt={content[id].link.title} />
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-block">
                        <a href={ content[id].link }>
                            <h5 className="card-title">{ content[id].title }</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
