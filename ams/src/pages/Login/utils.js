export const getUserTypes = (returnMap = false) => {
    if(returnMap == false) {
        return [
            { value: `0`, label: 'Admin' },
            { value: `1`, label: 'Teacher' },
            { value: `2`, label: 'Student' }
        ]
    }
    else{
        return {
            "0": 'Admin',
            "1": 'Teacher',
            "2": 'Student'
        }
    }
}