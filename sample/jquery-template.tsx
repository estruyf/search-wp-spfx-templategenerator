import * as React from 'react';
import * as jQuery from 'jquery';

const externalTemplate = (() => {
    const properties = {
        key: 'SampleTemplate',
        text: 'Sample template',
        mappings: 'Path,Title,Filename',
        scripts: [{
            url: 'https://code.jquery.com/jquery-3.1.0.js',
            name: 'jQuery'
        }],
        styles: [{
            url: 'https://url-to-the-file/sample_style.css'
        }]
    };

    const component = React.createClass({
        componentDidMount () {
            jQuery(() => {
                var elm = jQuery('h1');
                elm.text(elm.text() + ' - updated with jQuery').css('color', '#c00000');
            });
        },

        render() {
            console.log(this.props.results);
            return (
                <div>
                    <h1>External template created with the template generator</h1>
                    {
                        this.props.results.map((result, index) => {
                            return (
                                <p className="my-sample-template" key={index}>
                                    <a href={result.Path}>{result.Title}</a>
                                </p>
                            );
                        })
                    }
                </div>
            );
        }
    });

    return {
        properties: properties,
        component: component
    }
})();