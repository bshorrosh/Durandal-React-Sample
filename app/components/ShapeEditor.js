define(['react', 'services/ShapeParser', 'jsx!components/ShapeCanvas','jsx!components/ShapeSelect','data/SHAPES'],

    function (React, shapeParser, shapeCanvas, shapeSelect, shapes) {

        var ShapeEditor = React.createClass({
            mixins: [ new shapeParser.shapeParser()],

            //componentWillMount: function () {
            //    this._parser = new shapeParser.shapeParser();
            //
            //},

            componentDidMount: function () {

                $('.shapes-picker').change(this.handleTextChange);

                this.handleTextChange()
            },

            getInitialState: function () {

                return {text: ''};

            },

            render: function () {

                //var shapes = this._parser.parse(this.state.text);
                var shapes = this.parse(this.state.text);

                var tree = (

                    //js
                    //React.createElement("div", null,
                    //
                    //    React.createElement(shapeSelect.ShapeSelect, null),
                    //
                    //    React.createElement("textarea", {
                    //            id: "editor",
                    //            className: "editor",
                    //            onChange: this.handleTextChange
                    //        }
                    //    ),
                    //
                    //    React.createElement(shapeCanvas.ShapeCanvas, {shapes: shapes})
                    //)

                    //jsx
                    <div>

                        <shapeSelect.ShapeSelect />

                        <textarea id="editor" className="editor" onChange={this.handleTextChange} />

                        <shapeCanvas.ShapeCanvas shapes={shapes} />

                    </div>
                );

                return tree;
            },

            handleTextChange: function (event) {

                var file = $('.shapes-picker').val(),

                    shapeText = shapes.SHAPES[file] || '';

                this.setState({text: shapeText})

            }

        });

        return {

            ShapeEditor: ShapeEditor
        }
    })
