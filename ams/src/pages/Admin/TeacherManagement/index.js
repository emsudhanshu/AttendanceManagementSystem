import { Grid } from "@mui/material"
import { Layout1 } from "../../../common/components/layouts/Layout1"
import ListView from "../../../common/components/ListView"
import languageData from "../../../strings/en.json"
import { useDispatch, useSelector } from "react-redux"
import { deleteRequest, getRequest, resetStates, setFormData } from "./slice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRequest as getRequest_subjects} from "../SubjectManagement/slice"

const TeacherManagement = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { teachers, deleteAPIStatus } = useSelector(state => state?.teacher)

    const commonStrings = languageData?.common?.buttons
    const localStrings = languageData?.pages?.teacherManagement

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
        navigate('/add_or_update_teacher', {
            state: {
                mode: 'add'
            }
        })
    }

    const updateHandler = (r) => {
        dispatch(setFormData(r));
        navigate('/add_or_update_teacher', {
            state: {
                mode: 'update'
            }
        })
    }
    const deleteHandler = (r) => { dispatch(deleteRequest(r)) }

    useEffect(() => {
        dispatch(resetStates());
        dispatch(getRequest());
        dispatch(getRequest_subjects());
    }, [deleteAPIStatus])

    const [rows, setRows] = useState(teachers);

    const { subjects_id_name_map } = useSelector(state => state?.subject)

    useEffect(() => {
        const rows = teachers?.map(s => {
            return {
                ...s,
                subjectsNames: s?.subjects?.map(subId => subjects_id_name_map[subId])?.join(', ')
            }
        })
        console.log(rows)
        setRows(rows);
    }, [teachers, subjects_id_name_map])

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

export default TeacherManagement;