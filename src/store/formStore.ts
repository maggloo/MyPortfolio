import { create } from 'zustand'
import axios from "axios";
import {AlertColor} from "@mui/material/Alert";


type useFormStoreType = {
    error: null | string
    loading: boolean
    status: AlertColor | null
    sendForm: (formValue: formValueType) => void
    setStatus: (status: AlertColor | null) => void
}

type formValueType = {
    name: string
    email: string
    subject: string
    message: string
}

export const useFormStore = create<useFormStoreType>((set) => ({
    error: null,
    loading: false,
    status: null,
    removeAllErrors: () => set({ error: null }),
    sendForm: async (formValue: formValueType) => {
        set({loading: true})
        try {
            await axios.post('https://portfolio-node-js-gilt.vercel.app/sendMessage', {
               name: formValue.name,
               email: formValue.email,
               subject: formValue.subject,
               message: formValue.message,
           },  { headers: {
                   'Content-Type': 'application/json'
               }})
                set({status: 'success'})
        } catch (err: any) {
            set({error: err.message})
            set({status: 'error'})
        } finally {
            set({loading: false})
        }
    },
    setStatus: (status: AlertColor | null) => {
        set({status: status})
    }
}))
