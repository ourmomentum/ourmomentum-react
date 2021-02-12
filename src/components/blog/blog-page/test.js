import React from 'react'
import BlogPage from './BlogPage'

export default function BlogPostContainer() {
    return (
        <div style={{height: '100%', width: '100%', paddingTop: '1em'}}>
            <BlogPage title="Lorem Ipsum" date="Aug 08, 2020" writers="Efe Akinci" />
        </div>
    )
}
