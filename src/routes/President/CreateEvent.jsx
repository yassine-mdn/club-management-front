import {Button, Input, Textarea, Title1, Title3} from "@fluentui/react-components";
import {useState} from "react";
import {DatePicker} from "@fluentui/react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateEvent = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());

    const save = () => {
      axios.post("http://localhost:8080/api/v1/events", {
          "name": name,
          "description": description,
          "date": date,
          "organizer": 4

      }).then(r =>{
          console.log(r.data)
          navigate("/president/club-details")
      })
    }


    return (
         <div className={"flex justify-center items-center h-full"}>
            <div className={"bg-neutral-100 rounded-lg shadow-lg flex justify-center flex-col gap-4 p-8 w-1/2 h-full"}>
                <Title1 align={"center"}>Create Event Form</Title1>
                <div className={"flex flex-col gap-2 "}>
                    <Title3>Name :</Title3>
                    <Input size={"large"} className={"w-full"} placeholder={"name"} value={name}
                           onChange={e => setName(e.target.value)}/>
                </div>
                <div className={"flex flex-col gap-2 "}>
                    <Title3>Description :</Title3>
                    <Textarea size={"large"} className={"w-full"} placeholder={"description"} value={description}
                           onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className={"flex flex-col gap-2 "}>
                    <Title3>Date :</Title3>
                    <DatePicker value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <Button size={"large"} appearance={"primary"} onClick={()=> save()}>Save</Button>
            </div>

        </div>
    );
};

export default CreateEvent;