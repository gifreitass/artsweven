"use client"
import MDEditor from "@uiw/react-md-editor"
import { useForm } from "react-hook-form"
import * as z from 'zod'

const ProductForm = () => {
    const formSchema = z.object({
        name: z.string()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            name: ""
        },
    })

    return (
        <form>
            <input {...register("name", {required: "Campo obrigatório"})} type="text"/>
            {/* <MDEditor  /> */}
        </form>
    )
}

export default ProductForm