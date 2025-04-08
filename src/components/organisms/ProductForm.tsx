"use client"
import useCategoryList from "@/hooks/useCategoryList"
import postCreateProduct from "@/services/api/postCreateProduct"
import putProduct from "@/services/api/putProduct"
import { zodResolver } from "@hookform/resolvers/zod"
import MDEditor from "@uiw/react-md-editor"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import Select, { MultiValue } from 'react-select'
import toast from "react-hot-toast"
import * as z from 'zod'
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(1, 'Campo obrigatório'),
    value: z.coerce.number().min(1, 'O valor precisa ser maior que zero'),
    description: z.string().min(1, 'Campo obrigatório'),
    image: z.string().min(1, 'Campo obrigatório'),
    categories: z.object({ value: z.string(), label: z.string() })
})

type Schema = z.infer<typeof formSchema>

const ProductForm: React.FC<{ product?: IProduct, productId: string }> = (props) => {
    const { product } = props
    const params = useParams()
    const router = useRouter()
    const { categories } = useCategoryList()
    const categoriesOptions = categories.map((category) => {
        return { value: category.name, label: category.name }
    })

    const [ chosenCategories, setChosenCategories ] = useState({})

    const handleChangeCategory = (newValue: MultiValue<{ value: string; label: string; }>) => {
        setChosenCategories(newValue)
        console.log(chosenCategories)
    }

    const { register, handleSubmit, control, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product?.name,
            value: product?.value,
            description: product?.description,
            image: product?.image
        },
    })

    //sempre tratar o erro no componente
    const submitForm = async (data: Schema) => {
        // novo produto - criar produto
        if (params.id === 'create') {
            try {
                const createdProduct = await postCreateProduct({
                    name: data.name,
                    description: data.description,
                    value: data.value,
                    image: data.image
                })
                toast.success('Produto criado')
                router.push('/backoffice/products')
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message)
                    return
                }
                toast.error("Erro ao criar produto")
            }
            return
        }

        // produto existente - atualizar produto
        try {
            const updatedProduct = await putProduct(Number(props.productId), {
                name: data.name,
                description: data.description,
                value: data.value,
                image: data.image
            })
            toast.success('Produto atualizado')
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao atualizar produto")
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
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("value", { required: "Campo obrigatório" })} type="decimal" />
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

            {/* category select */}
            <label className="text-sm font-semibold" htmlFor="categories">Categorias</label>
            {/* <select multiple className="h-10 rounded-md border border-[#273056] p-2 cursor-pointer" name="categories" id="category-select">
                <option value="none">sem categoria</option>
                {categories.map((category, index) => {
                    return <option key={index} value={category.name}>{category.name}</option>
                })}
            </select> */}
            { categories.length > 0 && <Select onChange={handleChangeCategory} name="categories" isMulti options={categoriesOptions} /> } 
            <button type="submit" className="mt-4 w-fit flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md text-white font-medium">Salvar alterações</button>
        </form>
    )
}

export default ProductForm