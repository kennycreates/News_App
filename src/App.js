import React, { useState, useEffect } from 'react'; 
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '94b6e84cd22ba72ec4fe0c1614448d682e956eca572e1d8b807a3e2338fdd0dc/stage';
    

const App = () => {
    const[newsArticles, setNewsArticles] = useState([]);

    useEffect (() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    
    return (
        <div>
            <h1>AI NEWS App</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;