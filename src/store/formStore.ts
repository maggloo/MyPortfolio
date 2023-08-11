import { create } from 'zustand'
import axios from "axios";


type useFormStoreType = {
    error: null | string
    loading: boolean
    sendForm: (formValue: formValueType) => void
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
        } catch (err: any) {
            set({error: err.message})
        } finally {
            set({loading: false})
        }
    }
}))
