define(['plugins/http', 'durandal/app', 'knockout', 'react', 'jsx!components/ShapeEditor'],

    function (http, app, ko, React, shapeEditor) {

        return {

            attached: function () {
                displayShape()
            }

        };


        function displayShape() {

            //js
            React.render(React.createElement(shapeEditor.ShapeEditor,null), document.getElementsByClassName('reactContainer')[0]);

            ////jsx!components/ShapeEditor doesn't seem to work with React.render
            //React.render(<shapeEditor.ShapeEditor />, document.getElementsByClassName('reactContainer')[0]);

        }

    });