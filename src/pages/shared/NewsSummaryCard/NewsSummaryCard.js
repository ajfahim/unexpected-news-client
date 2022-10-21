import React from 'react';

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, author, image_url, details, title } = news
    return (
        <Card className="my-5">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            style={{ height: 60 }}
                            src={author.img}
                            className="me-2"
                        ></Image>
                        <div className='pt-2'>
                            <p className='mb-0 fw-bold'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200
                            ?
                            <>{details.slice(0, 200) + "..."} <Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;