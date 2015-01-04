define(['react', 'jsx!components/shapes/Ellipse', 'jsx!components/shapes/Rectangle', 'jsx!components/shapes/Text'],

    function (React, ellipse, rectangle, text) {

        return {

            ShapeCanvas: React.createClass({

                //getDefaultProps: function () {
                //
                //    return {
                //
                //        shapes: []
                //
                //    };
                //},

                render: function () {

                    var self = this;

                    //js
                    //var shapeTree = React.createElement("div", {class: "shape-canvas"},
                    //
                    //    this.props.shapes.map(function (s) {
                    //
                    //        return self._createShape(s);
                    //
                    //    })
                    //);
                    //
                    //var noTree = React.createElement("div", {class: "shape-canvas no-shapes"}, "No Shapes Found");
                    //
                    //return this.props.shapes.length > 0 ? shapeTree : noTree;

                    //jsx
                    var shapeTree = <div class="shape-canvas">
                                    {
                                        this.props.shapes.map(function (s) {

                                            return self._createShape(s);

                                        })
                                    }
                                    </div>;

                    var noTree = <div class="shape-canvas no-shapes">No Shapes Found</div>;

                    return this.props.shapes.length > 0 ? shapeTree : noTree;
                },

                _createShape: function (shape) {

                    return this._shapeMap[shape.type](shape);
                },

                _shapeMap: {

                    //js
                    //ellipse: function (shape) {
                    //
                    //    return React.createElement(ellipse.Ellipse, {properties: shape.properties});
                    //},
                    //
                    //rect: function (shape) {
                    //
                    //    return React.createElement(rectangle.Rectangle, {properties: shape.properties});
                    //},
                    //
                    //text: function (shape) {
                    //
                    //    return React.createElement(text.Text, {properties: shape.properties});
                    //}

                    //jsx
                    ellipse: function (shape) {

                        return <ellipse.Ellipse properties={shape.properties} />;
                    },

                    rect: function (shape) {

                        return <rectangle.Rectangle properties={shape.properties} />;
                    },

                    text: function (shape) {

                        return <text.Text properties={shape.properties} />;
                    }
                }

            })
        }

    })