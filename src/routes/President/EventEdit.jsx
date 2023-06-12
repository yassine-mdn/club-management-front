import {
    Button,
    FluentProvider, Input,
    Spinner,
    Textarea,
    Title1, Title2,
    Title3, webLightTheme
} from "@fluentui/react-components";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import FileCard from "../../components/file-card/index.jsx";
import {Modal} from "@fluentui/react";
import {useState} from "react";
import {Attach24Filled, Document24Filled} from "@fluentui/react-icons";



const EventEdit = () => {

    const {id} = useParams()

    const eventInfo = useQuery({
            queryKey: ['getEventById'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/events/${id}`)
        }
    )

    const eventTransactions = useQuery({
            queryKey: ['getEventTransaction'],
            queryFn: () => axios.get(`http://localhost:8080/api/v1/events/${id}/transactions`)
        }
    )

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };




    const download = (id, fileName) => {
        axios.get(`http://localhost:8080/api/v1/documents/${id}`, {responseType: 'blob'}).then(response => {
            const type = response.headers['content-type']
            const blob = new Blob([response.data], {type: type, encoding: 'UTF-8'})
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fileName
            link.click()
        }).catch((response) => {
            console.error("Could not Download the Excel report from the backend.", response);
        });
    }


    return (
        <div className={"flex flex-col gap-2"}>

            {
                eventInfo.isSuccess ?
                    <>
                        <img className={"h-[30rem] w-full object-cover rounded-xl relative group"}
                             src={
                                 eventInfo.data?.data.cover ??
                                 "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"}
                             alt={""}
                        />
                        <Title1 className={"relative bottom-20 left-4 !text-6xl"}>
                            {eventInfo.data?.data.name} - <Title1
                            className={"h-full text-red-400 !mb-2"}> {eventInfo.data?.data.status} </Title1>
                        </Title1>
                        <div className={"flex flex-col gap-2 relative bottom-14 mx-12"}>
                            <Title3 className={"text-blue-950"}> Description</Title3>
                            <Textarea className={"w-full"} size={"large"} value={eventInfo.data?.data.description}
                                      placeholder={"description"}/>
                            <div className={"grid grid-cols-2 grid-rows-1"}>
                                <div className={"flex flex-col w-full items-center gap-2"}>
                                    <Title3 className={"text-blue-950"}> Transactions</Title3>
                                    {eventTransactions.isSuccess ?
                                        <>
                                            {
                                                (eventTransactions.data?.data.preuve !== undefined && eventTransactions.data?.data.preuve.length > 0) && eventTransactions.data?.data.preuve.map(((doc) => (
                                                    <FileCard fileName={doc.name}
                                                              handleClick={() => download(doc.idDocument, doc.name)}
                                                              description={doc.dateUpload} key={doc.idDocument}/>
                                                )))
                                            }
                                        </>
                                        :
                                        <Spinner/>
                                    }
                                    <Button size={"large"} appearance={"primary"} className={"w-full !mx-12"}
                                            onClick={() => setIsOpen(true)}>Add Transaction</Button>
                                </div>
                                <div className={"flex flex-col gap-2"}>

                                </div>
                            </div>

                        </div>
                    </>
                    :
                    <Spinner/>
            }
            <Modal
                isOpen={modalIsOpen}
            >
                <FluentProvider theme={webLightTheme}>
                    <div className={"!p-4 !px-40 flex flex-col items-center gap-2 rounded-md border-1 shadow-md"}>
                        <Title2 className={"text-blue-950"}>Add Transaction</Title2>
                        <Title3 className={"self-start"}>Value</Title3>
                        <Input size={"large"}/>
                        <Title3 className={"self-start"}>Attachement</Title3>
                        <div className="flex flex-col w-full align-center gap-4">
                            <label className="form-field border-2 border-dashed border-main-400 grid place-items-center text-gray-500 py-24">
                                {selectedFile === null?
                                    <>
                                        <Attach24Filled/>
                                        Click to upload your file
                                    </>:
                                    <>
                                        <Document24Filled/>
                                        {selectedFile.name}
                                    </>

                                }

                                <input
                                    id="file_input" type="file" onChange={handleFileChange}/>
                                <br/>
                            </label>
                        </div>
                        <Button size={"large"} appearance={"primary"} className={"w-full !mx-12"}
                                onClick={() => setIsOpen(false)}>Add Transaction</Button>
                    </div>
                </FluentProvider>
            </Modal>
        </div>
    );
};

export default EventEdit;