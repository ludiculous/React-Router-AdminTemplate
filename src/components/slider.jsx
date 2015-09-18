var React = require('react/addons');
var CTG = React.addons.CSSTransitionGroup;


module.exports = React.createClass({
    getInitialState: function(){
        return{
            currentSlide: 0,
            slides: [
                {title: "Slide #1" , subtitle:"Subtitle #1"},
                {title: "Slide #2" , subtitle:"Subtitle #2"},
                {title: "Slide #3" , subtitle:"Subtitle #3"},
                {title: "Slide #4" , subtitle:"Subtitle #4"}
            ]
        }
    },
    nextSlide: function(){
        if(this.state.currentSlide === this.state.slides.length-1){
            this.setState({currentSlide:0});
        }
        else{
            this.setState({currentSlide:this.state.currentSlide+1});
        }
    },
    render:function(){
        var slide = this.state.slides[this.state.currentSlide];
        return (
            <CTG transitionName="slide">
            <div key={Math.random()} className ="slide">
                <h1>{slide.title}</h1>
                <h3>{slide.subtitle}</h3>
                <button onClick={this.nextSlide}>Next</button>
            </div>
            </CTG>
        )
    }

})