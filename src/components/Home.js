import { memo,useContext } from 'react'
import Context from './contextComponent'
 const Home = () => {
    console.log("Home about to render")
    const {name,myFunction}= useContext(Context)
    myFunction()
    // console.log(myFunction())
    return (
        <>
        <h3>
            This is  Home component with props value "{name}"
        </h3>
        </>
    )
}
export default Home