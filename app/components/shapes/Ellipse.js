define(['react', 'services/shapePropertyMixin'],

    function (React, shapePropertyMixin) {

        return {

            Ellipse: React.createClass({

                mixins: [shapePropertyMixin.shapePropertyMixin],

                render: function () {

                    var style = this.extractStyle(true);

                    style['border-radius'] = '50% 50%';

                    //js
                    //return React.createElement("div", {style: style, class: "shape"});

                    //jsx
                    return <div style={style} class="shape" />;
                }

            })
        };

    });
