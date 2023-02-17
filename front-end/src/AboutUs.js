// import { Link } from 'react-router-dom'
// import './Home.css'
import { useState, useEffect } from 'react'

/**
 * A React component that represents the AboutUd page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [aboutus, setAboutUs] = useState([])
    const fetchData = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/AboutUs`)
          .then(response => {
            setAboutUs([response.data.paragraph1, response.data.paragraph2])
          })}
    return(<><h1>About Us</h1>
    <p>{aboutus[0]}</p>
    <p>{aboutus[1]}</p>  </>) //fragment incldue all the elements of an object
}

<img src="https://images.app.goo.gl/QUdXT4mE418RL7CW6" alt="React Image" />
// make this component available to be imported into any other file
export default AboutUs



// make this Aboutus
