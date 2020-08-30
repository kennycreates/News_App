import { makeStyles } from '@material-ui/core';


export default makeStyles ({
    media: 
    {
        height:200,
    },

    card: 
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },

    fullHeightCard:
    {
        height:'100%',
    },
   
    activeCard: 
    {
        borderBottom: '8px solid #22289a',  
    },

    grid: 
    {
        display: 'flex',
    },

    details: 
    {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15px',
    },

    title:
    {
        padding:'0 16px',
    },

    cardActions: 
    {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    });

