import {
    makeStyles,
    Caption1,
    Card,
    CardHeader,
    CardPreview, Subtitle1, tokens,
} from "@fluentui/react-components";
import PropTypes from "prop-types";


const useStyles = makeStyles({

    card: {
        width: "360px",
        maxWidth: "100%",
        height: "fit-content",
    },

    horizontalCardImage: {
        width: "64px",
        height: "64px",
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },

});

const HorizontalCard = (props) => {
    const styles = useStyles();

    return (
        <div>
            <section className={"w-fit"}>
                <Card className={styles.card} onClick={props.handleClick} orientation="horizontal">
                    <CardPreview className={styles.horizontalCardImage}>
                        <img
                            className={styles.horizontalCardImage}
                            src={props.icon}
                            alt="App Name Document"
                        />
                    </CardPreview>

                    <CardHeader
                        header={<Subtitle1 as="h4" block className={"font-semibold"}>{props.title}</Subtitle1>}
                        description={
                            <Caption1 className={styles.caption}>{props.description}</Caption1>
                        }
                    />
                </Card>
            </section>
        </div>
    );
};

HorizontalCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    handleClick : PropTypes.func.isRequired,
}
export default HorizontalCard;