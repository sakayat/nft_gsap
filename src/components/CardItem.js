import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContentCardAnimated } from '../hooks/gsap';


const CardItem = ({item}) => {
    const contentCard = useRef(null)
    useContentCardAnimated(contentCard)
    return (
        <div className="content card" ref={contentCard}>
            <span>{item.title}</span>
            <p>{item.des}</p>
            <Link to="">Learn More</Link>
        </div>
    );
};

export default CardItem;