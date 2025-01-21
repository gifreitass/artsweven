"use client"
import postCreateProduct from "@/services/api/postCreateProduct"
import MDEditor from "@uiw/react-md-editor"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from 'zod'
interface Inputs {
    name: string,
    value: number
}

const ProductForm = () => {
    const formSchema = z.object({
        name: z.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            name: "",
            value: 0
        },
    })

    const submitForm = async (data: Inputs) => {
        try {
            const createdProduct = await postCreateProduct({
                name: data.name,
                description: "knsdckjn",
                value: data.value,
                image: "dasad"
            })
            toast.success('Produto criado')
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao criar produto")
        }
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-4/5 bg-white mt-10 rounded-md p-6 flex flex-col gap-3">
            <p className="text-xl font-semibold">Nome e descrição</p>
            <label className="text-sm" htmlFor="name">Nome</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("name", { required: "Campo obrigatório" })} type="text" />
            <label className="text-sm" htmlFor="value">Valor</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("value", { required: "Campo obrigatório" })} type="text" />
            {/* <MDEditor  /> */}
            <button type="submit" className="w-fit flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md text-white font-medium">Salvar alterações</button>
        </form>
    )
}

export default ProductForm