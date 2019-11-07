import React from 'react';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likeFilm: props.likeFilm,
            filmId: props.filmId,
        };
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick() {
        this.state.likeFilm(this.state.filmId);
    }

    render() {
        return (
            <button>
                <i className={this.props.liked ? 'fa fa-heart' : 'fa fa-heart-o'} onClick={this.handleLikeClick} ></i>
            </button>
        )

    }
}
export default LikeButton;