import {
    Avatar,
    Input, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger,
    Spinner,
    Subtitle2, Text,
    Title1,
    Title3,
    Tooltip
} from "@fluentui/react-components";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {MoreHorizontal28Filled} from "@fluentui/react-icons";


const ClubProfile = () => {


    const navigate = useNavigate();

    const clubDetails = useQuery({
            queryKey: ['getClubDetailPage'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/clubs/4/details`)
        }
    )


    return (
        <div className={"flex flex-col gap-2 max-w-[80rem] h-full mx-auto"}>
            {
                clubDetails.isSuccess ?
                    <>
                        <div
                            className={"w-[100rem] h-[50rem] rounded-lg bottom-8 self-center relative bg-cover bg-no-repeat bg-center shadow-lg"}
                            style={{backgroundImage: `url("${clubDetails.data?.data.cover}")`}}
                        >
                            <Menu
                            >
                                <MenuTrigger disableButtonEnhancement>
                                    <MenuButton
                                                 className={"absolute top-0 left-[98rem]"}
                                                 appearance="transparent"
                                                 icon={<MoreHorizontal28Filled />}
                                                 aria-label="More options"/>
                                </MenuTrigger>

                                <MenuPopover>
                                    <MenuList>
                                        <MenuItem onClick={() => navigate("edit")} >Edit</MenuItem>
                                    </MenuList>
                                </MenuPopover>
                            </Menu>
                            <img
                                className={"h-32 w-32 aspect-square object-cover rounded-md self-center bg-white border-2 relative shadow-lg top-80 left-12 "}
                                alt={"logo"}
                                src={clubDetails.data?.data.logo}
                            />

                            <Title1 className={"text-white relative top-52 left-48"}>{clubDetails.data?.data?.club.name}</Title1>

                        </div>

                        <div className={"h-full w-full mt-12"}>

                            <div className={"mt-4"}>
                                <Title3 className={"ml-5"}>Description</Title3>
                                <Subtitle2 className={"!line-clamp-3 h-22"}>
                                    {clubDetails.data?.data.description ?? 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes' +
                                        'toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow' +
                                        'pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear' +
                                        'claw.'}
                                </Subtitle2>
                            </div>

                            <div className={"mt-4"}>
                                <Title3  className={"ml-5 mt-12"}>About us</Title3>
                                <Subtitle2 className={"!line-clamp-3 h-22"}>
                                    {clubDetails.data?.data.aboutUs ?? 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes' +
                                        'toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow' +
                                        'pastry jujubes toffee sugar plum. Donut chocolate bar oat cake. Dragée tiramisu lollipop bear' +
                                        'claw.'}
                                </Subtitle2>
                            </div>

                            <div className={"grid grid-rows-1 grid-cols-2 mt-4"}>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Committee</Title3>
                                    <div className={"w-full flex flex-wrap gap-4 mt-2"}>
                                        {

                                            clubDetails.data?.data?.club?.committeeMembers?.map((commitee) => (
                                                <div key={commitee.idA} className={"flex items-center gap-2 mb-4"}>
                                                    <Tooltip content={`${commitee.firstName} ${commitee.lastName}`}
                                                             relationship="label">
                                                        <Avatar size={48} color={"colorful"}
                                                                name={`${commitee.firstName} ${commitee.lastName}`}/>
                                                    </Tooltip>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Budget</Title3>
                                    <div className={"w-full flex  justify-between gap-4 mt-2"}>
                                           <Input size={"large"} disabled={true}
                                                  value={clubDetails.data?.data?.club.budget.budget_initial - clubDetails.data?.data?.club.budget.budget_restant}
                                                  contentAfter={
                                                      <Text size={400} id={"afterLabelId"}>
                                                          MAD
                                                      </Text>
                                                  }
                                           />
                                    </div>

                                </div>
                            </div>
                            <div className={"grid grid-rows-1 grid-cols-2 mt-4"}>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Email</Title3>
                                    <div className={" mt-2"}>
                                        <Subtitle2>{clubDetails.data?.data?.email ?? "place holder email"}</Subtitle2>
                                    </div>
                                </div>
                                <div className={"flex flex-col gap-2 "}>
                                    <Title3  className={"ml-5"}>Phone</Title3>
                                    <div className={"mt-2"}>
                                        <Subtitle2>{clubDetails.data?.data?.phone ?? "066666690"}</Subtitle2>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </>
                    :
                    <Spinner/>

            }
        </div>
    );
};

export default ClubProfile;