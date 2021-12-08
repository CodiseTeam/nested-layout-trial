import Link from 'next/link'
import React from 'react'

const postLayout = ({children}) => {
    return (
        <div>
            <h1>Post</h1>
            <ul>
                <li>
                    <Link href="/post/postOne">Tab 1</Link>
                </li>
                <li>
                    <Link href="/post/postTwo">Tab 2</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default postLayout
