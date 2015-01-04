define(['react', 'services/shapePropertyMixin'],

    function (React, shapePropertyMixin) {

        return {

            Text: React.createClass({

                mixins: [shapePropertyMixin.shapePropertyMixin],

                render: function () {

                    var style = this.extractStyle(false);

                    //js
                    //return React.createElement("div", {style: style, class: "shape"}, this.props.properties.value);

                    //jsx
                    return <div style={style} class="shape">{this.props.properties.value}</div>;

                }

            })
        };

    })