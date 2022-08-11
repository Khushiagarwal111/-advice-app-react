import React from 'react';


class About extends React.Component {

    componentDidMount() {
        console.log("mounted");
    }
    componentWillUnmount() {
        console.log("unmouted")
    }

    render() { 
        return ( 
            <>
            <h1>About component</h1>
            </>
         
         );
    }
}
 
export default About;