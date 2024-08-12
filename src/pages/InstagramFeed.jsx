import React, {useEffect, useState} from 'react';
import {MdOutlineOpenInNew} from "react-icons/md";

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            const token = 'IGQWROS0EzdjNUSGlUX1dBRDJDaC1oSXZAvZA3dwNHdlTkU2eFVRenNTem1fUGh6Q0FBM2RGN0h0SzFLbFZASZAE9IUzhHT1ZA0UGN3Y29kck1KYjY1VTYxaVB1ZAnY4aDBTTXpETzZA5WkdoMmhZAN1lyakpyTHdfYlF5d3cZD';
            const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`;
            const numberOfPosts = 8;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data.data.slice(0, numberOfPosts)); // Limita il numero di post
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []); // Nota: Aggiunto array vuoto [] per eseguire l'effetto solo una volta

    return (
        <>
            <div className="container mx-auto lg:my-auto sm:my-auto my-10 px-4 sm:px-8 lg:px-16 py-10 sm:py-20 lg:py-40 overflow-x-hidden overflow-y-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-800">Social Media</h1>
                <div className="grid gap-4 sm:gap-6 lg:gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full flex flex-col">
                                <div className="relative w-full" style={{paddingTop: '100%'}}>
                                    {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                                        <img
                                            className="absolute top-0 left-0 w-full h-full object-cover object-center"
                                            src={post.media_url}
                                            alt={post.caption}
                                        />
                                    ) : post.media_type === 'VIDEO' ? (
                                        <video controls className="absolute top-0 left-0 w-full h-full object-cover">
                                            <source src={post.media_url} type="video/mp4"/>
                                        </video>
                                    ) : null}
                                </div>
                                <div className="flex flex-col flex-grow justify-between p-4">
                                    <p className="text-gray-700 text-center">
                                        {post.caption ? post.caption.substring(2, 102) : ''}
                                        {post.caption && post.caption.length > 102 ? '...' : ''}
                                    </p>
                                    <a
                                        href={post.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-3.5 inline-flex justify-center w-full"
                                    >
                                        <MdOutlineOpenInNew className="mr-2"/> Apri
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstagramFeed;

