import { Grid } from "@mui/material"
import { Layout1 } from "../../../common/components/layouts/Layout1"
import ListView from "../../../common/components/ListView"
import languageData from "../../../strings/en.json"
import { useDispatch, useSelector } from "react-redux"
import { deleteRequest, getRequest, resetStates, setFormData } from "./slice"
import { getRequest as getRequest_subjects} from "../SubjectManagement/slice"
import { useNavigate } from "react-router-dom"
import { use, useEffect, useState } from "react"

const StudentManagement = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { students, deleteAPIStatus } = useSelector(state => state?.student)

    const [rows, setRows] = useState(students);

    const { subjects_id_name_map } = useSelector(state => state?.subject)

    useEffect(() => {
        const rows = students?.map(s => {
            return {
                ...s,
                subjectsNames: s?.subjects?.map(subId => subjects_id_name_map[subId])?.join(', ')
            }
        })
        setRows(rows);
    }, [students, subjects_id_name_map])

    const commonStrings = languageData?.common?.buttons
    const localStrings = languageData?.pages?.studentManagement

    const headings = {
        id: {
            label: localStrings?.form?.id?.label,
        },
        name: {
            label: localStrings?.form?.name?.label,
        },
        subjectsNames: {
            label: localStrings?.form?.subjects?.label,
        }
    }

    const buttonHandler = () => {
        dispatch(setFormData({}));
        navigate('/add_or_update_student', {
            state: {
                mode: 'add'
            }
        })
    }

    const updateHandler = (r) => {
        dispatch(setFormData(r));
        navigate('/add_or_update_student', {
            state: {
                mode: 'update'
            }
        })
    }
    const deleteHandler = (r) => { dispatch(deleteRequest(r)) }

    useEffect(()=>{
        dispatch(resetStates());
        dispatch(getRequest());
        dispatch(getRequest_subjects());
    },[deleteAPIStatus])

    return (
        <Grid>
            <Layout1 title={localStrings?.header} buttonTitle={commonStrings?.add} buttonHandler={buttonHandler}>
                <ListView
                    headings={headings}
                    rows={rows}
                    actions={{ updateHandler, deleteHandler }}
                />
            </Layout1>
        </Grid>
    )
}

export default StudentManagement;