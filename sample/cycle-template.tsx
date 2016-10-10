import * as React from 'react';
import * as jQuery from 'jquery';

const externalTemplate = (() => {
    const properties = {
        key: 'SampleTemplate',
        text: 'Sample template',
        mappings: 'Path,Title,Filename,PictureURL',
        scripts: [{
            url: 'https://code.jquery.com/jquery-1.12.4.min.js',
            funcName: 'jQuery'
        }, {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/2.1.6/jquery.cycle2.min.js',
            funcName: 'cycle'
        }],
        styles: [{
            url: 'https://url-to-the-file/sample_style.css'
        }]
    };

    const component = React.createClass({
        componentDidMount: function() {
            this._startCarousel();
        },

        _startCarousel: function() {
            jQuery(function() {
                jQuery('.slides').cycle();
            });
        },

        render() {
            console.log(this.props.results);
            return (
                <div>
                    <h1>Carousel sample (template generator)</h1>
                    <div className="cycle-slideshow">
                        <div className="slides" data-cycle-prev="#prevSlide" data-cycle-next="#nextSlide">
                        {
                            this.props.results.map((result, index) => {
                                return (
                                    <img src={result.PictureURL} key={index} />
                                );
                            })
                        }
                        </div>
                        <a href="javascript:;" id="prevSlide" className="slide-cmd prev"></a>
                        <a href="javascript:;" id="nextSlide" className="slide-cmd next"></a>
                    </div>
                </div>
            );
        }
    });

    return {
        properties: properties,
        component: component
    }
})();