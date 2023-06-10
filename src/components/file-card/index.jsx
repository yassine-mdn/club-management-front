import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
import {
    makeStyles,
    Caption1,
    tokens,
    Subtitle1,
    Card,
    CardHeader, CardPreview, Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem,
} from "@fluentui/react-components";
import PropTypes from "prop-types";
import { Icon } from '@fluentui/react/lib/Icon';
import { getFileTypeIconProps } from '@fluentui/react-file-type-icons';
import {MoreHorizontal20Filled} from "@fluentui/react-icons";

const useStyles = makeStyles({
    card: {
        width: "360px",
        maxWidth: "100%",
        height: "fit-content",
    },


    caption: {
        color: tokens.colorNeutralForeground3,
    },
});


// Register icons and pull the fonts from the default Microsoft Fluent CDN:
initializeFileTypeIcons();


const FileCard = (props) => {
    const styles = useStyles();

    return (
        <div>
            <section className={"w-fit"}>
                <Card className={styles.card}  orientation="horizontal">
                    <CardPreview className={"h-12 w-12 p-2"}>
                        <Icon {...getFileTypeIconProps({ extension: 'pptx', size: 16 })} />
                    </CardPreview>

                    <CardHeader
                        header={<Subtitle1 as="h4" block className={"font-semibold"}>{props.fileName}</Subtitle1>}
                        description={
                            <Caption1 className={styles.caption}>{props.description}</Caption1>
                        }
                        action={
                            <Menu
                            >
                                <MenuTrigger disableButtonEnhancement>
                                    <MenuButton  appearance="transparent"
                                                 icon={<MoreHorizontal20Filled />}
                                                 aria-label="More options"/>
                                </MenuTrigger>

                                <MenuPopover>
                                    <MenuList>
                                        <MenuItem onClick={props.handleClick} >Download</MenuItem>
                                    </MenuList>
                                </MenuPopover>
                            </Menu>
                        }
                    />

                </Card>
            </section>
        </div>
    );
};

FileCard.propTypes = {

    fileName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleClick : PropTypes.func.isRequired,

}

export default FileCard;