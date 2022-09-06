import axios from 'axios'

export  function patientDetailApi() {
    return axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
}

export  function appointmentDetailApi() {
    return axios.get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
}

export  function filesApi() {
    return axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
}

export  function doctorDetailsApi() {
    return axios.get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
}
