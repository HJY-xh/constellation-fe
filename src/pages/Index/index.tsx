import { useEffect, useState } from "react";
import Card from "../../components/Card";
import DetailPopup from "../../components/DetailPopup";
import { getConstellationDetailUrl, getConstellationUrl } from "../../utils/API";
import { Constellation, ConstellationInfo } from "../../utils/common";
import styles from "./index.module.scss";

const Index = () => {
    const [constellationList, setConstellationList] = useState<Constellation[]>([]);
    const [constellationInfo, setconstellationInfo] = useState<ConstellationInfo>();
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        fetch(getConstellationUrl()).then(res => {
            return res.json();
        }).then(res => {
            setConstellationList(res.retdata);
        });
    }, []);

    const getConstellationInfo = (astroid: number) => {
        fetch(getConstellationDetailUrl(astroid)).then(res => {
            return res.json();
        }).then(res => {
            console.log('[ res.retdata ]', res.retdata)
            setconstellationInfo(res.retdata);
            setVisible(true);
        });
    }

    const checkDetail = (astroid: number) => {
        getConstellationInfo(astroid);
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    constellationList.map(item => 
                        <Card key={item.astroid} data={item} handleClick={checkDetail}/>
                    )
                }
            </div>
            <DetailPopup visible={visible} data={constellationInfo as ConstellationInfo} handleClose={()=>setVisible(false)}/>
        </div>
    )
}

export default Index;