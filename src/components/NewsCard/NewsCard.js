import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './cardstyles.js';

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i }) => {
    const classes = useStyles();
    
    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media}image ={urlToImage || 'https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                <div>
                    <Typography variant= "body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant= "body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
    <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant= "body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                    <Typography variant= "h5" color="textSecondary">{i + 1}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default NewsCard;