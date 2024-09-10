import CodeEditor from "../../Components/CodeEditor/CodeEditor";
import styles from './About.module.css'

const About = () => {
    return(
        <div className={styles.container}>
            <h1>soy el about</h1>
            <CodeEditor />
        </div>
    )
}
export default About;