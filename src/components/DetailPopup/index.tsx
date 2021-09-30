import { Popup, ProgressBar } from 'antd-mobile';
import { ConstellationDetail, ConstellationInfo } from '../../utils/common';
import styles from "./index.module.scss";

interface Props {
    visible: boolean;
    data: ConstellationInfo;
    handleClose: () => void;
}

const Index = (props: Props) => {
    const { visible, data, handleClose } = props;

    return (
        <Popup
            visible={visible}
            onMaskClick={handleClose}
            bodyStyle={{ 
                maxHeight: '80vh',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                overflow: 'scroll'
            }}
        >
            <div className={styles.popupContainer}>
                <p className={styles.title}>{data?.xz_astroname}</p>
                <div className={styles.itemContainer}>
                    <p className={styles.itemTitle}>本日运势</p>
                    <Card data={data?.xz_today}/>
                </div>
                <div className={styles.itemContainer}>
                    <p className={styles.itemTitle}>本周运势</p>
                    <Card data={data?.xz_week}/>
                </div>
                <div className={styles.itemContainer}>
                    <p className={styles.itemTitle}>本月运势</p>
                    <Card data={data?.xz_month}/>
                </div>
                <div className={styles.itemContainer}>
                    <p className={styles.itemTitle}>本年运势</p>
                    <Card data={data?.xz_year}/>
                </div>
            </div>       
        </Popup>
    )
}

export default Index;

interface CardProps {
    data: ConstellationDetail;
}

const Card = (props: CardProps) => {
    const { data } = props;
    const { xz_career, xz_color, xz_health, xz_love, xz_money, xz_number, xz_presummary, xz_star, xz_summary} = data;

    return (
        <div className={styles.cardContainer}>
                {xz_health && <p>
                    <span>健康运势</span>
                    <ProgressBar percent={Number(xz_health) * 20} />
                </p>}
                {xz_career && <p>
                    <span>工作运势</span>
                    {!!Number(xz_career) ? <ProgressBar percent={Number(xz_career) * 20} /> :  <span>{xz_career}</span>}
                </p>}
                {xz_love && <p>
                    <span>爱情运势</span>
                    {!!Number(xz_love) ? <ProgressBar percent={Number(xz_love) * 20} /> :  <span>{xz_love}</span>}
                </p>}
                {xz_money && <p>
                    <span>财运</span>
                    {!!Number(xz_money) ? <ProgressBar percent={Number(xz_money) * 20} /> :  <span>{xz_money}</span>}
                </p>}
                {xz_summary && <p>
                    <span>综合运势</span>
                    {!!Number(xz_summary) ? <ProgressBar percent={Number(xz_summary) * 20} /> :  <span>{xz_summary}</span>}
                </p>}
                {xz_number && <p>
                    <span>幸运数字</span>
                    <span>{xz_number}</span>
                </p>}
                {xz_color && <p>
                    <span>幸运色</span>
                    <span>{xz_color}</span>
                </p>}
                {xz_star && <p>
                    <span>贵人星座</span>
                    <span>{xz_star}</span>
                </p>}
                {xz_presummary && <p>
                    <span>性格概述</span>
                    <span>{xz_presummary}</span>
                </p>}
        </div>       
    )
}