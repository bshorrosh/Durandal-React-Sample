define(['react', 'services/shapePropertyMixin'],

    function (React, shapePropertyMixin) {

        return {

            Rectangle: React.createClass({

                mixins: [shapePropertyMixin.shapePropertyMixin],

                render: function () {

                    var style = this.extractStyle(true);

                    //js
                    //return React.createElement("div", {style: style, class: "shape"});

                    //jsx
                    return <div style={style} class="shape" />;
                }

            })
        };

    })