import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
import { connect } from 'react-redux';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
    onExiting() {
        this.animating = true;
    }
    
    onExited() {
        this.animating = false;
    }
    
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.shoe.current.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.shoe.current.images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    toggle = () => {
        if (this.props.shoe.showGallery) {
            return {display:'block'}
        }
        return {display:'none'}
    }

    render() {
    const images = this.props.shoe.current.images
    const name = this.props.shoe.current.display
    
    if (images === undefined || this.props.shoe.showGallery === false) {
        return null
    } else {
        const { activeIndex } = this.state;

        const slides = images.map((image) => {
            return (
                <CarouselItem
                className='mx-auto'
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={Math.random().toString(36)}
                >
                <img src={image} alt=' '/>
                </CarouselItem>
            );
        });

        return (
            <div>
                <h3>{name}</h3>
                {/* <style>
                    {
                        `.custom-tag {
                        width: 30%;
                        height: auto;
                        margin: 1rem auto;
                        background: black;
                        }`
                    }
                </style> */}
                <Carousel 
                    className="custom-tag"
                    interval={false}
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>    
            </div>    
        );
    }
  }
}

const mapStateToProps = state => ({
    shoe: state.shoe
})

export default connect(mapStateToProps)(ImageGallery)