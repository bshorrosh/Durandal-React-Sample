define(['react'],

    function (React) {

        return {

            ShapeSelect: React.createClass({

                componentDidMount: function () {

                    $('.shapes-picker').val('robot')
                },

                render: function () {

                    //js
                    //return (
                    //
                    //    React.createElement("select", {className: "shapes-picker"},
                    //
                    //        React.createElement("option", {value: "react"}, "React"),
                    //
                    //        React.createElement("option", {value: "robot"}, "Robot")
                    //    )
                    //)

                    //jsx
                    return (

                        <select className="shapes-picker" >

                            <option value="react">React</option>

                            <option value="robot">Robot</option>

                        </select>

                    )
                }
            })

        }
    });