import * as React from 'react';

const externalTemplate = (() => {
    const properties = {
        key: 'SampleTemplate',
        text: 'Sample template',
        mappings: 'Path,Title,Filename'
    };

    const component = React.createClass({
        render() {
            console.log(this.props.results);
            return (
                <div>
                    <h1>External template created with the template generator</h1>
                    {
                        this.props.results.map((result, index) => {
                            return (
                                <p key={index}>
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