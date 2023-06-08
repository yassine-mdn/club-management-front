import {
    makeStyles,
    shorthands,
    Caption1,
    tokens,
    Subtitle1,
    Card,
    CardHeader,
} from "@fluentui/react-components";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    main: {
        ...shorthands.gap("36px"),
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },


    headerImage: {
        ...shorthands.borderRadius("4px"),
        maxWidth: "48px",
        maxHeight: "48px",
        aspectRatio: 1,
        objectPosition: "center"
    },

    caption: {
        color: tokens.colorNeutralForeground3,
    },


});

const VerticalCard = (props) => {

    const styles = useStyles();

    return (
        <div className={styles.main}>
            <section className={"w-fit"}>
                <Card className={"h-52 w-96"} onClick={props.handleClick}>
                    <CardHeader
                        image={
                            <img
                                className={styles.headerImage}
                                src={props.icon}
                                alt="App Name Document"
                            />
                        }
                        header={<Subtitle1 as="h4" block className={"font-semibold"}>{props.title}</Subtitle1>}
                        description={
                            <Caption1 className={styles.caption}>{props.description}</Caption1>
                        }
                    />

                    <div className={"m-0 pb-2"}>
                        {props.children}
                    </div>
                </Card>
            </section>
        </div>
    );
};

VerticalCard.propTypes = {

    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    handleClick : PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,

}

export default VerticalCard;
