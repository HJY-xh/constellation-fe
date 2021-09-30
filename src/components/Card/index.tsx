import { Constellation } from "../../utils/common";
import styles from "./index.module.scss";

interface Props {
    data: Constellation;
    handleClick: (astroid: number) => void;
}

const Index = (props: Props) => {
    const { data, handleClick } = props;
    const { astrodate, astroid, astroname, astropic } = data;

    return (
        <div className={styles.card} onClick={() => handleClick(astroid)}>
            <img alt={astroname} src={astropic} />
            <div>
                <p>{astroname}</p>
                <p>{astrodate}</p>
            </div>
        </div>
    )
}

export default Index;