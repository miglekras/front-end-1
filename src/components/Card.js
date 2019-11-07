import React from 'react';
import LikeButton from './LikeButton';


class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDescription: false,
            liked: props.liked,
        }
    }

    toogleDescription = () => {
        this.setState({
            isDescription: !this.state.isDescription,
        })
    }

    render() {
        const {  id, likeFilm, liked, title, backgroundImage, data, voteAverage, voteCount, description } = this.props;

        return (
            <div className="card">
                <div
                    className="card__image"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`
                    }}
                />

                <div className="card__title">
                    {title}
                </div>

                <div className='card__like'>
                    
                    <LikeButton 
                    filmId={id}
                    likeFilm={likeFilm}
                    liked={liked}
                    /> 
                </div>

                <div className="card__subtitle">
                    <span>{data}</span>
                    <span>{voteAverage} ({voteCount} votes)</span>
                </div>
                <div className="card-info">
                    <div className="card-info__header">SUMMARY</div>
                    <button className="card-info__hideButton" onClick={this.toogleDescription}>Toogle Description</button>
                    <div className="card-info__description">
                        {this.state.isDescription ? description : ''}
                    </div>
                </div>
            </div>

        )

    }
}

export default Card;