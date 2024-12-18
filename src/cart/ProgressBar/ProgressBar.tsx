import style from './ProgressBar.module.css'

function ProgressBar(props: any){

    return(
            <div className={style.progressBar}>
                
                <div className={style.ProgressContainer}>
                    <input type = "checkbox"
                        id="progressBar01"
                        checked={props.check01}/>

                        <label>Progress 01</label>
                        <img
                            src="#"
                            alt="img"/>
                </div>

                <div className={style.ProgressContainer}>
                    <input type = "checkbox"
                        id="progressBar01"
                        checked={props.check02}/>

                        <label>Progress 01</label>
                        <img
                            src="#"
                            alt="img"/>
                </div>

                <div className={style.ProgressContainer}>
                    <input type = "checkbox"
                        id="progressBar01"
                        checked={props.check03}/>

                        <label>Progress 01</label>
                        <img
                            src="#"
                            alt="img"/>
                </div>

            </div>
    );
}

ProgressBar.defaultProps = {
    check01: false,
    check02: false,
    check03: false
}

ProgressBar.type ={
    check01: Boolean,
    check02: Boolean,
    check03: Boolean
}
export default ProgressBar;