"use client"
import postCreateProduct from "@/services/api/postCreateProduct"
import { zodResolver } from "@hookform/resolvers/zod"
import MDEditor from "@uiw/react-md-editor"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from 'zod'

const formSchema = z.object({
    name: z.string().min(1, 'Campo obrigatório'),
    value: z.coerce.number().min(1, 'O valor precisa ser maior que zero'),
    description: z.string().min(1, 'Campo obrigatório'),
    image: z.string().min(1, 'Campo obrigatório')
})

type Schema = z.infer<typeof formSchema>

const ProductForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            value: 0,
            description: "",
            image: ""
        },
    })

    //sempre tratar o erro no componente
    const submitForm = async (data: Schema) => {
        try {
            const createdProduct = await postCreateProduct({
                name: data.name,
                description: data.description,
                value: data.value,
                image: data.image
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
            <p className="text-xl font-semibold">Detalhes</p>

            {/* name input */}
            <label className="text-sm font-semibold" htmlFor="name">Nome</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("name", { required: "Campo obrigatório" })} type="text" />
            {errors.name && <span className="text-sm text-red-700 font-semibold">{errors.name.message}</span>}

            {/* value input */}
            <label className="text-sm font-semibold" htmlFor="value">Valor</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("value", { required: "Campo obrigatório" })} type="number" />
            {errors.value && <span className="text-sm text-red-700 font-semibold">{errors.value.message}</span>}

            {/* image input */}
            <label className="text-sm font-semibold" htmlFor="image">Imagem</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("image", { required: "Campo obrigatório" })} type="text" />
            {errors.image && <span className="text-sm text-red-700 font-semibold">{errors.image.message}</span>}

            {/* description input */}
            <p className="text-sm font-semibold">Descrição</p>
            <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <MDEditor preview="edit" value={field.value} onChange={field.onChange} />
                }
            />
            {errors.description && <span className="text-sm text-red-700 font-semibold">{errors.description.message}</span>}

            <button type="submit" className="mt-4 w-fit flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md text-white font-medium">Salvar alterações</button>
        </form>
    )
}

export default ProductForm